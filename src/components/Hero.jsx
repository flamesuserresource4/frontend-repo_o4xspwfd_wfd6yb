import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0B0D17] text-[#F8FAFC]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for depth and brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,232,255,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D17]/20 to-[#0B0D17]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00E8FF]/40 bg-[#0B0D17]/60 px-4 py-1.5 text-xs text-slate-300 backdrop-blur-sm shadow-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#00E8FF] shadow-[0_0_12px_2px_rgba(0,232,255,0.8)]" />
          Signal Intelligence for the Modern Web
        </motion.div>

        {/* Brand + Beam motif */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="relative mx-auto max-w-5xl font-extrabold leading-tight tracking-tight text-[#F8FAFC] text-[clamp(2rem,6vw,3.75rem)]"
        >
          Evident
          <div className="relative mt-5 flex w-full justify-center">
            <div className="relative inline-block">
              <span className="text-[clamp(1.1rem,2.6vw,1.6rem)] font-normal text-slate-300">
                How visible is your brand across humans, algorithms, and AI?
              </span>
              {/* Evident Beam Blue line */}
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#signup"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-700 bg-[#111522] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(2,6,23,0.4)] backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-[#00E8FF] opacity-80 blur-[3px]" />
              <span className="relative m-auto block h-2 w-2 rounded-full bg-white" />
            </span>
            Get Your Evident Score
          </a>
        </motion.div>
      </div>
    </section>
  );
}
