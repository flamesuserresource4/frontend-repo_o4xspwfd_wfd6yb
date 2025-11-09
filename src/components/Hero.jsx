import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white via-[#F5FAFF] to-white text-[#0A0F1F]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to soften contrast and add cyan tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#9FF0FF]/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9FF0FF]/40 bg-white/60 px-4 py-1.5 text-xs text-[#1F2937] backdrop-blur-sm shadow-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#9FF0FF] shadow-[0_0_12px_2px_rgba(159,240,255,0.8)]" />
          Signal Intelligence for the Modern Web
        </motion.div>

        {/* Brand + Beam motif */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative mx-auto max-w-5xl font-semibold leading-tight tracking-tight text-[#0A0F1F] text-[clamp(2rem,6vw,3.75rem)]"
        >
          Evident
          <span className="sr-only">—</span>
          <div className="relative mt-5 flex w-full justify-center">
            <div className="relative inline-block">
              <span className="text-[clamp(1.1rem,2.6vw,1.6rem)] font-normal text-[#1F2937]/80">
                How visible is your brand across humans, algorithms, and AI?
              </span>
              {/* Cyan beam cutting through text motif */}
              <motion.span
                className="absolute left-1/2 top-1/2 block h-[3px] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/70 blur-[2px]"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 block h-[1px] w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#9FF0FF] to-transparent"
                initial={{ x: '-12%' }}
                animate={{ x: ['-12%', '12%', '-12%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.h1>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#signup"
            className="group inline-flex items-center gap-3 rounded-full border border-[#9FF0FF]/50 bg-white/70 px-6 py-3 text-sm font-medium text-[#0A0F1F] shadow-[0_8px_30px_rgba(10,15,31,0.06)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-[#9FF0FF] opacity-80 blur-[3px]" />
              <span className="relative m-auto block h-2 w-2 rounded-full bg-[#0A0F1F]" />
            </span>
            Get Your Evident Score
          </a>
        </motion.div>
      </div>
    </section>
  );
}
