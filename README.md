# Vrushabh B - Personal Portfolio Website

A futuristic, high-performance, interactive personal portfolio website for **Vrushabh B**, Computer Science Engineering Student at **Rural Engineering College, Hulkoti (588205)**.

Built with Next.js (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, React Three Fiber (R3F) + Drei, Framer Motion, and Lenis Smooth Scroll.

---

## 🚀 Key Features & Highlights

- **Futuristic Dark Aesthetics**: Deep obsidian backdrop (`#05070f`), electric cyan & violet ambient gradients, glassmorphism cards, and noise texture.
- **Interactive 3D Graphics**: Lightweight React Three Fiber low-poly wireframe mesh and ambient floating particles with mouse parallax and CSS fallback.
- **GSAP Animations**: ScrollTrigger-activated timelines, text reveals, scroll progress indicators, and count-up statistics.
- **Centralized Data File**: All content (projects, skills, education, experience, achievements, social links) is defined in a single file (`data/portfolio.ts`) for quick editing without touching core UI components.
- **Form Validation & API Route**: Built-in contact endpoint (`/api/contact`) with server-side validation and honeypot spam protection.
- **SEO & Accessibility**: Complete OpenGraph, Twitter metadata, JSON-LD Person schema markup, `sitemap.xml`, `robots.txt`, and `prefers-reduced-motion` compliance.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/)
- **3D Engine**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 💻 Local Development Setup

1. **Clone or Navigate to Project Directory**:
   ```bash
   cd C:\Users\kalin\.gemini\antigravity-ide\scratch\vrushabh-portfolio
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   > **Security Note**: Never commit `.env.local` or hardcode API keys/secrets in Git.

3. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Lint & Build Verification**:
   ```bash
   npm run lint
   npm run build
   ```

---

## ✏️ How to Edit Content

To update Vrushabh's projects, skills, education, profile picture, or social links:

Open `data/portfolio.ts` and modify the relevant fields:

```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Vrushabh B",
    role: "Computer Science Engineering Student",
    college: "Rural Engineering College, Hulkoti – 588205",
    // ... edit contact details & links here
  },
  // ... edit projects, skills, and education here
};
```

---

## 🌐 Vercel Deployment Instructions

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import your repository into [Vercel](https://vercel.com).
3. Set the Framework Preset to **Next.js**.
4. Configure Environment Variables (if using SendGrid or 21st.dev keys).
5. Click **Deploy**.

---

## 🛡️ License

Created for Vrushabh B. Designed and developed with modern web standards.
