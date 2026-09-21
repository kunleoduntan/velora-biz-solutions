import { useEffect, useRef, useState } from 'react'

const reasons = [
  {
    number: '01',
    title: 'Business First',
    description:
      'We start with your business, not the software. We understand your processes, challenges and objectives before recommending technology.',
    accent: 'blue',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h18M12 3v18"
        />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Technology Independent',
    description:
      'We are not tied to one ERP or accounting platform. We help you choose technology based on your size, industry, budget and goals.',
    accent: 'gold',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Accounting Expertise',
    description:
      'Finance, accounting and business-process knowledge sit behind the systems we design, helping technology deliver meaningful business value.',
    accent: 'blue',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 20V10m5 10V6m5 14v-7m5 7V3"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Automation Driven',
    description:
      'We replace repetitive manual work with workflows, approvals, alerts and controls that reduce errors and improve operational efficiency.',
    accent: 'gold',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
        />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Lasting Partnership',
    description:
      'Our relationship does not end at go-live. We stay with you through support, improvement, optimisation and future growth.',
    accent: 'blue',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.8 8.7c0 5.1-8.8 10.1-8.8 10.1S3.2 13.8 3.2 8.7A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.6Z"
        />
      </svg>
    ),
  },
]

export default function WhyVelora() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeReason, setActiveReason] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-velora"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32 scroll-mt-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-velora-blue/5 blur-[110px]" />

        {/* Gold glow */}
        <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-velora-gold/10 blur-[110px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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
        {/* =========================================================
            HEADER
        ========================================================= */}

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
              Why Velora
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            More than technology.
            <br />
            <span className="text-velora-blue">
              We understand business.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Great technology only creates value when it solves the right
            problems. Our approach combines business understanding, accounting
            expertise and practical technology.
          </p>
        </div>

        {/* =========================================================
            MAIN FEATURE
        ========================================================= */}

        <div
          className={`mb-16 grid gap-8 transition-all delay-100 duration-1000 lg:grid-cols-12 lg:items-stretch ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Left blue panel */}
          <div className="relative overflow-hidden rounded-3xl bg-velora-blue p-8 text-white shadow-2xl shadow-velora-blue/15 md:p-10 lg:col-span-5 lg:p-12">
            {/* Decorative rings */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-velora-gold/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-velora-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3 4 7v5c0 4.5 3.2 7.9 8 9 4.8-1.1 8-4.5 8-9V7l-8-4Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12 2 2 4-4"
                    />
                  </svg>
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  The Velora Difference
                </span>

                <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                  Technology is only useful when it creates{' '}
                  <span className="text-velora-gold">
                    real business value.
                  </span>
                </h3>

                <p className="mt-6 text-sm leading-7 text-blue-100 md:text-base">
                  We look beyond software features. We understand the people,
                  processes, controls and decisions behind your organisation.
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-6">
                <span className="h-2 w-2 rounded-full bg-velora-gold shadow-[0_0_14px_rgba(245,166,35,0.8)]" />

                <span className="text-sm text-blue-100">
                  Business-led. Technology-enabled.
                </span>
              </div>
            </div>
          </div>

          {/* Right reasons */}
          <div className="grid gap-4 lg:col-span-7">
            {reasons.map((reason, index) => {
              const isActive = activeReason === index

              return (
                <div
                  key={reason.number}
                  onMouseEnter={() => setActiveReason(index)}
                  className={`
                    group relative overflow-hidden rounded-2xl
                    border p-6
                    transition-all duration-500 ease-out
                    ${
                      isActive
                        ? 'border-velora-blue/30 bg-slate-50 shadow-lg'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }
                    ${
                      isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: `${250 + index * 100}ms`,
                  }}
                >
                  {/* Active line */}
                  <div
                    className={`
                      absolute bottom-0 left-0 top-0 w-[3px]
                      bg-velora-gold
                      transition-all duration-500
                      ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0'
                      }
                    `}
                  />

                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <div
                      className={`
                        hidden pt-1 text-xs font-bold tracking-[0.15em]
                        transition-colors duration-300 sm:block
                        ${
                          isActive
                            ? 'text-velora-blue'
                            : 'text-slate-300'
                        }
                      `}
                    >
                      {reason.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        flex h-11 w-11 shrink-0 items-center justify-center
                        rounded-xl
                        transition-all duration-500
                        ${
                          isActive
                            ? reason.accent === 'gold'
                              ? 'bg-velora-gold text-slate-950'
                              : 'bg-velora-blue text-white'
                            : 'bg-slate-100 text-velora-blue'
                        }
                        ${
                          isActive
                            ? 'scale-105 rotate-3'
                            : 'scale-100 rotate-0'
                        }
                      `}
                    >
                      {reason.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold text-slate-950 md:text-xl">
                          {reason.title}
                        </h3>

                        <span
                          className={`
                            hidden text-xl transition-all duration-300 sm:block
                            ${
                              isActive
                                ? 'translate-x-0 text-velora-gold opacity-100'
                                : '-translate-x-2 text-slate-300 opacity-0'
                            }
                          `}
                        >
                          →
                        </span>
                      </div>

                      <p
                        className={`
                          mt-2 max-w-2xl text-sm leading-6
                          transition-colors duration-300
                          ${
                            isActive
                              ? 'text-slate-600'
                              : 'text-slate-500'
                          }
                        `}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM VALUE STRIP
        ========================================================= */}

        <div
          className={`relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl transition-all delay-700 duration-1000 md:p-10 lg:p-12 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-velora-blue/30 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-velora-gold">
                Our commitment
              </p>

              <h3 className="max-w-3xl text-2xl font-semibold leading-tight md:text-3xl">
                We build partnerships that continue to create value{' '}
                <span className="text-velora-gold">
                  long after implementation.
                </span>
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4"
            >
              <span className="font-semibold text-white">
                Work with us
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-velora-gold text-lg font-semibold text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[0_0_25px_rgba(245,166,35,0.35)]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* =========================================================
            MINI VALUE LABELS
        ========================================================= */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
          <span>Business Understanding</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Independent Advice</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Financial Expertise</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Automation</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Long-Term Partnership</span>
        </div>
      </div>
    </section>
  )
}
