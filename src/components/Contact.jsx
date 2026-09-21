import { useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const FORM_ID = 'xaenoowv'

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const [state, handleSubmit, reset] = useForm(FORM_ID)

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
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-velora-blue/5 blur-[120px]" />

        {/* Gold glow */}
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-velora-gold/10 blur-[120px]" />

        {/* Grid */}
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
            SECTION HEADER
        ========================================================= */}

        <div
          className={`
            mb-14 max-w-3xl
            transition-all duration-1000
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-velora-gold" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-velora-blue">
              Contact Velora
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Let's talk about
            <br />

            <span className="text-velora-blue">
              your business.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
            Tell us what you are trying to improve, automate or transform.
            We will start by understanding your needs and explore the right
            solution with you.
          </p>
        </div>

        {/* =========================================================
            CONTACT GRID
        ========================================================= */}

        <div
          className={`
            grid gap-6
            transition-all delay-100 duration-1000
            lg:grid-cols-[1.25fr_0.75fr]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
        >

          {/* =======================================================
              FORM CARD
          ======================================================= */}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40 md:p-10">

            {/* =====================================================
                SUCCESS STATE
            ===================================================== */}

            {state.succeeded ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                {/* Animated success icon */}
                <div className="relative flex h-20 w-20 items-center justify-center">

                  <div className="absolute inset-0 animate-ping rounded-full bg-velora-gold/20" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-velora-blue text-white shadow-xl shadow-velora-blue/20">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-9 w-9"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 12 4 4L19 6"
                      />
                    </svg>

                  </div>
                </div>

                <h3 className="mt-8 text-3xl font-semibold text-slate-950">
                  Enquiry received.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 md:text-base">
                  Thank you for reaching out to Velora BiZ Solutions.
                  Your enquiry has been submitted successfully.
                </p>

                <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">
                  Our team will review your message and get back to you.
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-velora-blue transition-all duration-300 hover:border-velora-blue hover:bg-velora-blue hover:text-white"
                >
                  Send another enquiry
                </button>

              </div>
            ) : (

              /* ===================================================
                  FORM
              =================================================== */

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Form heading */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-velora-blue">
                    Send an enquiry
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    Tell us a little about what you need.
                  </h3>
                </div>

                {/* =================================================
                    NAME + ORGANISATION
                ================================================= */}

                <div className="grid gap-6 md:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-xs text-red-500"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Organisation
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company / organisation"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                    />

                    <ValidationError
                      prefix="Organisation"
                      field="company"
                      errors={state.errors}
                      className="mt-2 text-xs text-red-500"
                    />
                  </div>

                </div>

                {/* =================================================
                    EMAIL + PHONE
                ================================================= */}

                <div className="grid gap-6 md:grid-cols-2">

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-xs text-red-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                    />

                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="mt-2 text-xs text-red-500"
                    />
                  </div>

                </div>

                {/* =================================================
                    SERVICE
                ================================================= */}

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition-all duration-300 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="ERP & Business Systems">
                      ERP & Business Systems
                    </option>

                    <option value="Accounting & Finance">
                      Accounting & Finance
                    </option>

                    <option value="Process Automation">
                      Process Automation
                    </option>

                    <option value="Custom Applications">
                      Custom Applications
                    </option>

                    <option value="Digital Transformation">
                      Digital Transformation
                    </option>

                    <option value="Consulting & Training">
                      Consulting & Training
                    </option>

                    <option value="Other">
                      Something else
                    </option>
                  </select>

                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={state.errors}
                    className="mt-2 text-xs text-red-500"
                  />
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Tell us about your project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="What are you trying to improve, automate or transform?"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-velora-blue focus:bg-white focus:ring-4 focus:ring-velora-blue/10"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-xs text-red-500"
                  />
                </div>

                {/* =================================================
                    HONEYPOT
                ================================================= */}

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* =================================================
                    GENERAL ERROR
                ================================================= */}

                {state.errors && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                    We couldn't send your enquiry right now. Please try
                    again, or contact Velora directly using WhatsApp or
                    email.
                  </div>
                )}

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`
                    group inline-flex w-full items-center justify-center
                    gap-3 rounded-xl px-6 py-4 font-semibold text-white
                    transition-all duration-300
                    ${
                      state.submitting
                        ? 'cursor-not-allowed bg-slate-400'
                        : 'bg-velora-blue hover:-translate-y-1 hover:bg-[#153277] hover:shadow-xl hover:shadow-velora-blue/20'
                    }
                  `}
                >

                  {state.submitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      <span>
                        Sending enquiry...
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        Send enquiry
                      </span>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}

                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  Your information is used only to respond to your enquiry.
                </p>

              </form>
            )}

          </div>

          {/* =======================================================
              CONTACT INFORMATION CARD
          ======================================================= */}

          <div className="relative overflow-hidden rounded-[2rem] bg-velora-blue p-7 text-white shadow-2xl shadow-velora-blue/20 md:p-10">

            {/* Decorative circles */}
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />

            <div className="absolute -right-10 top-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-velora-gold/10 blur-[90px]" />

            <div className="relative flex h-full flex-col">

              {/* Heading */}
              <div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Get in touch
                </span>

                <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                  Start with a conversation.
                </h3>

                <p className="mt-5 text-sm leading-7 text-blue-100">
                  You do not need to have everything figured out. Tell us
                  where you are today and what you want to achieve.
                </p>

              </div>

              {/* =================================================
                  PHONE
              ================================================= */}

              <div className="mt-10">

                <a
                  href="tel:+2348107663133"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-velora-gold text-slate-950">

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
                        d="M6.6 3.5 4.9 5.2c-.8.8-.9 2-.4 3.1a16.9 16.9 0 0 0 11.2 11.2c1 .5 2.3.3 3.1-.4l1.7-1.7c.5-.5.5-1.3.1-1.8l-2.2-2.7c-.4-.5-1.1-.6-1.7-.3l-1.8.9c-.5.3-1.1.2-1.5-.2l-3.7-3.7c-.4-.4-.5-1-.2-1.5l.9-1.8c.3-.6.2-1.3-.3-1.7L8.4 3.4c-.5-.4-1.3-.4-1.8.1Z"
                      />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs text-blue-200">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      +234 810 766 3133
                    </p>
                  </div>

                  <span className="ml-auto text-lg text-velora-gold transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </a>

              </div>

              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <a
                href="https://wa.me/2348107663133"
                target="_blank"
                rel="noreferrer"
                className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-velora-gold">

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

                </div>

                <div>
                  <p className="text-xs text-blue-200">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Chat with us directly
                  </p>
                </div>

                <span className="ml-auto text-lg text-velora-gold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href="mailto:emmanueladenuga97@gmail.com"
                className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-velora-gold">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </svg>

                </div>

                <div className="min-w-0">
                  <p className="text-xs text-blue-200">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white">
                    emmanueladenuga97@gmail.com
                  </p>
                </div>

                <span className="ml-auto text-lg text-velora-gold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </a>

              {/* =================================================
                  BOTTOM MESSAGE
              ================================================= */}

              <div className="mt-auto pt-12">

                <div className="border-t border-white/10 pt-7">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-velora-gold shadow-[0_0_14px_rgba(245,166,35,0.8)]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                      Ready to make a change?
                    </span>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-blue-100">
                    Let's explore what better technology could look like for
                    your organisation.
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* =========================================================
            TRUST STRIP
        ========================================================= */}

        <div
          className={`
            mt-10 grid gap-4
            transition-all delay-500 duration-1000
            sm:grid-cols-3
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }
          `}
        >

          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <span className="text-lg text-velora-gold">
              ✓
            </span>

            <span className="text-xs font-medium text-slate-500">
              Business-first approach
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <span className="text-lg text-velora-gold">
              ✓
            </span>

            <span className="text-xs font-medium text-slate-500">
              Technology independent
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4">
            <span className="text-lg text-velora-gold">
              ✓
            </span>

            <span className="text-xs font-medium text-slate-500">
              Long-term partnership
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
