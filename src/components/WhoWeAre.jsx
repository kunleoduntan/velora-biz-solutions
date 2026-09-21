import { useEffect, useRef, useState } from 'react'

export default function WhoWeAre() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-velora-blue/5 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-velora-gold/5 blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#1B3A8C 1px, transparent 1px),
              linear-gradient(90deg, #1B3A8C 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Top heading */}
        <div
          className={`mb-16 max-w-4xl transition-all duration-1000 ease-out md:mb-20 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-velora-gold" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-blue">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            We turn business challenges into{' '}
            <span className="text-velora-blue">
              intelligent solutions.
            </span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left feature panel */}
          <div
            className={`relative overflow-hidden rounded-3xl bg-velora-blue p-8 text-white shadow-2xl shadow-velora-blue/10 transition-all delay-100 duration-1000 ease-out md:p-10 lg:col-span-5 lg:p-12 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-velora-gold/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M3 12h18"
                    />
                    <circle cx="12" cy="12" r="8.5" />
                  </svg>
                </div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Velora BiZ Solutions
                </p>

                <h3 className="max-w-md text-3xl font-semibold leading-tight md:text-4xl">
                  Intelligent technology.
                  <br />
                  <span className="text-velora-gold">
                    Better business.
                  </span>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-blue-100 md:text-base">
                  We combine business understanding, accounting expertise and
                  technology to help organisations work smarter and grow
                  sustainably.
                </p>
              </div>

              {/* Bottom label */}
              <div className="mt-16 flex items-center gap-3 border-t border-white/15 pt-6">
                <span className="h-2 w-2 rounded-full bg-velora-gold shadow-[0_0_12px_rgba(245,166,35,0.8)]" />

                <span className="text-sm text-blue-100">
                  Business technology & digital transformation
                </span>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`lg:col-span-7 transition-all delay-300 duration-1000 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 lg:p-12">
              <p className="text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
                Velora BiZ Solutions is a business technology, ERP, accounting
                and digital transformation company. We help businesses,
                institutions, NGOs and government agencies operate smarter,
                control finances better and make confident decisions.
              </p>

              <div className="my-10 h-px bg-slate-200" />

              {/* Technology independent */}
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-velora-gold/10 text-velora-gold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18M3 12h18"
                    />
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    Technology-independent by design
                  </h3>

                  <p className="mt-2 leading-7 text-slate-500">
                    We do not force organisations into a single platform.
                    Every solution is matched to your size, industry, budget
                    and goals.
                  </p>
                </div>
              </div>

              {/* Business first */}
              <div className="mt-8 flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-velora-blue/10 text-velora-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19V9m5 10V5m5 14v-7m5 7V3"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    Business before technology
                  </h3>

                  <p className="mt-2 leading-7 text-slate-500">
                    We start by understanding how your organisation actually
                    works, then design technology around those processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom mini cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-velora-blue/30 hover:shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Focus
                  </span>

                  <span className="text-2xl font-light text-velora-blue transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  Measurable value
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Solutions designed to improve efficiency, visibility,
                  control and decision-making.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-velora-gold/40 hover:shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    Approach
                  </span>

                  <span className="text-2xl font-light text-velora-gold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-slate-950">
                  Practical & scalable
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Built for where your organisation is today and where you
                  want it to go tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-20 border-t border-slate-200 pt-10 transition-all delay-500 duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-2xl font-medium leading-relaxed text-slate-800 md:text-3xl">
              The right technology should make your business{' '}
              <span className="text-velora-blue">
                simpler, smarter and stronger.
              </span>
            </p>

            <a
              href="#what-we-do"
              className="group inline-flex shrink-0 items-center gap-3 font-semibold text-velora-blue"
            >
              <span>Explore what we do</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-velora-blue text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}