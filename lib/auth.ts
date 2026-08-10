export type SessionUser = { id: string; name: string; email: string; role: "CUSTOMER" | "ADMIN" };

// Authentication boundary. Plug NextAuth/Auth.js or another provider here when the
// production identity provider and callback URLs are configured. No secrets belong in source control.
export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}
