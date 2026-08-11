export type AllinoUser = { id: string; name: string; email: string; phone: string | null; role: "CUSTOMER" | "ADMIN" };

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "https://api.allino.in").replace(/\/$/, "");
const TOKEN_KEY = "allino_access_token";

export function apiUrl(path: string) {
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

function getToken() {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(TOKEN_KEY);
}

function saveToken(token?: string) {
  if (typeof window === "undefined") return;
  if (token) window.sessionStorage.setItem(TOKEN_KEY, token);
}

function clearToken() {
  if (typeof window !== "undefined") window.sessionStorage.removeItem(TOKEN_KEY);
}

async function request<T>(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json");
  const token = getToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const response = await fetch(apiUrl(path), { ...init, headers, credentials: "include" });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request failed.");
  return payload as T;
}

export async function login(email: string, password: string) {
  const result = await request<{ user: AllinoUser; accessToken: string }>("/api/v1/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
  saveToken(result.accessToken);
  return result.user;
}

export async function register(input: { name: string; phone: string; email: string; password: string }) {
  const result = await request<{ user: AllinoUser; accessToken: string }>("/api/v1/auth/register", { method: "POST", body: JSON.stringify(input) });
  saveToken(result.accessToken);
  return result.user;
}

export async function currentUser() {
  const result = await request<{ user: AllinoUser }>("/api/v1/auth/me");
  return result.user;
}

export async function adminSummary() {
  return request<{ users: number; bookings: number; vehicles: number; pendingKyc: number }>("/api/v1/admin/summary");
}

export async function logout() {
  try { await request("/api/v1/auth/logout", { method: "POST" }); } finally { clearToken(); }
}
