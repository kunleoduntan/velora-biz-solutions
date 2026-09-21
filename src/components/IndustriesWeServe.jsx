import { useEffect, useRef, useState } from 'react'

const industries = [
  {
    name: 'Manufacturing',
    description: 'Smarter production, inventory and operational management.',
    icon: '⚙',
  },
  {
    name: 'Trading & Distribution',
    description: 'Connected sales, purchasing, inventory and distribution.',
    icon: '⇄',
  },
  {
    name: 'Retail',
    description: 'Better control across sales, stock, finance and operations.',
    icon: '▣',
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    description: 'Systems that support controlled, efficient healthcare operations.',
    icon: '✚',
  },
  {
    name: 'Education',
    description: 'Technology for schools, institutions and education providers.',
    icon: '⌂',
  },
  {
    name: 'Insurance',
    description: 'Improved financial visibility, workflows and business controls.',
    icon: '◇',
  },
  {
    name: 'Banking & Investment',
    description: 'Structured processes, reporting and financial management.',
    icon: '₦',
  },
  {
    name: 'Oil & Gas',
    description: 'Operational and financial systems for complex environments.',
    icon: '◉',
  },
  {
    name: 'Forecourt Management',
    description: 'Better control of fuel operations, sales and reporting.',
    icon: '⌁',
  },
  {
    name: 'Energy',
    description: 'Connected technology for operational and financial efficiency.',
    icon: 'ϟ',
  },
  {
    name: 'Construction',
    description: 'Better project, procurement, cost and financial control.',
    icon: '▤',
  },
  {
    name: 'Real Estate',
    description: 'Technology for property, finance and operational management.',
    icon: '⌂',
  },
  {
    name: 'Logistics',
    description: 'Connected processes for movement, inventory and delivery.',
    icon: '→',
  },
  {
    name: 'Travel',
    description: 'Streamlined operations, finance and customer processes.',
    icon: '✈',
  },
  {
    name: 'Hospitality',
    description: 'Integrated systems for efficient hospitality operations.',
    icon: '☆',
  },
  {
    name: 'Professional Services',
    description: 'Better project, client, financial and resource management.',
    icon: '◎',
  },
  {
    name: 'Law Firms',
    description: 'Structured workflows, financial control and client management.',
    icon: '§',
  },
  {
    name: 'NGOs',
    description: 'Transparent financial, operational and reporting systems.',
    icon: '♡',
  },
  {
    name: 'Religious Organisations',
    description: 'Practical systems for finance, administration and operations.',
    icon: '✦',
  },
  {
    name: 'Government & MDAs',
    description: 'Digital systems that improve processes, accountability and control.',
    icon: '▥',
  },
]

export default function IndustriesWeServe() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndustry, setActiveIndustry] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-velora-blue/5 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-velora-gold/10 blur-[130px]" />

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
          className={`mb-14 grid gap-8 transition-all duration-1000 lg:grid-cols-[1fr_0.75fr] lg:items-end ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-velora-gold" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-blue">
                Industries We Serve
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Technology shaped around{' '}
              <span className="text-velora-blue">
                your industry.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-7 text-slate-500 md:text-lg">
              Different industries have different processes, regulations,
              challenges and priorities. We adapt our technology solutions to
              the way your organisation actually works.
            </p>
          </div>
        </div>

        {/* =========================================================
            FEATURED INDUSTRY PANEL
        ========================================================= */}

        <div
          className={`mb-8 overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl transition-all delay-100 duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}
            <div className="relative overflow-hidden bg-velora-blue p-8 md:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-velora-gold/10 blur-[80px]" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Sector expertise
                </p>

                <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-velora-gold backdrop-blur-sm">
                  {industries[activeIndustry].icon}
                </div>

                <h3 className="mt-7 text-3xl font-semibold text-white md:text-4xl">
                  {industries[activeIndustry].name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-blue-100 md:text-base">
                  {industries[activeIndustry].description}
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-[0.15em] text-blue-200">
                    {String(activeIndustry + 1).padStart(2, '0')}
                  </span>

                  <div className="h-px w-16 bg-white/20">
                    <div
                      className="h-full bg-velora-gold transition-all duration-500"
                      style={{
                        width: `${((activeIndustry + 1) / industries.length) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-xs tracking-[0.15em] text-blue-200">
                    {String(industries.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center bg-slate-950 p-8 md:p-10 lg:p-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-velora-gold">
                  Built for complexity
                </span>

                <h3 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                  From growing businesses to complex organisations, we build
                  systems around the realities of your operations.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  Our technology-independent approach means your industry
                  determines the solution — not the other way around.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    ERP & Business Systems
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Accounting & Finance
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Automation
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                    Digital Transformation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            INDUSTRY GRID
        ========================================================= */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.map((industry, index) => {
            const isActive = activeIndustry === index

            return (
              <button
                key={industry.name}
                type="button"
                onMouseEnter={() => setActiveIndustry(index)}
                onFocus={() => setActiveIndustry(index)}
                onClick={() => setActiveIndustry(index)}
                className={`
                  group relative min-h-[145px] overflow-hidden
                  rounded-2xl border p-5 text-left
                  transition-all duration-500
                  ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }
                  ${
                    isActive
                      ? 'border-velora-blue bg-velora-blue text-white shadow-xl shadow-velora-blue/15'
                      : 'border-slate-200 bg-white text-slate-950 hover:-translate-y-1 hover:border-velora-blue/30 hover:shadow-lg'
                  }
                `}
                style={{
                  transitionDelay: `${150 + index * 45}ms`,
                }}
              >
                {/* Gold corner */}
                <div
                  className={`
                    absolute -right-5 -top-5 h-16 w-16 rounded-full
                    bg-velora-gold/20 blur-xl
                    transition-opacity duration-500
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    relative flex h-10 w-10 items-center justify-center
                    rounded-xl text-lg
                    transition-all duration-500
                    ${
                      isActive
                        ? 'bg-white/10 text-velora-gold'
                        : 'bg-slate-100 text-velora-blue group-hover:bg-velora-blue group-hover:text-white'
                    }
                  `}
                >
                  {industry.icon}
                </div>

                {/* Name */}
                <h3
                  className={`
                    relative mt-5 text-sm font-semibold leading-5
                    transition-colors duration-300
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-800'
                    }
                  `}
                >
                  {industry.name}
                </h3>

                {/* Arrow */}
                <span
                  className={`
                    absolute bottom-5 right-5 text-sm
                    transition-all duration-300
                    ${
                      isActive
                        ? 'translate-x-0 text-velora-gold opacity-100'
                        : '-translate-x-2 text-slate-300 opacity-0'
                    }
                  `}
                >
                  →
                </span>
              </button>
            )
          })}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <div
          className={`
            mt-12 flex flex-col items-center justify-between gap-6
            border-t border-slate-200 pt-8
            text-center transition-all delay-700 duration-1000
            md:flex-row md:text-left
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }
          `}
        >
          <div>
            <p className="text-sm font-medium text-slate-600">
              One technology partner. Multiple industries.{' '}
              <span className="text-velora-blue">
                Solutions built around you.
              </span>
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-semibold text-velora-blue"
          >
            Discuss your industry

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-velora-gold text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
