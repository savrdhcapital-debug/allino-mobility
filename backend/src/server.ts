import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "allino-mobility-api",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/v1", (_req, res) => {
  res.json({
    service: "Allino Mobility API",
    status: "foundation",
    resources: ["auth", "vehicles", "availability", "bookings", "kyc", "payments", "notifications", "admin"],
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Allino Mobility API listening on port ${port}`);
});
