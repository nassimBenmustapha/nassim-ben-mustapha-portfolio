# 🖥️ Nassim Ben Mustapha — Full Stack & DevOps Portfolio

> Personal portfolio of **Nassim Ben Mustapha**, Full Stack & DevOps Engineer (Ariana, Tunisia).
> A cyber-terminal themed site built with **React + TypeScript + Vite**, showcasing cloud
> infrastructure, CI/CD pipelines, monitoring, and full-stack projects.

<p align="center">
  <a href="https://nassim-ben-mustapha-portfolio.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Site-Vercel-00e676?style=for-the-badge&labelColor=0a0a0a&logo=vercel" alt="Live Site" />
  </a>
  <img src="https://img.shields.io/badge/React-18-00e676?style=for-the-badge&labelColor=0a0a0a&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-00e676?style=for-the-badge&labelColor=0a0a0a&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-00e676?style=for-the-badge&labelColor=0a0a0a&logo=vite" alt="Vite" />
</p>

**🔗 Live:** [nassim-ben-mustapha-portfolio.vercel.app](https://nassim-ben-mustapha-portfolio.vercel.app)

---

## ✨ Features

- **Cyber terminal aesthetic** — neon-green (`#00e676`) + cyan accent, CRT scanlines, blueprint grid, terminal-window cards, green glow, and a `whoami` boot sequence on the hero
- **Home** — animated terminal boot, typewriter title, floating tech logos, and clickable stat cards that deep-link into the relevant sections
- **About** — bio, career timeline (XFlowData, Re:School, Les Ciments de Bizerte, Tunisie Telecom), education, and certifications (Meta, IBM, Google, University of Michigan, UC Irvine, Coursera + in-progress CKA / PCAP / OCA)
- **Skills** — grouped by Cloud, Containers, IaC, Monitoring, CI/CD, Languages, Backend, Frontend, Mobile & Game, AI & Data, Databases, and Security & Quality, plus an interactive terminal explorer
- **Projects** — DevOps & full-stack work (AWS HA infrastructure, Kubernetes HA cluster, DocExtractor AI pipeline, CI/CD pipelines, monitoring stack, Car Booking, ePrime Wallet, Al Moghamiroun mobile games, and more)
- **Contact** — Web3Forms-powered form (no backend) with a `systemctl status` availability block
- **Fully responsive** with scroll-to-top navigation, deployed on Vercel with SPA routing

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router |
| Icons | Lucide React + Devicon |
| Contact Form | Web3Forms |
| Deployment | Vercel |

---

## 🚀 Getting Started

> **Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Set up the contact-form key
cp .env.example .env
# then add your free key from https://web3forms.com:
#   VITE_WEB3FORMS_KEY=your_access_key_here

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** (Vite picks the next free port, e.g. 5174, if it's busy).

> **Windows / PowerShell note:** if `npm` is blocked by the execution policy
> (`npm.ps1 cannot be loaded`), either run `npm.cmd …` instead of `npm …`, or run once:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

### Scripts

```bash
npm run dev       # Start the dev server
npm run build     # Type-check (tsc) + production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## ⚙️ Configuration

- **Contact form** — set `VITE_WEB3FORMS_KEY` in `.env` (local) and in **Vercel → Settings → Environment Variables** (production). Without it, the form renders but won't deliver messages.

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Hero text, about, skills, projects, experience, certifications, contact | `src/data/portfolio.ts` |
| Theme colors, glow, shadows, fonts | `tailwind.config.js` |
| Terminal utilities (scanlines, grid, terminal-window, glow) | `src/index.css` |
| Page sections | `src/pages/` |
| Navbar / Footer | `src/components/` |

---

## 📁 Project Structure

```
devops-portfolio/
├── src/
│   ├── components/        # Navbar, Footer, TerminalHeader, Grid3D, blog, case-studies, visual
│   ├── data/
│   │   └── portfolio.ts   # ← all content: skills, projects, experience, certifications, contact
│   ├── pages/             # Home, About, Skills, Projects, Blog, CaseStudies, Contact
│   ├── App.tsx            # Routing + scroll-to-top
│   ├── index.css          # Theme utilities
│   └── main.tsx
├── public/
├── index.html
├── vercel.json            # SPA redirect rules
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Deployment (Vercel)

1. Push the repo to GitHub
2. Import it on [vercel.com](https://vercel.com) (preset: **Vite**, output: `dist`)
3. Add `VITE_WEB3FORMS_KEY` under **Environment Variables**
4. Deploy — every push to `main` auto-redeploys

---

## 📄 License

MIT.

## 🙏 Credits

Based on the open-source [DevOps Portfolio template](https://github.com/neerajnakka/devops-portfolio) by **Neeraj Chandra Nakka**, customized and extended by **Nassim Ben Mustapha**.

## 🔗 Links

- **Live Site:** [nassim-ben-mustapha-portfolio.vercel.app](https://nassim-ben-mustapha-portfolio.vercel.app)
- **LinkedIn:** [nassim-ben-mustapha](https://linkedin.com/in/nassim-ben-mustapha-817648200)
