import { useEffect, useRef, useState } from 'react'

const services = [
  {
    number: '01',
    title: 'ERP & Business Systems',
    description:
      'Selection, implementation, customisation, integration, migration and ongoing support for business systems that fit the way you operate.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Accounting & Finance',
    description:
      'Accounting systems, financial reporting, controls and professional accounting services that give you greater visibility and control.',
    icon: (
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
          d="M4 19V9m5 10V5m5 14v-7m5 7V3"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Process Automation',
    description:
      'Replace repetitive manual work with intelligent workflows, approvals, alerts and controls that reduce errors and improve efficiency.',
    icon: (
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
          d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Custom Applications',
    description:
      'Tailored applications, portals and digital tools for organisations where off-the-shelf software does not fully meet the need.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 9-3 3 3 3m8-6 3 3-3 3m-3-7-2 8"
        />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Digital Transformation',
    description:
      'Move from paper, disconnected spreadsheets and fragmented processes to connected, data-driven operations.',
    icon: (
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
          d="M4 17.5V6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9h8M8 13h5"
        />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Consulting & Training',
    description:
      'Independent technology advice, dashboards, process improvement and practical training that gives your people the confidence to succeed.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <circle cx="12" cy="8" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 20c.8-3.4 3.1-5 7-5s6.2 1.6 7 5"
        />
      </svg>
    ),
  },
]

export default function WhatWeDo() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)

  // First card is active by default so the section
  // has a visual focal point before the user interacts.
  const [activeService, setActiveService] = useState(0)

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
      id="what-we-do"
      
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 scroll-mt-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-velora-blue/20 blur-[120px]" />

        {/* Gold glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-velora-gold/10 blur-[120px]" />

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
        <div className="absolute right-[8%] top-[15%] h-32 w-32 rounded-full border border-velora-blue/20" />

        <div className="absolute right-[10%] top-[18%] h-20 w-20 rounded-full border border-velora-gold/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className={`mb-16 grid gap-8 transition-all duration-1000 md:mb-20 lg:grid-cols-2 lg:items-end ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-velora-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-gold">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Technology that works{' '}
              <span className="text-velora-gold">
                for your business.
              </span>
            </h2>
          </div>

          <div className="lg:pl-12">
            <p className="max-w-xl text-base leading-7 text-slate-400 md:text-lg">
              From ERP and accounting to automation and digital
              transformation, we connect the right technology to the way your
              organisation actually works.
            </p>
          </div>
        </div>

        {/* =========================================================
            SERVICES GRID
        ========================================================= */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isActive = activeService === index

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  border
                  transition-all duration-500 ease-out
                  ${
                    isActive
                      ? 'border-velora-blue/60 bg-velora-blue shadow-2xl shadow-velora-blue/20'
                      : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                  }
                  ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-12 opacity-0'
                  }
                  ${
                    isActive
                      ? '-translate-y-1'
                      : 'translate-y-0'
                  }
                `}
                style={{
                  transitionDelay: `${150 + index * 100}ms`,
                }}
              >
                {/* =================================================
                    ACTIVE BACKGROUND GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none absolute -right-20 -top-20
                    h-56 w-56 rounded-full blur-3xl
                    transition-all duration-700
                    ${
                      isActive
                        ? 'bg-velora-gold/15 opacity-100'
                        : 'bg-transparent opacity-0'
                    }
                  `}
                />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="absolute right-7 top-7">
                  <span
                    className={`
                      text-xs font-bold tracking-[0.2em]
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'text-white/50'
                          : 'text-white/20'
                      }
                    `}
                  >
                    {service.number}
                  </span>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative flex min-h-[330px] flex-col p-7 md:p-8">
                  {/* Icon */}
                  <div
                    className={`
                      mb-12 flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      transition-all duration-500
                      ${
                        isActive
                          ? 'bg-white text-velora-blue shadow-lg'
                          : 'bg-velora-blue/10 text-velora-gold'
                      }
                      ${
                        isActive
                          ? 'rotate-3 scale-110'
                          : 'rotate-0 scale-100'
                      }
                    `}
                  >
                    {service.icon}
                  </div>

                  {/* Text */}
                  <div className="mt-auto">
                    <h3
                      className={`
                        mb-4 text-xl font-semibold
                        transition-colors duration-300 md:text-2xl
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-white'
                        }
                      `}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`
                        text-sm leading-7
                        transition-colors duration-300
                        ${
                          isActive
                            ? 'text-blue-100'
                            : 'text-slate-400'
                        }
                      `}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom action */}
                  <div className="mt-7 flex items-center justify-between">
                    <span
                      className={`
                        text-xs font-semibold uppercase tracking-[0.15em]
                        transition-colors duration-300
                        ${
                          isActive
                            ? 'text-white/60'
                            : 'text-slate-500'
                        }
                      `}
                    >
                      Explore
                    </span>

                    <span
                      className={`
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        transition-all duration-300
                        ${
                          isActive
                            ? 'bg-velora-gold text-slate-950'
                            : 'bg-white/5 text-velora-gold'
                        }
                        ${
                          isActive
                            ? 'translate-x-1'
                            : 'translate-x-0'
                        }
                      `}
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* =================================================
                    ACTIVE BOTTOM LINE
                ================================================= */}

                <div
                  className={`
                    absolute bottom-0 left-0 h-[3px]
                    bg-velora-gold
                    transition-all duration-500
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0'
                    }
                  `}
                />
              </div>
            )
          })}
        </div>

        {/* =========================================================
            PHILOSOPHY / CTA
        ========================================================= */}

        <div
          className={`mt-20 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all delay-700 duration-1000 md:mt-24 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid items-center lg:grid-cols-[1fr_auto]">
            {/* Text */}
            <div className="p-8 md:p-10 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-velora-gold shadow-[0_0_15px_rgba(245,166,35,0.8)]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Our Philosophy
                </span>
              </div>

              <h3 className="max-w-3xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                We don't just implement software.
                <span className="text-velora-gold">
                  {' '}
                  We improve the way your organisation works.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                The right technology should simplify processes, strengthen
                controls, improve visibility and give your people the tools
                they need to make better decisions.
              </p>
            </div>

            {/* CTA */}
            <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0 lg:p-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-velora-gold text-xl font-semibold text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[0_0_25px_rgba(245,166,35,0.35)]">
                  →
                </span>

                <span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-slate-500">
                    Start a conversation
                  </span>

                  <span className="mt-1 block font-semibold text-white">
                    Let's talk
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            SERVICE LINE
        ========================================================= */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center text-xs uppercase tracking-[0.15em] text-slate-600">
          <span>ERP</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Accounting</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Automation</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Applications</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Transformation</span>

          <span className="h-1 w-1 rounded-full bg-velora-gold" />

          <span>Consulting</span>
        </div>
      </div>
    </section>
  )
}
