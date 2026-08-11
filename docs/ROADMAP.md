# Allino Mobility — Development Roadmap

## Frozen production website

- `main` is production.
- GitHub Pages deploys only `main`.
- Public website UI, copy, layout, styling and approved vehicle imagery are frozen unless explicitly requested.

## Phase 005 — Backend foundation

1. Keep PostgreSQL + Prisma as the source of truth.
2. Create a separately deployable Node.js API because GitHub Pages cannot execute server-side code.
3. Implement health/configuration endpoints first.
4. Add customer authentication and role separation (`CUSTOMER`, `ADMIN`).
5. Add vehicle inventory and availability APIs.
6. Add booking creation, validation and status lifecycle.
7. Add KYC/document workflow.
8. Add payment/deposit integration after credentials and provider are selected.
9. Add admin/operations APIs for bookings, fleet, customers and KYC.
10. Add notification integrations (email/WhatsApp/SMS) after provider credentials are supplied.

## Release workflow

Every implementation phase must use a new `version-*` branch and a pull request into `main`. Do not merge automatically. Production changes become live only after the owner reviews and merges the PR.
