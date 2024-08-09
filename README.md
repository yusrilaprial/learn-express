# Test Express Layered CRUD
This App Just For Learning About Node TS, Express, Prisma, and Others.

## run app:
- Run Dev: ```npm run dev```
- Run Build: `npm run build`
- Serve: `npm run serve`

## Prisma:
- Init Prisma: `npx prisma init --datasource-provider postgresql`
- Before Migrate or Generate Prisma You Have To Change Your Model Like What You Want
- Run Migration: `npx prisma migrate dev --name init`
    - Generate Prisma (this auto run if you migrate): `npx prisma generate`
    - Create Migrate Without Run It Immediately: `npx prisma migrate dev --create-only`
    - Run Migrate `npx prisma migrate dev`
- Open Prisma Studio: `npx prisma studio`