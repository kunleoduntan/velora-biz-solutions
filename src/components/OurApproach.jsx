import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We listen, ask the right questions and understand your organisation, people, processes and goals.',
  },
  {
    number: '02',
    title: 'Analyse',
    description:
      'We examine your current systems, workflows, challenges, controls and opportunities for improvement.',
  },
  {
    number: '03',
    title: 'Recommend',
    description:
      'We identify practical solutions and technologies that fit your organisation, budget and objectives.',
  },
  {
    number: '04',
    title: 'Design',
    description:
      'We translate the recommended solution into a clear system, workflow and implementation plan.',
  },
  {
    number: '05',
    title: 'Implement',
    description:
      'We configure, customise, integrate, migrate and deploy the solution with your team.',
  },
  {
    number: '06',
    title: 'Train',
    description:
      'We equip your people with the knowledge and confidence they need to use the new solution effectively.',
  },
  {
    number: '07',
    title: 'Support',
    description:
      'We stay with you after implementation, providing support, optimisation and continuous improvement.',
  },
]

export default function OurApproach() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

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
      id="our-approach"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32 scroll-mt-24"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-velora-blue/20 blur-[130px]" />

        {/* Gold glow */}
        <div className="absolute -right-48 bottom-10 h-[500px] w-[500px] rounded-full bg-velora-gold/10 blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '65px 65px',
          }}
        />

        {/* Decorative rings */}
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute -right-12 top-36 h-48 w-48 rounded-full border border-velora-gold/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className={`mb-16 grid gap-8 transition-all duration-1000 md:mb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-velora-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-gold">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              From business challenge
              <br />
              <span className="text-velora-gold">
                to lasting solution.
              </span>
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="max-w-xl text-base leading-7 text-slate-400 md:text-lg">
              We follow a practical, structured approach that keeps your
              business at the centre of every technology decision.
            </p>
          </div>
        </div>

        {/* =========================================================
            MAIN APPROACH CARD
        ========================================================= */}

        <div
          className={`relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 transition-all duration-1000 md:p-8 lg:p-10 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Top label */}
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                The Velora Process
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
              <span className="h-2 w-2 rounded-full bg-velora-gold shadow-[0_0_12px_rgba(245,166,35,0.8)]" />
              7 stages
            </div>
          </div>

          {/* =======================================================
              DESKTOP TIMELINE
          ======================================================= */}

          <div className="hidden lg:block">
            {/* Connector line */}
            <div className="absolute left-[7.5%] right-[7.5%] top-[165px] h-px bg-white/10">
              <div
                className="h-full origin-left bg-gradient-to-r from-velora-gold via-velora-gold to-velora-blue transition-all duration-[1800ms] ease-out"
                style={{
                  width: isVisible
                    ? `${(activeStep / (steps.length - 1)) * 100}%`
                    : '0%',
                }}
              />
            </div>

            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, index) => {
                const isActive = activeStep === index
                const isPast = index < activeStep

                return (
                  <button
                    key={step.number}
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className={`
                      group relative text-left outline-none
                      transition-all duration-500
                      ${
                        isVisible
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }
                    `}
                    style={{
                      transitionDelay: `${250 + index * 100}ms`,
                    }}
                  >
                    {/* Number */}
                    <div
                      className={`
                        mb-8 text-center text-xs font-bold tracking-[0.18em]
                        transition-colors duration-300
                        ${
                          isActive || isPast
                            ? 'text-velora-gold'
                            : 'text-slate-600'
                        }
                      `}
                    >
                      {step.number}
                    </div>

                    {/* Timeline node */}
                    <div className="relative mb-9 flex justify-center">
                      <div
                        className={`
                          relative z-10 flex h-12 w-12 items-center
                          justify-center rounded-full border
                          transition-all duration-500
                          ${
                            isActive
                              ? 'scale-110 border-velora-gold bg-velora-gold text-slate-950 shadow-[0_0_30px_rgba(245,166,35,0.3)]'
                              : isPast
                                ? 'border-velora-blue bg-velora-blue text-white'
                                : 'border-white/15 bg-slate-950 text-slate-600'
                          }
                        `}
                      >
                        {isPast ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m5 12 4 4L19 6"
                            />
                          </svg>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-current" />
                        )}
                      </div>

                      {/* Pulse */}
                      {isActive && (
                        <span className="absolute inset-0 m-auto h-12 w-12 animate-ping rounded-full bg-velora-gold/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3
                        className={`
                          text-base font-semibold transition-colors duration-300
                          ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-400 group-hover:text-white'
                          }
                        `}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`
                          mt-3 text-xs leading-5 transition-colors duration-300
                          ${
                            isActive
                              ? 'text-slate-300'
                              : 'text-slate-600'
                          }
                        `}
                      >
                        {step.description}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* =======================================================
              MOBILE / TABLET TIMELINE
          ======================================================= */}

          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute bottom-8 left-[22px] top-8 w-px bg-white/10">
                <div
                  className="w-full bg-velora-gold transition-all duration-1000"
                  style={{
                    height: isVisible
                      ? `${(activeStep / (steps.length - 1)) * 100}%`
                      : '0%',
                  }}
                />
              </div>

              <div className="space-y-5">
                {steps.map((step, index) => {
                  const isActive = activeStep === index
                  const isPast = index < activeStep

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`
                        relative flex w-full items-start gap-5
                        rounded-2xl border p-5 text-left
                        transition-all duration-500
                        ${
                          isActive
                            ? 'border-velora-blue/50 bg-velora-blue/10'
                            : 'border-transparent bg-transparent'
                        }
                      `}
                    >
                      {/* Node */}
                      <div
                        className={`
                          relative z-10 flex h-11 w-11 shrink-0
                          items-center justify-center rounded-full
                          border transition-all duration-500
                          ${
                            isActive
                              ? 'border-velora-gold bg-velora-gold text-slate-950'
                              : isPast
                                ? 'border-velora-blue bg-velora-blue text-white'
                                : 'border-white/15 bg-slate-950 text-slate-600'
                          }
                        `}
                      >
                        {isPast ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m5 12 4 4L19 6"
                            />
                          </svg>
                        ) : (
                          <span className="text-[10px] font-bold">
                            {step.number}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3
                            className={`
                              font-semibold transition-colors duration-300
                              ${
                                isActive
                                  ? 'text-white'
                                  : 'text-slate-400'
                              }
                            `}
                          >
                            {step.title}
                          </h3>

                          <span
                            className={`
                              text-lg transition-all duration-300
                              ${
                                isActive
                                  ? 'translate-x-0 text-velora-gold opacity-100'
                                  : '-translate-x-2 text-slate-700 opacity-0'
                              }
                            `}
                          >
                            →
                          </span>
                        </div>

                        <p
                          className={`
                            mt-2 text-sm leading-6
                            ${
                              isActive
                                ? 'text-slate-300'
                                : 'text-slate-600'
                            }
                          `}
                        >
                          {step.description}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            ACTIVE STEP DETAIL
        ========================================================= */}

        <div
          className={`mt-8 grid gap-6 transition-all delay-500 duration-1000 md:grid-cols-3 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Current stage */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:col-span-2">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-velora-gold font-bold text-slate-950">
                {steps[activeStep].number}
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Current stage
                </p>

                <p className="mt-1 font-semibold text-white">
                  {steps[activeStep].title}
                </p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Progress
              </span>

              <span className="text-sm font-semibold text-velora-gold">
                {activeStep + 1}/7
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-velora-gold to-velora-blue transition-all duration-700"
                style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div
          className={`mt-16 text-center transition-all delay-700 duration-1000 md:mt-20 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-xl font-medium text-slate-300 md:text-2xl">
            Let's build a better way of working.
          </p>

          <a
            href="#CTA"
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-velora-gold px-7 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(245,166,35,0.25)]"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
