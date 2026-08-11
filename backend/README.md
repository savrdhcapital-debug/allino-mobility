# Allino Mobility API

This service is the real backend for customer accounts and the operations CRM. The GitHub Pages website remains a static frontend; authentication and data access happen here through PostgreSQL + Prisma.

## Authentication

- `POST /api/v1/auth/register` — create a customer account.
- `POST /api/v1/auth/login` — verify email/password and create a persistent session.
- `GET /api/v1/auth/me` — return the current authenticated user.
- `POST /api/v1/auth/logout` — revoke the current session.
- `GET /api/v1/admin/me` — require an authenticated ADMIN user.
- `GET /api/v1/admin/summary` — authenticated CRM KPIs.
- `GET /health` — API + database health check.

Passwords are stored as bcrypt hashes. Sessions use random opaque tokens stored only as SHA-256 hashes in PostgreSQL. The API also sets an HTTP-only session cookie; the SPA can use the returned access token for GitHub Pages cross-origin requests.

## Production setup

1. Provision PostgreSQL.
2. Set `DATABASE_URL` in the backend service.
3. Set `ALLOWED_ORIGINS` to the exact website origin(s), not `*` in production.
4. Set `COOKIE_SECURE=true` when the API uses HTTPS.
5. Run `npx prisma generate` and `npx prisma db push` (or deploy an equivalent reviewed migration).
6. Set `DEMO_ADMIN_EMAIL` and a strong `DEMO_ADMIN_PASSWORD` as deployment secrets, then run `npm run seed` once.
7. Deploy this `backend` directory as a Node service. Railway, Render, or another Node host can run `npm run build` then `npm start`.
8. Set the GitHub repository variable `NEXT_PUBLIC_API_URL` to the deployed API URL and redeploy the Pages frontend.

Do not commit `.env` files, database credentials, session secrets, or production passwords.
