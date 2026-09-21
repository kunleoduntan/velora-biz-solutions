import { useEffect, useState } from 'react'
import heroImg from '../assets/newHero.jpg'

const phrases = [
  'better tomorrow',
  'smarter business',
  'better decisions',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade the current phrase out
      setIsVisible(false)

      // Change the phrase after the fade-out
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)

        // Fade the new phrase in
        setIsVisible(true)
      }, 500)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/10" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-end px-6 pb-20 md:px-16 md:pb-28">
        {/* Main heading */}
        <h1 className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Technology for a{' '}
          <span
            className={`
              inline-block
              min-w-[280px]
              text-velora-gold
              transition-all
              duration-500
              ease-in-out
              ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-3 opacity-0'
              }
            `}
          >
            {phrases[phraseIndex]}
          </span>
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
          Velora BiZ Solutions helps businesses, institutions, NGOs and
          government agencies operate smarter, control finances better and
          make confident decisions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-md bg-velora-gold px-7 py-3 font-semibold text-slate-950 transition-transform duration-200 hover:scale-105"
          >
            Let's talk
          </a>

          <a
            href="#what-we-do"
            className="rounded-md border border-white/40 px-7 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  )
}
