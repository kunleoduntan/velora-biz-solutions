import { useEffect, useRef, useState } from 'react'

const services = [
  'ERP & Business Systems',
  'Accounting & Finance',
  'Process Automation',
  'Custom Applications',
  'Digital Transformation',
  'Consulting & Training',
]

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Why Velora', href: '#why-velora' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const footerRef = useRef(null)
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
        threshold: 0.08,
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-velora-blue/30 blur-[130px]" />

        {/* Gold glow */}
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-velora-gold/10 blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-velora-blue/20 blur-[140px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">

        {/* =========================================================
            TOP CTA
        ========================================================= */}

        <div
          className={`
            border-b border-white/10 py-20 md:py-24
            transition-all duration-1000
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }
          `}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-velora-gold" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-gold">
                  Let's build better
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Technology should make
                <br />

                <span className="text-blue-300">
                  business better.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                From smarter systems to automated processes, Velora helps
                organisations build better ways of working.
              </p>

            </div>

            {/* CTA button */}
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-4 rounded-xl bg-velora-gold px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-velora-gold/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffb43b] hover:shadow-xl hover:shadow-velora-gold/20"
            >
              <span>
                Start a conversation
              </span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>

        {/* =========================================================
            MAIN FOOTER CONTENT
        ========================================================= */}

        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">

          {/* =======================================================
              BRAND
          ======================================================= */}

          <div
            className={`
              transition-all delay-100 duration-1000
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >

            {/* Logo */}
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-velora-blue shadow-lg shadow-velora-blue/20">

                <div className="absolute inset-[5px] rounded-lg border border-velora-gold/40" />

                <span className="relative text-lg font-bold text-velora-gold">
                  V
                </span>

              </div>

              <div>
                <div className="text-lg font-bold tracking-tight text-white">
                  VELORA
                  <span className="text-velora-gold">
                    BiZ
                  </span>
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Solutions
                </div>
              </div>

            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400">
              Intelligent business technology solutions for organisations
              ready to operate smarter, work better and grow sustainably.
            </p>

            {/* Tagline */}
            <div className="mt-7 border-l-2 border-velora-gold pl-4">
              <p className="text-sm font-medium italic text-slate-300">
                Intelligent Solutions.
              </p>

              <p className="text-sm font-medium italic text-slate-300">
                Better Business.
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-3">

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-velora-gold/40 hover:bg-velora-gold hover:text-slate-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85C21 10.08 18.99 8.2 16.3 8.2c-2.18 0-3.15 1.2-3.7 2.04V8.5H9.1V21h3.5v-6.18c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.33V21H21v-7.15Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-velora-gold/40 hover:bg-velora-gold hover:text-slate-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.72V3.94c-.3-.04-1.33-.14-2.53-.14-2.5 0-4.2 1.53-4.2 4.34V10H7.25v3H10v8h3.5Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-velora-gold/40 hover:bg-velora-gold hover:text-slate-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.3"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-velora-gold/40 hover:bg-velora-gold hover:text-slate-950"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M21.58 7.19a2.9 2.9 0 0 0-2.04-2.05C17.74 4.65 12 4.65 12 4.65s-5.74 0-7.54.49a2.9 2.9 0 0 0-2.04 2.05C1.93 8.99 1.93 12 1.93 12s0 3.01.49 4.81a2.9 2.9 0 0 0 2.04 2.05c1.8.49 7.54.49 7.54.49s5.74 0 7.54-.49a2.9 2.9 0 0 0 2.04-2.05c.49-1.8.49-4.81.49-4.81s0-3.01-.49-4.81ZM9.7 15.55V8.45L15.9 12l-6.2 3.55Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* =======================================================
              NAVIGATION
          ======================================================= */}

          <div
            className={`
              transition-all delay-200 duration-1000
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-velora-gold">
              Company
            </p>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-velora-gold transition-all duration-300 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* =======================================================
              SERVICES
          ======================================================= */}

          <div
            className={`
              transition-all delay-300 duration-1000
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-velora-gold">
              Solutions
            </p>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#what-we-do"
                    className="group inline-flex items-start text-sm leading-5 text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-2 mt-1 text-[8px] text-velora-gold opacity-50 transition-opacity group-hover:opacity-100">
                      ●
                    </span>

                    {service}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* =======================================================
              CONTACT
          ======================================================= */}

          <div
            className={`
              transition-all delay-400 duration-1000
              ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }
            `}
          >

            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-velora-gold">
              Get in touch
            </p>

            {/* Email */}
            <a
              href="mailto:emmanueladenuga97@gmail.com"
              className="group mb-5 block"
            >
              <span className="mb-2 block text-xs text-slate-500">
                Email
              </span>

              <span className="break-all text-sm text-slate-300 transition-colors duration-300 group-hover:text-velora-gold">
                emmanueladenuga97@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+2348107663133"
              className="group mb-5 block"
            >
              <span className="mb-2 block text-xs text-slate-500">
                Phone / WhatsApp
              </span>

              <span className="text-sm text-slate-300 transition-colors duration-300 group-hover:text-velora-gold">
                +234 810 766 3133
              </span>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/2348107663133"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-velora-gold/40 hover:bg-velora-gold hover:text-slate-950"
            >
              <span>
                Chat on WhatsApp
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>

        {/* =========================================================
            PLATFORM STRIP
        ========================================================= */}

        <div className="border-y border-white/10 py-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Platforms we work with
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="transition-colors hover:text-white">
                ERPNext
              </span>

              <span className="text-white/10">
                •
              </span>

              <span className="transition-colors hover:text-white">
                Sage
              </span>

              <span className="text-white/10">
                •
              </span>

              <span className="transition-colors hover:text-white">
                Microsoft Dynamics
              </span>

              <span className="text-white/10">
                •
              </span>

              <span className="transition-colors hover:text-white">
                Odoo
              </span>

              <span className="text-white/10">
                •
              </span>

              <span className="transition-colors hover:text-white">
                Zoho Books
              </span>
            </div>

          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

        <div className="flex flex-col gap-6 py-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">

            <p>
              © {new Date().getFullYear()} Velora BiZ Solutions.
              All rights reserved.
            </p>

            <span className="hidden text-white/10 sm:block">
              •
            </span>

            <p>
              Intelligent Solutions. Better Business.
            </p>

          </div>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms
            </a>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-300 hover:border-velora-gold/50 hover:bg-velora-gold hover:text-slate-950"
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>

          </div>

        </div>

      </div>
    </footer>
  )
}
