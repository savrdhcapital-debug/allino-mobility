# Allino Phase 2 — Customer + CRM Foundation

## Routes
- `/login` customer sign-in
- `/register` customer registration
- `/forgot-password` account recovery
- `/dashboard` customer portal
- `/admin/login` protected CRM sign-in
- `/admin` CRM overview
- `/admin/customers`
- `/admin/bookings`
- `/admin/fleet`
- `/admin/kyc`
- `/admin/enquiries`
- `/admin/support`

## Production architecture
The public website is deployed as a static Next.js export on GitHub Pages. Authentication, database access and mutations must run from the separate backend service. The frontend should use a configured API base URL and never contain database credentials.

## Roles
`CUSTOMER` and `ADMIN` are represented in Prisma. Production authentication must use secure password hashing, short-lived access/session tokens, secure refresh/session handling, rate limiting, server-side validation and audit logging.

## Shared data
The existing Prisma models for User, Vehicle and Booking are the common foundation. KYC, payments, support, notifications, maintenance and damage records should remain modular and connect to these same entities rather than creating a disconnected CRM database.

## Important
The UI in this version does not claim that authentication, payment, KYC or live CRM data is operational. Those features become live only after the backend is deployed and its environment variables/API URL are configured.
