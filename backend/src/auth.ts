import crypto from "node:crypto";
import type { Request, Response } from "express";
import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

export const prisma = new PrismaClient();

const SESSION_DAYS = 7;
const SESSION_COOKIE = "allino_session";

export function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function isStrongEnoughPassword(value: unknown) {
  return typeof value === "string" && value.length >= 8;
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function newToken() {
  return crypto.randomBytes(32).toString("base64url");
}

export async function createSession(userId: string) {
  const token = newToken();
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await prisma.session.create({
    data: { userId, tokenHash: hashToken(token), expiresAt },
  });
  return { token, expiresAt };
}

export function setSessionCookie(res: Response, token: string, expiresAt: Date) {
  const production = process.env.NODE_ENV === "production";
  const secure = process.env.COOKIE_SECURE !== "false";
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: production ? secure : false,
    sameSite: production ? "none" : "lax",
    path: "/",
    expires: expiresAt,
  });
}

export function clearSessionCookie(res: Response) {
  res.clearCookie(SESSION_COOKIE, { path: "/" });
}

function tokenFromRequest(req: Request) {
  const authorization = req.get("authorization");
  if (authorization?.startsWith("Bearer ")) return authorization.slice(7).trim();
  return req.cookies?.[SESSION_COOKIE] as string | undefined;
}

export async function getAuthenticatedUser(req: Request) {
  const token = tokenFromRequest(req);
  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: { tokenHash: hashToken(token) },
    include: { user: true },
  });

  if (!session) return null;
  if (session.expiresAt <= new Date()) {
    await prisma.session.delete({ where: { id: session.id } }).catch(() => undefined);
    return null;
  }

  return session.user;
}

export function publicUser(user: { id: string; name: string; email: string; phone: string | null; role: UserRole }) {
  return { id: user.id, name: user.name, email: user.email, phone: user.phone, role: user.role };
}

export async function destroyCurrentSession(req: Request, res: Response) {
  const token = tokenFromRequest(req);
  if (token) await prisma.session.deleteMany({ where: { tokenHash: hashToken(token) } });
  clearSessionCookie(res);
}
