import { useEffect, useRef, useState } from 'react'

const industries = [
  {
    name: 'Investment',
    product: 'PortfolioOne',
    description:
      'Investment management technology for investment companies, stock brokers and fund managers.',
    icon: '₦',
    tags: ['Investment', 'Stock Brokers', 'Fund Managers'],
  },
  {
    name: 'Haulage',
    product: 'Haulage',
    description:
      'Connected systems for managing haulage operations, vehicles, customers, billing and financial control.',
    icon: '▰',
    tags: ['Fleet', 'Transport', 'Operations'],
  },
  {
    name: 'Real Estate',
    product: 'NexEstate',
    description:
      'Property management technology connecting tenants, properties, finance and operations.',
    icon: '⌂',
    tags: ['Property', 'Tenants', 'Finance'],
  },
  {
    name: 'Pharmacy',
    product: 'PharmERP',
    description:
      'Integrated pharmacy management for inventory, sales, procurement and financial operations.',
    icon: '✚',
    tags: ['Pharmacy', 'Inventory', 'Sales'],
  },
  {
    name: 'Travel Agencies',
    product: 'FarePoint',
    description:
      'Streamlined systems for travel agencies covering customers, bookings, finance and operations.',
    icon: '✈',
    tags: ['Travel', 'Bookings', 'Customers'],
  },
  {
    name: 'Law Firms',
    product: 'LawSuite',
    description:
      'Structured technology for legal practice management, clients, finance and firm operations.',
    icon: '§',
    tags: ['Legal', 'Clients', 'Finance'],
  },
  {
    name: 'NGOs',
    product: 'CivicCore',
    description:
      'Transparent systems for nonprofit finance, projects, reporting and organisational management.',
    icon: '♡',
    tags: ['NGOs', 'Projects', 'Reporting'],
  },
  {
    name: 'Hospitality',
    product: 'PMSOne',
    description:
      'Integrated property management technology for hotels and hospitality businesses.',
    icon: '☆',
    tags: ['Hotels', 'Guests', 'Operations'],
  },
  {
    name: 'Bureau de Change',
    product: 'FxOne',
    description:
      'Technology designed to simplify foreign exchange operations, transactions and reporting.',
    icon: '₦',
    tags: ['Forex', 'Transactions', 'Reporting'],
  },
  {
    name: 'Insurance',
    product: 'NexSure',
    description:
      'Business systems for insurance companies covering operations, finance and reporting.',
    icon: '◇',
    tags: ['Insurance', 'Finance', 'Operations'],
  },
  {
    name: 'Insurance Brokers',
    product: 'Insurance Broker Solutions',
    description:
      'Technology for managing clients, policies, transactions and financial operations.',
    icon: '◈',
    tags: ['Brokers', 'Policies', 'Clients'],
  },
  {
    name: 'Schools',
    product: 'SchoolOne',
    description:
      'Connected school management technology for administration, students, finance and operations.',
    icon: '⌂',
    tags: ['Students', 'Schools', 'Administration'],
  },
  {
    name: 'Churches',
    product: 'Faithflow',
    description:
      'Practical technology for church administration, finance, membership and operations.',
    icon: '✦',
    tags: ['Churches', 'Members', 'Finance'],
  },
  {
    name: 'Government & MDAs',
    product: 'GovernmentOne',
    description:
      'Digital systems for Federal, State, LGA, ministries, departments and government agencies.',
    icon: '▥',
    tags: ['Federal', 'State', 'LGA / MDA'],
  },
  {
    name: 'Waste Management',
    product: 'EcoPlus',
    description:
      'Technology for managing waste operations, customers, billing, collections and reporting.',
    icon: '♻',
    tags: ['Waste', 'Collections', 'Operations'],
  },
  {
    name: 'Oil & Gas',
    product: 'EnergyOne',
    description:
      'Operational and financial systems designed for complex oil and gas environments.',
    icon: '◉',
    tags: ['Oil & Gas', 'Operations', 'Finance'],
  },
  {
    name: 'Petrol Stations',
    product: 'Forecourt / PetroOne',
    description:
      'Better control of forecourt operations, fuel sales, inventory and financial reporting.',
    icon: '⌁',
    tags: ['Forecourt', 'Fuel', 'Sales'],
  },
  {
    name: 'Professional Institutes',
    product: 'InstituteOne',
    description:
      'Management technology for professional institutes, members, finance and administration.',
    icon: '◎',
    tags: ['Institutes', 'Members', 'Finance'],
  },
  {
    name: 'Logistics',
    product: 'LogisticsERP',
    description:
      'Connected logistics management for movement, inventory, delivery and operational control.',
    icon: '→',
    tags: ['Logistics', 'Delivery', 'Inventory'],
  },
  {
    name: 'Microfinance',
    product: 'MicroFinance ERP',
    description:
      'Business systems supporting microfinance operations, customers, transactions and reporting.',
    icon: '₦',
    tags: ['Microfinance', 'Loans', 'Finance'],
  },
  {
    name: 'Cooperatives',
    product: 'Coopify',
    description:
      'Cooperative management technology for members, contributions, finance and administration.',
    icon: '◎',
    tags: ['Members', 'Contributions', 'Finance'],
  },
  {
    name: 'Construction',
    product: 'Siteforge ERP',
    description:
      'Project, procurement, cost and financial management for construction organisations.',
    icon: '▤',
    tags: ['Projects', 'Procurement', 'Costs'],
  },
  {
    name: 'Medical',
    product: 'Carematrix Medical',
    description:
      'Connected medical management technology supporting healthcare operations and administration.',
    icon: '✚',
    tags: ['Medical', 'Patients', 'Administration'],
  },
  {
    name: 'Production',
    product: 'ProductionOne',
    description:
      'Production management technology connecting manufacturing processes, inventory and operations.',
    icon: '⚙',
    tags: ['Production', 'Inventory', 'Operations'],
  },
  {
    name: 'General Business',
    product: 'Ecclesia',
    description:
      'Flexible business management solutions for organisations that need connected operations and finance.',
    icon: '◆',
    tags: ['Business', 'Finance', 'Operations'],
  },
  {
    name: 'Tertiary Institutions',
    product: 'CampusOne',
    description:
      'Connected management technology for universities, polytechnics and other tertiary institutions.',
    icon: '⌘',
    tags: ['Campus', 'Students', 'Administration'],
  },
  {
    name: 'Tax Compliance',
    product: 'Fiscora',
    description:
      'Technology designed to simplify tax compliance, reporting and financial obligations.',
    icon: '▤',
    tags: ['Tax', 'Compliance', 'Reporting'],
  },
]

export default function IndustriesWeServe() {
  const sectionRef = useRef(null)
  const mobileNavRef = useRef(null)

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
        threshold: 0.08,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const active = industries[activeIndustry]

  const selectIndustry = (index) => {
    setActiveIndustry(index)
  }

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-24 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[12%] h-[420px] w-[420px] rounded-full bg-velora-blue/[0.045] blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-velora-gold/[0.07] blur-[130px] sm:h-[550px] sm:w-[550px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#1B3A8C 1px, transparent 1px),
              linear-gradient(90deg, #1B3A8C 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className={`mb-10 transition-all duration-700 sm:mb-14 md:mb-16 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <span className="h-px w-9 bg-velora-gold sm:w-12" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-velora-blue sm:text-[11px] sm:tracking-[0.28em]">
                  Industries We Serve
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl">
                Technology that understands{' '}
                <span className="text-velora-blue">
                  your business.
                </span>
              </h2>
            </div>

            <div className="max-w-xl lg:pb-1">
              <p className="text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                Every industry works differently. We build business systems
                around your processes, people, regulations and goals.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE INDUSTRY SELECTOR
        ========================================================= */}

        <div
          className={`mb-4 lg:hidden transition-all delay-75 duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Explore industries
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Swipe to explore
              </p>
            </div>

            <span className="text-[10px] font-bold text-slate-400">
              {String(activeIndustry + 1).padStart(2, '0')} /{' '}
              {String(industries.length).padStart(2, '0')}
            </span>
          </div>

          <div
            ref={mobileNavRef}
            className="flex gap-2 overflow-x-auto pb-3 scrollbar-none"
          >
            {industries.map((industry, index) => {
              const isActive = activeIndustry === index

              return (
                <button
                  key={industry.name}
                  type="button"
                  onClick={() => selectIndustry(index)}
                  className={`flex min-w-fit cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'border-velora-blue bg-velora-blue text-white shadow-md shadow-velora-blue/15'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] ${
                      isActive
                        ? 'bg-white/10 text-velora-gold'
                        : 'bg-slate-100 text-velora-blue'
                    }`}
                  >
                    {industry.icon}
                  </span>

                  {industry.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* =========================================================
            MAIN DESKTOP / TABLET LAYOUT
        ========================================================= */}

        <div
          className={`grid gap-5 transition-all delay-100 duration-700 lg:grid-cols-[0.7fr_1.3fr] ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* =======================================================
              DESKTOP NAVIGATION
          ======================================================= */}

          <div className="hidden rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm lg:block">
            <div className="mb-3 flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Explore sectors
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {industries.length} solutions
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-velora-blue text-xs font-bold text-white">
                {String(industries.length).padStart(2, '0')}
              </div>
            </div>

            <div className="max-h-[620px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              <div className="grid gap-1">
                {industries.map((industry, index) => {
                  const isActive = activeIndustry === index

                  return (
                    <button
                      key={industry.name}
                      type="button"
                      onMouseEnter={() => selectIndustry(index)}
                      onFocus={() => selectIndustry(index)}
                      onClick={() => selectIndustry(index)}
                      className={`group relative flex w-full cursor-pointer items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
                        isActive
                          ? 'bg-velora-blue text-white'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      <span
                        className={`absolute left-0 h-7 w-[3px] rounded-r-full bg-velora-gold transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      <span
                        className={`w-6 shrink-0 text-[10px] font-bold ${
                          isActive
                            ? 'text-blue-200'
                            : 'text-slate-300 group-hover:text-velora-blue'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? 'bg-white/10 text-velora-gold'
                            : 'bg-slate-100 text-velora-blue group-hover:bg-velora-blue group-hover:text-white'
                        }`}
                      >
                        {industry.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate text-sm font-semibold ${
                            isActive
                              ? 'text-white'
                              : 'text-slate-700'
                          }`}
                        >
                          {industry.name}
                        </span>

                        <span
                          className={`mt-0.5 block truncate text-[10px] ${
                            isActive
                              ? 'text-blue-200'
                              : 'text-slate-400'
                          }`}
                        >
                          {industry.product}
                        </span>
                      </span>

                      <span
                        className={`text-sm transition-all duration-200 ${
                          isActive
                            ? 'translate-x-0 text-velora-gold opacity-100'
                            : '-translate-x-2 text-slate-300 opacity-0'
                        }`}
                      >
                        →
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* =======================================================
              FEATURED SHOWCASE
          ======================================================= */}

          <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 sm:rounded-[1.75rem]">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: `
                  linear-gradient(#ffffff 1px, transparent 1px),
                  linear-gradient(90deg, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: '52px 52px',
              }}
            />

            {/* Blue glow */}
            <div className="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-velora-blue/30 blur-[110px] sm:h-[420px] sm:w-[420px]" />

            {/* Gold glow */}
            <div className="absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full bg-velora-gold/10 blur-[110px]" />

            {/* Giant number */}
            <div className="pointer-events-none absolute right-[-15px] top-[-35px] select-none text-[9rem] font-black leading-none text-white/[0.025] sm:right-[-15px] sm:top-[-45px] sm:text-[13rem] md:text-[17rem]">
              {String(activeIndustry + 1).padStart(2, '0')}
            </div>

            <div className="relative flex min-h-[470px] flex-col justify-between p-6 sm:min-h-[540px] sm:p-9 md:min-h-[580px] md:p-12 lg:min-h-[620px] lg:p-14">
              {/* ===================================================
                  TOP
              =================================================== */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-velora-gold shadow-lg shadow-velora-gold/40 sm:h-2 sm:w-2" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[10px] sm:tracking-[0.25em]">
                    Featured solution
                  </span>
                </div>

                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  {String(activeIndustry + 1).padStart(2, '0')} /{' '}
                  {String(industries.length).padStart(2, '0')}
                </span>
              </div>

              {/* ===================================================
                  CONTENT
              =================================================== */}

              <div
                key={activeIndustry}
                className="animate-[industryFade_250ms_ease-out]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl text-velora-gold shadow-xl backdrop-blur-sm sm:mb-7 sm:h-16 sm:w-16 sm:text-3xl md:h-20 md:w-20 md:rounded-[1.4rem] md:text-4xl">
                  {active.icon}
                </div>

                {/* Product */}
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-velora-gold sm:mb-3 sm:text-xs">
                  {active.product}
                </p>

                {/* Industry */}
                <h3 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {active.name}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-xs leading-6 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
                  {active.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium text-slate-300 sm:px-4 sm:py-2 sm:text-[10px] md:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ===================================================
                  BOTTOM
              =================================================== */}

              <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 sm:text-xs">
                      Designed around your operations
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-slate-600 sm:text-[10px]">
                      ERP · Finance · Automation · Digital Transformation
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex w-fit cursor-pointer items-center gap-3 text-xs font-semibold text-white sm:text-sm"
                  >
                    Talk to us

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-velora-gold text-sm text-slate-950 transition-all duration-200 group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-velora-gold/20 sm:h-10 sm:w-10">
                      →
                    </span>
                  </a>
                </div>

                {/* Progress */}
                <div className="mt-5 h-[2px] w-full overflow-hidden bg-white/10 sm:mt-6">
                  <div
                    className="h-full bg-velora-gold transition-all duration-300"
                    style={{
                      width: `${((activeIndustry + 1) / industries.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE QUICK INFO
        ========================================================= */}

        <div
          className={`mt-4 grid grid-cols-2 gap-3 transition-all delay-150 duration-700 sm:mt-5 lg:hidden ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              {industries.length}
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Industry solutions
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-2xl font-semibold tracking-tight text-slate-950">
              ERP
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Business systems
            </p>
          </div>
        </div>

        {/* =========================================================
            DESKTOP METRICS
        ========================================================= */}

        <div
          className={`mt-5 hidden grid-cols-3 gap-3 transition-all delay-150 duration-700 lg:grid ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-velora-blue/20 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <span className="text-3xl font-semibold tracking-tight text-slate-950">
                {industries.length}
              </span>

              <span className="text-lg text-velora-gold">✦</span>
            </div>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Industry solutions
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Technology designed for diverse business environments.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-velora-blue/20 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <span className="text-3xl font-semibold tracking-tight text-slate-950">
                ERP
              </span>

              <span className="text-lg text-velora-blue">◈</span>
            </div>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Business systems
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Connected finance, operations, people and data.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-velora-blue/20 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <span className="text-3xl font-semibold tracking-tight text-slate-950">
                360°
              </span>

              <span className="text-lg text-velora-gold">◉</span>
            </div>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Digital transformation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Technology built around the complete operational picture.
            </p>
          </div>
        </div>

        {/* =========================================================
            FOOTER CTA
        ========================================================= */}

        <div
          className={`mt-8 flex flex-col gap-5 border-t border-slate-200 pt-7 transition-all delay-200 duration-700 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-8 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }`}
        >
          <div>
            <p className="text-sm font-medium text-slate-600">
              Don't see your industry?
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Our solutions can be adapted to your organisation.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex cursor-pointer items-center gap-3 text-sm font-semibold text-velora-blue"
          >
            Talk to Velora

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-velora-gold text-slate-950 transition-all duration-200 group-hover:translate-x-1 group-hover:shadow-lg sm:h-10 sm:w-10">
              →
            </span>
          </a>
        </div>
      </div>

      {/* =========================================================
          ANIMATION
      ========================================================= */}

      <style>{`
        @keyframes industryFade {
          from {
            opacity: 0;
            transform: translateY(7px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}