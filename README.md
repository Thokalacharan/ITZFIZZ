# Itzfizz Digital — Scroll-Driven Hero Animation

> Web Development Internship Assignment for **Itzfizz Digital**.  
> A modern, responsive landing page featuring a scroll-driven sports car animation inspired by cutting-edge kinetic web design.

---

## 1. Project Overview

This project is a high-performance landing page built for **Itzfizz Digital**. It showcases a smooth, scroll-driven visual interaction where a transparent sports car travels across a digital highway track in direct synchronization with the user's scroll progress. 

The website adopts a modern digital agency aesthetic featuring a dark charcoal background (`#060709`), clean typography, and electric lime accents (`#ccff00`).

---

## 2. Features

- **Initial Load Animation**: Smooth GSAP entrance revealing the navigation bar, headline, supporting sentence, impact statistics, and car.
- **Scroll-Driven Car Animation**: GSAP ScrollTrigger links the car's horizontal movement directly to the user's scroll position with fluid scrub physics.
- **Dynamic Neon Trail**: An electric-lime glow trail dynamically expands behind the vehicle as it drives.
- **Kinetic Letter Illumination**: The headline `"W E L C O M E   T O   I T Z F I Z Z"` illuminates character-by-character as the car passes each letter.
- **Bidirectional Playback**: The entire animation reverses smoothly when scrolling back to the top.
- **Impact Metrics**: Three design metrics (95% Client Satisfaction, 80% Faster Delivery, 100% Creative Commitment).
- **Agency Showcase**:
  - **About Section**: *"We Turn Ideas Into Digital Experiences"* with design philosophy highlights.
  - **Services Section**: Interactive cards for *Web Development*, *UI/UX Design*, and *Digital Experiences*.
  - **Contact Section**: Project inquiry form and direct email channel (`hello@itzfizz.digital`).
  - **Footer**: *"Itzfizz Digital — Crafted for the digital world."*
- **Responsive Layout**: Fluidly adapts across desktop, laptop, tablet, and mobile screens with zero horizontal overflow.
- **Accessibility**: Respects the user's `prefers-reduced-motion` settings.

---

## 3. Technologies Used

- **HTML5**: Semantic document structure.
- **CSS3 & Tailwind CSS v3**: Utility-first styling, glassmorphism, responsive grids, and custom animations.
- **JavaScript & React 19**: Component structure, state handling, and declarative UI.
- **Vite**: Ultra-fast build tool, local development server, and HMR.
- **GSAP (GreenSock)**: Animation timeline engine.
- **GSAP ScrollTrigger**: Viewport scroll synchronization and scrub physics.
- **@gsap/react (`useGSAP`)**: Safe React lifecycle integration and automatic trigger cleanup.
- **Lucide React**: Crisp iconography for UI cards and telemetry.

---

## 4. Project Folder Structure

```text
itzfizz-digital/
├── public/
│   └── assets/
│       └── car.png          # High-resolution transparent supercar asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed glassmorphic navigation with mobile menu
│   │   ├── Hero.jsx         # Scroll-driven hero track and kinetic typography
│   │   ├── Stats.jsx        # Impact metrics cards (95%, 80%, 100%)
│   │   ├── About.jsx        # Agency philosophy and highlight cards
│   │   ├── Services.jsx     # Web Dev, UI/UX, and Digital Experiences cards
│   │   ├── Contact.jsx      # Project inquiry form and contact channel
│   │   └── Footer.jsx       # Branded footer and status monitor
│   ├── App.jsx              # Master application assembler
│   ├── index.css            # Tailwind directives, speedway track, and neon glows
│   └── main.jsx             # React DOM root entry point
├── index.html               # Semantic HTML, Google Fonts, and SEO meta tags
├── package.json             # Scripts and dependencies
├── postcss.config.js        # PostCSS configuration for Tailwind
├── tailwind.config.js       # Custom colors, fonts, and letter spacing tokens
├── vite.config.js           # Vite configuration with root-relative base path ('/')
├── .gitignore               # Excludes node_modules, build artifacts, and logs
└── README.md                # Project documentation
```

---

## 5. Prerequisites

Before running this project, ensure you have installed:
- **Node.js** (version 18 or newer recommended)
- **npm** (version 9 or newer)

---

## 6. Installation Instructions

1. Clone or download the repository to your local computer.
2. Open your terminal in the project directory.
3. Install the dependencies:

```bash
npm install
```

---

## 7. Running the Project Locally

Start the local development server:

```bash
npm run dev
```

Open your browser at:
`http://localhost:5173/`

---

## 8. Production Build Instructions

To test or generate the production build:

```bash
npm run build
```

The compiled and optimized files will be output to the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## 9. Explanation of the GSAP ScrollTrigger Animation

This project uses **GSAP ScrollTrigger** to synchronize the car's movement with the user's scroll progress:

1. **Scrub-Based Synchronization (`scrub: 0.8`)**:
   Instead of running an automatic, time-based animation, GSAP links the car's horizontal translation (`x`) directly to the scroll distance of the hero container. Setting `scrub: 0.8` adds smooth inertia so the car glides realistically without stuttering.

2. **Kinetic Illumination Callback (`onUpdate`)**:
   Inside ScrollTrigger's `onUpdate(self)` handler, the current scroll progress is tracked from `0%` to `100%`. As the car's front bumper crosses each letter of `"WELCOME TO ITZFIZZ"`, that letter lights up in electric lime (`#ccff00`) with an intense text glow, and the neon trail behind the tires expands.

3. **Performance Optimization**:
   The animation uses GPU-accelerated CSS `transform` properties (`x`, `rotation`, `scale`) and `opacity`. This avoids layout recalculation (reflow) and maintains 60 frames per second.

4. **React Scoping & Cleanup (`useGSAP`)**:
   The animation is scoped inside the official `@gsap/react` `useGSAP` hook. When components mount or unmount, GSAP automatically manages the animation lifecycle and cleans up triggers to prevent memory leaks.

---

