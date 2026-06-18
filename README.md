# Vikas Talawar — Portfolio

Personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Pages
- `/` — Home (hero + intro + social links)
- `/about` — About (bio, skills, tools)
- `/projects` — Projects (6 GitHub projects)
- `/resume` — Full CV with download link

## Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push to GitHub
2. Import repo at vercel.com → Deploy (zero config)

## Connect Hostinger Domain
- Vercel → Project → Settings → Domains → Add your domain
- Hostinger DNS → Add:
  - A record: `@` → `76.76.21.21`
  - CNAME: `www` → `cname.vercel-dns.com`
