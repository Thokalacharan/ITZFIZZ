# Itzfizz Digital — Scroll-Driven Hero Animation

> **Web Development Internship Assignment**  
> A modern, premium digital agency landing page featuring an original scroll-driven automotive animation inspired by cutting-edge kinetic web design. Built with **React**, **Vite**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

---

## 🌟 Live Preview & Reference

- **Assignment Objective**: Recreate and elevate the visual experience inspired by: [Scroll Car Animation Reference](https://paraschaturvedi.github.io/car-scroll-animation).
- **Design Philosophy**: Minimal, modern, dark charcoal aesthetic (`#060709`) with electric lime accents (`#ccff00`), clean typography (`Space Grotesk`), generous spacing, and buttery 60fps animations.

---

## 🚀 Key Features

1. **Initial Page-Load Choreography (GSAP)**:
   - Navigation bar glides in smoothly from the top.
   - Letter-spaced headline (`W E L C O M E   T O   I T Z F I Z Z`) reveals with sequential stagger and upward motion.
   - Supporting sentence and call-to-action button reveal seamlessly.
   - The three impact metrics stagger into view.
   - The supercar smoothly settles onto the starting grid line without layout shift.

2. **Core Scroll-Driven Animation (GSAP ScrollTrigger + Scrub)**:
   - Synchronizes the horizontal movement of a high-performance sports car (McLaren 720S) directly to user scroll position.
   - Utilizes `scrub: 0.8` for natural momentum and fluid bidirectional travel (reverses instantly when scrolling back up).
   - Behind the vehicle, a dynamic electric-lime neon trail (`.neon-trail`) expands proportionally to the car's position.
   - As the vehicle travels across the speedway, the headline letters dynamically illuminate with intense neon glow (`#ccff00`) and subtle scale elevation.
   - Real-time telemetry monitor displays live scroll percentage (`0%` to `100%`) and GSAP engine status.
   - Uses hardware-accelerated CSS `transform` (`x`, `rotation`, `scale`) for zero layout thrashing.

3. **Below-The-Fold Agency Showcase**:
   - **About Section**: *"We Turn Ideas Into Digital Experiences"* with design philosophy highlights (Intentional Motion, Design Precision, Velocity & Power, Scalable Architecture).
   - **Services Section**: Interactive cards for *Web Development*, *UI/UX Design*, and *Digital Experiences* featuring micro-hover elevations and glow effects.
   - **Contact Section**: Interactive project inquiry form and direct communication channels.
   - **Footer**: *"Itzfizz Digital — Crafted for the digital world."* with system health indicators and social links.

4. **Performance & Accessibility**:
   - Respects `prefers-reduced-motion` media query for users requiring low-motion accessibility.
   - Uses modern `@gsap/react` `useGSAP` hook for automatic lifecycle management, trigger cleanup, and prevention of React 18/19 StrictMode memory leaks.
   - Responsive layouts optimized across 4K displays, laptops, tablets, and mobile screens.

---

## 🛠️ Mandatory Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component hierarchy, state management, and declarative UI |
| **Vite** | Blazing-fast build tool, local dev server, and HMR |
| **Tailwind CSS v3** | Modern utility-first styling, glassmorphism, and color system |
| **GSAP (GreenSock)** | Core animation timeline engine |
| **GSAP ScrollTrigger** | Viewport scroll synchronization and pin management |
| **Lucide React** | Featherweight icons for cards and telemetry |

---

## 📂 Project Directory Structure

```text
fizz/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── public/
│   └── assets/
│       └── car.png           # Transparent McLaren 720S top-view supercar asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky glassmorphic navigation with mobile menu
│   │   ├── Hero.jsx          # Scroll-driven hero speedway & kinetic typography
│   │   ├── Stats.jsx         # 3 impact metrics (95%, 80%, 100%)
│   │   ├── About.jsx         # Agency story and capability highlights
│   │   ├── Services.jsx      # Web Dev, UI/UX, and Digital Experiences cards
│   │   ├── Contact.jsx       # Direct contact channel and inquiry form
│   │   └── Footer.jsx        # Minimal branded footer
│   ├── App.jsx               # Master application layout
│   ├── index.css             # Tailwind base, road styling, and neon glows
│   └── main.jsx              # React DOM root entry
├── index.html                # SEO meta tags, Google Fonts, and viewport setup
├── tailwind.config.js        # Theme extensions, brand colors, letter-spacing
├── vite.config.js            # Vite configuration with relative base path ('./')
└── package.json              # Project dependencies and npm scripts
```

---

## 💻 Local Setup & Execution

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The compiled, optimized static files will be generated in the `dist/` directory.

---

## 🧠 Interview Guide: How ScrollTrigger Connects Car Motion to Scroll

When explaining this project in your internship interview, highlight these key engineering concepts:

1. **Scroll-to-Distance Mapping**:
   Instead of using standard CSS animations that run on time (`@keyframes`), we use GSAP `ScrollTrigger` with `scrub: 0.8`. The scroll position of the parent container is mapped linearly to the X-axis translation of the car:
   $$\text{Progress} \in [0, 1] \implies X = \text{Progress} \times (\text{Road Width} - \text{Car Width})$$

2. **Lag / Momentum Smoothing (`scrub`)**:
   By setting `scrub: 0.8`, GSAP adds a smooth 0.8-second easing lag to catch up to the user's scroll wheel. This eliminates jerky scroll wheel movements and makes the car glide smoothly like a real vehicle.

3. **Dynamic Letter & Trail Illumination**:
   Inside ScrollTrigger's `onUpdate(self)` callback, we compute `self.progress`. As the car's bumper passes each character of `"WELCOME TO ITZFIZZ"`, that character's opacity transitions to `1.0` with an electric lime text shadow, while the neon trail behind the car expands to `carX`.

4. **React Lifecycle & Cleanup**:
   We wrap animations inside the official `@gsap/react` `useGSAP()` hook scoped to `containerRef`. When the component unmounts or re-renders, GSAP automatically reverts all inline transforms and kills ScrollTriggers to prevent memory leaks.

---

## 🌐 Deploying to GitHub Pages

### Option A: Automated GitHub Actions (Recommended)
1. Initialize git and commit your code:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Itzfizz digital scroll-driven hero website"
   ```
2. Create a new GitHub repository (e.g. `itzfizz-scroll-animation`).
3. Link the remote and push to `main`:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/itzfizz-scroll-animation.git
   git branch -M main
   git push -u origin main
   ```
4. On your GitHub repository:
   - Navigate to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the Vite app, and publish it live!

### Option B: Manual Build & Deploy via `gh-pages`
```bash
npm install -D gh-pages
```
Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then run:
```bash
npm run deploy
```

---

## 🎨 Asset Replacement (Car Image)

The transparent car image is located at:
`public/assets/car.png`

To replace it with another vehicle:
1. Obtain any transparent-background PNG of a car (top view or side profile).
2. Save it directly to `public/assets/car.png` (overwriting the existing file).
3. The Vite build will automatically serve the new image with no code changes needed.

---

## 📋 Evaluation Checklist

- [x] Modern digital-agency dark theme (`#060709`) with electric lime accents (`#ccff00`).
- [x] Letter-spaced headline: `"WELCOME TO ITZFIZZ"`.
- [x] Supporting sentence: `"Digital experiences designed to move your business forward."`
- [x] Call-to-action button: `"Explore Our Work"`.
- [x] 3 Impact metrics: 95% Client Satisfaction, 80% Faster Delivery, 100% Creative Commitment.
- [x] Initial page-load animation (Nav, headline, subtitle, stats, car) via GSAP.
- [x] Core scroll-driven car animation using GSAP ScrollTrigger with scrub.
- [x] Dynamic neon trail and letter-by-letter kinetic illumination as the car travels.
- [x] About section: *"We Turn Ideas Into Digital Experiences"*.
- [x] Services section: Web Development, UI/UX Design, Digital Experiences.
- [x] Minimal footer: *"Itzfizz Digital — Crafted for the digital world."*.
- [x] Responsive layout across Desktop, Laptop, Tablet, and Mobile.
- [x] Clean browser console without errors or unhandled warnings.
- [x] `prefers-reduced-motion` accessibility support.
- [x] GitHub Pages deployment workflow configured.

---

**Crafted with precision for Itzfizz Digital.**
