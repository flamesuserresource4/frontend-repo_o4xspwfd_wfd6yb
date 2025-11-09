import React from 'react';

export default function Signup() {
  return (
    <section id="signup" className="relative w-full bg-[#0B0D17] text-white">
      <div className="relative container mx-auto px-6 py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Stay in the loop</h2>
          <p className="mt-2 text-white/70">Get early access updates and product drops.</p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! You\'re on the list.');
            }}
          >
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-transparent focus:ring-2 focus:ring-cyan-400/80"
            />
            <button
              type="submit"
              className="relative overflow-hidden rounded-xl px-5 py-3 font-medium text-[#0B0D17] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#0B0D17]"
              style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, #00E8FF, #34D399, #A7F3D0, #22D3EE, #06B6D4, #67E8F9, #06B6D4, #22D3EE, #00E8FF)'
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
