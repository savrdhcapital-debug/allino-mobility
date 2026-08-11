# Allino Mobility Backend

This directory is the backend foundation for Allino Mobility. The public website is intentionally frozen and remains deployed from `main` through GitHub Pages.

## Why the backend is separate

The current Next.js application uses `output: "export"`, so GitHub Pages can serve the public static website but cannot run Next.js API routes or server-side Prisma code. Backend services therefore must be deployed separately.

## Responsibilities

- Customer accounts and authentication
- Vehicle/fleet management
- Availability checks
- Booking creation and lifecycle management
- KYC/document status
- Payments and deposits
- Notifications
- Admin/operations APIs
- Reviews, support tickets, maintenance and damage reports

## Existing database model

The repository already contains `prisma/schema.prisma` with the initial `User`, `Vehicle`, and `Booking` models plus booking/payment/KYC enums. Future API work should extend that schema rather than introducing a second data model.

## Deployment rule

Do not move the public website away from GitHub Pages as part of this phase. The backend can be deployed independently on a server/runtime that supports Node.js and PostgreSQL. The frontend will consume the backend through an environment-configured API base URL when that integration is approved.
