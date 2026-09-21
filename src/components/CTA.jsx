import { useEffect, useRef, useState } from 'react'

export default function CTA() {
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
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 scroll-mt-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main blue glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-velora-blue/30 blur-[150px]" />

        {/* Gold glow */}
        <div className="absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-velora-gold/10 blur-[130px]" />

        {/* Blue corner glow */}
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-velora-blue/20 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Decorative rings */}
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full border border-white/5" />

        <div className="absolute -left-12 top-32 h-40 w-40 rounded-full border border-velora-gold/10" />

        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-white/5" />

        <div className="absolute right-0 bottom-32 h-44 w-44 rounded-full border border-velora-blue/20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        {/* =========================================================
            MAIN CTA
        ========================================================= */}

        <div
          className={`
            relative overflow-hidden rounded-[2rem]
            border border-white/10
            bg-velora-blue
            px-7 py-14
            text-center
            shadow-2xl shadow-velora-blue/20
            transition-all duration-1000
            sm:px-10 sm:py-16
            md:px-16 md:py-20
            lg:px-20 lg:py-24
            ${
              isVisible
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-10 scale-[0.98] opacity-0'
            }
          `}
        >
          {/* Inner decorative glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />

          {/* Gold glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-velora-gold/15 blur-[90px]" />

          <div className="relative">
            {/* Label */}
            <div
              className={`
                mb-7 flex items-center justify-center gap-3
                transition-all delay-200 duration-700
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }
              `}
            >
              <span className="h-px w-8 bg-velora-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                Let's work together
              </span>

              <span className="h-px w-8 bg-velora-gold" />
            </div>

            {/* Heading */}
            <h2
              className={`
                mx-auto max-w-4xl
                text-4xl font-semibold leading-[1.05]
                tracking-tight
                transition-all delay-300 duration-700
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }
              `}
            >
              Let's build a{' '}
              <span className="text-velora-gold">
                better way
              </span>{' '}
              of working.
            </h2>

            {/* Description */}
            <p
              className={`
                mx-auto mt-7 max-w-2xl
                text-base leading-7 text-blue-100
                transition-all delay-400 duration-700
                md:text-lg
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }
              `}
            >
              Whether you are looking to improve your accounting, implement
              an ERP, automate processes or transform how your organisation
              operates, let's start with a conversation.
            </p>

            {/* =====================================================
                BUTTONS
            ===================================================== */}

            <div
              className={`
                mt-10 flex flex-col items-center justify-center
                gap-4 transition-all delay-500 duration-700
                sm:flex-row
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }
              `}
            >
              {/* Primary CTA */}
              <a
                href="tel:+2348107663133"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-velora-gold px-7 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(245,166,35,0.3)] sm:w-auto"
              >
                <span>Let's talk</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348107663133"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.5 9.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.5l.6-.6c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.3-2.7-.6-5.2-3.1-5.8-5.8-.1-.5 0-1.1.5-1.1Z"
                  />
                </svg>

                <span>WhatsApp</span>
              </a>
            </div>

            {/* =====================================================
                CONTACT INFO
            ===================================================== */}

            <div
              className={`
                mt-12 flex flex-col items-center justify-center
                gap-4 text-sm text-blue-200/70
                transition-all delay-600 duration-700
                sm:flex-row sm:gap-7
                ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }
              `}
            >
              <a
                href="tel:+2348107663133"
                className="transition-colors hover:text-white"
              >
                +234 810 766 3133
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-velora-gold sm:block" />

              <span>Velora BiZ Solutions</span>

              <span className="hidden h-1 w-1 rounded-full bg-velora-gold sm:block" />

              <span>Intelligent Solutions. Better Business.</span>
            </div>
          </div>
        </div>

        {/* =========================================================
            SMALL BOTTOM STATEMENT
        ========================================================= */}

        <div
          className={`
            mt-10 flex flex-col items-center justify-between gap-5
            text-center transition-all delay-700 duration-700
            sm:flex-row sm:text-left
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-5 opacity-0'
            }
          `}
        >
          <p className="text-sm text-slate-500">
            Practical technology. Measurable business value.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-velora-gold shadow-[0_0_12px_rgba(245,166,35,0.7)]" />

            <span className="text-xs uppercase tracking-[0.15em] text-slate-600">
              Ready when you are
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
