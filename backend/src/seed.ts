import "dotenv/config";
import { prisma, hashPassword, normalizeEmail } from "./auth";

async function main() {
  const email = normalizeEmail(process.env.DEMO_ADMIN_EMAIL ?? "admin@allino.in");
  const password = process.env.DEMO_ADMIN_PASSWORD;
  const name = process.env.DEMO_ADMIN_NAME ?? "Allino Admin";

  if (!password || password.length < 8) {
    throw new Error("Set DEMO_ADMIN_PASSWORD to a strong password (8+ characters) before seeding.");
  }

  const passwordHash = await hashPassword(password);
  const admin = await prisma.user.upsert({
    where: { email },
    update: { name, passwordHash, role: "ADMIN" },
    create: { name, email, passwordHash, role: "ADMIN" },
  });

  console.log(`Admin ready: ${admin.email}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => prisma.$disconnect());
