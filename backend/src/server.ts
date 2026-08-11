import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import {
  createSession,
  destroyCurrentSession,
  getAuthenticatedUser,
  hashPassword,
  isStrongEnoughPassword,
  normalizeEmail,
  prisma,
  publicUser,
  setSessionCookie,
  verifyPassword,
} from "./auth";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.disable("x-powered-by");
app.use(cors({
  origin(origin, callback) {
    const allowed = (process.env.ALLOWED_ORIGINS ?? "http://localhost:3000")
      .split(",").map((item) => item.trim()).filter(Boolean);
    if (!origin || allowed.includes("*") || allowed.includes(origin)) return callback(null, true);
    return callback(new Error("Origin not allowed"));
  },
  credentials: true,
}));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.get("/health", async (_req, res) => {
  let database = "ok";
  try { await prisma.$queryRaw`SELECT 1`; } catch { database = "error"; }
  res.status(database === "ok" ? 200 : 503).json({ ok: database === "ok", service: "allino-mobility-api", version: "0.2.0", database, timestamp: new Date().toISOString() });
});

app.get("/api/v1", (_req, res) => {
  res.json({ service: "Allino Mobility API", status: "ready", resources: ["auth", "vehicles", "availability", "bookings", "kyc", "payments", "notifications", "admin"] });
});

app.post("/api/v1/auth/register", async (req, res) => {
  try {
    const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
    const phone = typeof req.body?.phone === "string" ? req.body.phone.trim() : "";
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;
    if (!name || !email || !isStrongEnoughPassword(password)) return res.status(400).json({ error: "Name, valid email and password of at least 8 characters are required." });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: "An account with this email already exists." });

    const user = await prisma.user.create({ data: { name, phone: phone || null, email, passwordHash: await hashPassword(password) } });
    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expiresAt);
    res.status(201).json({ user: publicUser(user), sessionExpiresAt: session.expiresAt.toISOString(), accessToken: session.token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create account." });
  }
});

app.post("/api/v1/auth/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body?.email);
    const password = req.body?.password;
    if (!email || typeof password !== "string") return res.status(400).json({ error: "Email and password are required." });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await verifyPassword(password, user.passwordHash))) return res.status(401).json({ error: "Invalid email or password." });

    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expiresAt);
    res.json({ user: publicUser(user), sessionExpiresAt: session.expiresAt.toISOString(), accessToken: session.token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to sign in." });
  }
});

app.get("/api/v1/auth/me", async (req, res) => {
  const user = await getAuthenticatedUser(req);
  if (!user) return res.status(401).json({ error: "Authentication required." });
  res.json({ user: publicUser(user) });
});

app.post("/api/v1/auth/logout", async (req, res) => {
  await destroyCurrentSession(req, res);
  res.status(204).send();
});

app.get("/api/v1/admin/me", async (req, res) => {
  const user = await getAuthenticatedUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admin access required." });
  res.json({ user: publicUser(user) });
});

app.get("/api/v1/admin/summary", async (req, res) => {
  const user = await getAuthenticatedUser(req);
  if (!user || user.role !== "ADMIN") return res.status(403).json({ error: "Admin access required." });
  const [users, bookings, vehicles, pendingKyc] = await Promise.all([
    prisma.user.count(),
    prisma.booking.count(),
    prisma.vehicle.count(),
    prisma.booking.count({ where: { kycStatus: "PENDING" } }),
  ]);
  res.json({ users, bookings, vehicles, pendingKyc });
});

app.use((_req, res) => res.status(404).json({ error: "Not found" }));

const server = app.listen(port, () => console.log(`Allino Mobility API listening on port ${port}`));

async function shutdown() {
  server.close();
  await prisma.$disconnect();
}
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
