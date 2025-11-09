import { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  // Track mouse for reactive light flash (local accent, complements global glow)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Radial light that follows the mouse (brighter, tighter core)
  const flash = useMotionTemplate`radial-gradient(220px 220px at ${mouseX}px ${mouseY}px, rgba(0,232,255,0.45), rgba(124,244,224,0.32) 35%, rgba(255,0,128,0.22) 55%, transparent 72%)`;

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0D17] text-[#F8FAFC]"
    >
      {/* Spline 3D background (full cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/z3DRq211g66TkBow/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vibrant color wash overlays - do not block interaction */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Layered purple/magenta/cyan glows so the page reads color-forward, not black */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_15%,rgba(196,78,255,0.38),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_700px_at_80%_20%,rgba(255,0,128,0.28),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1300px_900px_at_50%_45%,rgba(0,232,255,0.22),transparent_68%)]" />
        {/* Gentle depth fade to anchor content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111522]/40 to-[#0B0D17]" />
      </div>

      {/* Local mouse-following flash for the hero section */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: flash }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00E8FF]/40 bg-[#0B0D17]/60 px-4 py-1.5 text-xs text-slate-200 backdrop-blur-sm shadow-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#00E8FF] shadow-[0_0_14px_2px_rgba(0,232,255,0.9)]" />
          Signal Intelligence for the Modern Web
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative mx-auto max-w-5xl font-extrabold leading-tight tracking-tight text-[#F8FAFC] text-[clamp(2rem,6vw,3.75rem)]"
        >
          How visible is your brand across humans, algorithms, and AI?
          <div className="relative mt-5 flex w-full justify-center">
            <div className="relative inline-block">
              <span className="text-[clamp(1.05rem,2.3vw,1.5rem)] font-normal text-slate-200">
                Measure, benchmark, and improve your discoverability.
              </span>
              {/* Cyan beam line */}
              <motion.span
                className="absolute left-1/2 top-1/2 block h-[3px] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E8FF]/70 blur-[2px]"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 block h-[1px] w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00E8FF] to-transparent"
                initial={{ x: '-12%' }}
                animate={{ x: ['-12%', '12%', '-12%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#signup"
            className="group inline-flex items-center gap-3 rounded-full border border-fuchsia-600/50 bg-[#111522]/70 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(2,6,23,0.45)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-[#00E8FF] opacity-90 blur-[4px]" />
              <span className="relative m-auto block h-2 w-2 rounded-full bg-white" />
            </span>
            Get Your Evident Score
          </a>
        </motion.div>
      </div>
    </section>
  );
}
