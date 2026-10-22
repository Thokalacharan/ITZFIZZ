import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Gauge, Flame } from 'lucide-react';
import Stats from './Stats';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const roadRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  // Headline words and characters for letter-spaced reveal: "W E L C O M E   T O   I T Z F I Z Z"
  const words = [
    { text: 'WELCOME', chars: ['W', 'E', 'L', 'C', 'O', 'M', 'E'] },
    { text: 'TO', chars: ['T', 'O'] },
    { text: 'ITZFIZZ', chars: ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z'] }
  ];

  useGSAP(() => {
    const letters = gsap.utils.toArray('.value-letter', containerRef.current);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(['#navbar', headlineRef.current, subtitleRef.current, ctaRef.current, statsRef.current, carRef.current], {
        opacity: 1,
        y: 0,
        x: 0,
      });
      letters.forEach(letter => {
        if (letter) {
          letter.style.opacity = '1';
          letter.style.color = '#ffffff';
        }
      });
      return;
    }

    // ==========================================
    // 1. INITIAL PAGE LOAD ANIMATION
    // Restrained, elegant, executes once on load
    // ==========================================
    const introTl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Navbar reveal
    introTl.fromTo(
      '#navbar',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Letter-spaced headline reveal with stagger and subtle upward movement
    introTl.fromTo(
      letters,
      { opacity: 0, y: 24, scale: 0.95 },
      {
        opacity: 0.35,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.025,
      },
      '-=0.4'
    );

    // Supporting sentence reveal
    introTl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.3'
    );

    // Call-to-action button
    introTl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    );

    // Car gentle settlement into its starting grid position
    introTl.fromTo(
      carRef.current,
      { opacity: 0, x: -40, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' },
      '-=0.5'
    );

    // Three impact statistics stagger reveal
    const statCards = statsRef.current?.querySelectorAll('.stat-item') || [];
    if (statCards.length > 0) {
      introTl.fromTo(
        statCards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        '-=0.5'
      );
    }

    // ==========================================
    // 2. CORE FEATURE: SCROLL-DRIVEN CAR ANIMATION
    // GSAP ScrollTrigger with scrub synchronization
    // ==========================================
    const computeDistance = () => {
      if (!roadRef.current || !carRef.current) return window.innerWidth * 0.7;
      const roadWidth = roadRef.current.clientWidth;
      const carWidth = carRef.current.clientWidth || 180;
      // Travel from start pad to right margin
      return Math.max(roadWidth - carWidth - 32, 180);
    };

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=130% top',
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(Math.round(progress * 100));

          if (!carRef.current) return;

          // Compute car's current position along track
          const currentX = gsap.getProperty(carRef.current, 'x') || 0;
          const carWidth = carRef.current.clientWidth || 180;
          const leadX = currentX + (carWidth * 0.85);

          // Update neon trail width behind car
          if (trailRef.current) {
            gsap.set(trailRef.current, { width: Math.max(0, leadX - 25) });
          }

          // Progressively illuminate headline letters
          const totalLetters = letters.length;
          const lettersToIlluminate = Math.floor(progress * totalLetters * 1.05);

          letters.forEach((letter, idx) => {
            if (!letter) return;
            if (idx <= lettersToIlluminate) {
              letter.style.opacity = '1';
              letter.style.color = '#ccff00';
              letter.style.textShadow = '0 0 18px rgba(204, 255, 0, 0.75), 0 0 35px rgba(204, 255, 0, 0.35)';
              letter.style.transform = 'translateY(-2px) scale(1.05)';
            } else {
              letter.style.opacity = '0.35';
              letter.style.color = '#ffffff';
              letter.style.textShadow = 'none';
              letter.style.transform = 'translateY(0) scale(1)';
            }
          });
        },
      },
    });

    // Animate car translation with subtle dynamic aerodynamic tilt and scale
    scrollTl.to(carRef.current, {
      x: () => computeDistance(),
      rotation: 0.8,
      scale: 1.04,
      ease: 'none',
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen bg-dark-950 flex flex-col justify-between pt-24 pb-6 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] hero-radial-glow pointer-events-none" />

      {/* TOP: Headline & Supporting Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-lime-glow-sm" />
          <span className="text-gray-400">DIGITAL AGENCY</span>
          <span className="text-white/40">•</span>
          <span className="text-brand-lime font-medium">INTERNSHIP ASSIGNMENT</span>
        </div>

        {/* HEADLINE: Letter-spaced "W E L C O M E   T O   I T Z F I Z Z" */}
        <div
          ref={headlineRef}
          className="my-2 select-none w-full max-w-5xl"
        >
          <h1 className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 md:gap-x-12 gap-y-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase">
            {words.map((group, gIdx) => (
              <span key={gIdx} className="inline-flex items-center gap-1.5 sm:gap-2.5">
                {group.chars.map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="value-letter inline-block transition-all duration-150 text-white/35 will-change-transform"
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Supporting Sentence */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto mt-2 mb-4 tracking-wide"
        >
          Digital experiences designed to move your business forward.
        </p>

        {/* CTA Button */}
        <div ref={ctaRef} className="flex items-center gap-4">
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white text-dark-950 hover:bg-brand-lime transition-all duration-300 shadow-md hover:shadow-lime-glow transform hover:-translate-y-0.5"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CENTER: SPEEDWAY / ROAD TRACK WITH SCROLL-DRIVEN CAR */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full my-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Telemetry Bar */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400 px-3 py-1.5 bg-dark-900/70 backdrop-blur-md rounded-t-xl border-t border-x border-white/10">
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-brand-lime" />
              <span className="hidden sm:inline">GSAP SCROLLTRIGGER ENGINE</span>
              <span className="sm:hidden">GSAP SYNC</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 hidden md:inline">SCRUB: 0.8s INERTIA</span>
              <div className="flex items-center gap-1.5 font-semibold text-brand-lime">
                <Flame className="w-3 h-3 text-brand-lime" />
                <span>DRIVE:</span>
                <span className="text-white font-mono">{scrollProgress}%</span>
              </div>
            </div>
          </div>

          {/* Speedway Track */}
          <div
            ref={roadRef}
            className="road-track relative w-full h-32 sm:h-40 md:h-48 lg:h-52 rounded-b-2xl rounded-t-none border border-white/10 overflow-hidden flex items-center shadow-2xl"
          >
            {/* Edge Safety Rails with neon glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lime/40 via-white/20 to-brand-lime/40" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-lime/40 via-white/20 to-brand-lime/40" />

            {/* Starting Grid Line */}
            <div className="absolute left-6 top-0 bottom-0 w-2 border-r-2 border-dashed border-white/20 flex flex-col justify-between py-1 text-[9px] font-mono text-gray-500 select-none">
              <span>01</span>
              <span>START</span>
              <span>GRID</span>
            </div>

            {/* Track Centerline Dashes */}
            <div className="road-center-line absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 opacity-35 pointer-events-none" />

            {/* Glowing Neon Trail following directly behind the sports car */}
            <div
              ref={trailRef}
              className="neon-trail absolute top-1.5 bottom-1.5 left-0 rounded-r-full pointer-events-none transition-[width] duration-75"
              style={{ width: '0px' }}
            />

            {/* THE HERO SPORTS CAR */}
            <div
              ref={carRef}
              className="absolute left-6 z-20 top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing will-change-transform"
              style={{ width: 'clamp(130px, 18vw, 220px)' }}
            >
              <img
                src="/assets/car.png"
                alt="Itzfizz Digital Supercar — McLaren 720S high-performance automotive visual"
                className="w-full h-auto object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.9)]"
                loading="eager"
              />
              {/* Headlight beam projection */}
              <div className="absolute top-1/4 -right-12 sm:-right-16 w-16 sm:w-24 h-12 sm:h-16 bg-gradient-to-r from-brand-lime/35 to-transparent blur-md pointer-events-none rounded-full" />
            </div>

            {/* Finish Line Checkered Strip on right */}
            <div className="absolute right-6 top-0 bottom-0 w-3 border-l-2 border-dashed border-brand-lime/40 flex flex-col justify-between py-1 text-[9px] font-mono text-brand-lime/70 select-none text-right">
              <span>FIN</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Three Impact Metrics */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div ref={statsRef}>
          <Stats variant="compact" />
        </div>

        {/* Scroll Helper */}
        <div className="flex items-center justify-center gap-2 mt-3 text-[11px] font-mono text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-ping" />
          <span>SCROLL DOWN TO DRIVE THE CAR & REVEAL THE EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
}
