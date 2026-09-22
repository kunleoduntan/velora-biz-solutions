import { useEffect, useState } from 'react'
import heroImg from '../assets/newHero.jpg'

const phrases = [
    'better tomorrow.',
    'smarter business.',
    'better decisions.',
]

export default function Hero() {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isChanging, setIsChanging] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsChanging(true)

            setTimeout(() => {
                setPhraseIndex((prev) => (prev + 1) % phrases.length)
                setIsChanging(false)
            }, 450)
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-slate-950"
        >
            {/* =====================================================
                BACKGROUND IMAGE
            ====================================================== */}

            <img
                src={heroImg}
                alt=""
                className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    object-center
                    scale-[1.03]
                    animate-[heroZoom_18s_ease-in-out_infinite_alternate]
                "
            />

            {/* =====================================================
                CINEMATIC OVERLAYS
            ====================================================== */}

            {/* Main dark overlay */}
            <div className="absolute inset-0 bg-slate-950/45" />

            {/* Left dark gradient for text readability */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-slate-950/95
                    via-slate-950/70
                    via-55%
                    to-slate-950/10
                "
            />

            {/* Bottom gradient */}
            <div
                className="
                    absolute inset-x-0 bottom-0
                    h-[45%]
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/60
                    to-transparent
                "
            />

            {/* =====================================================
                BRAND COLOR GLOW
            ====================================================== */}

            {/* Blue glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-1/3
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-velora-blue/25
                    blur-[130px]
                    animate-pulse
                "
            />

            {/* Gold glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[8%]
                    top-[22%]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-velora-gold/10
                    blur-[110px]
                "
            />

            {/* =====================================================
                DECORATIVE GRID
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.035]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-24 sm:px-8 lg:px-12">

                <div className="w-full max-w-4xl">

                    {/* =================================================
                        EYEBROW
                    ================================================== */}

                    <div
                        className="
                            mb-7
                            flex
                            items-center
                            gap-4
                            animate-[heroFadeUp_0.9s_ease-out_both]
                        "
                    >
                        <span className="h-px w-10 bg-velora-gold" />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.28em]
                                text-velora-gold
                            "
                        >
                            Business Technology • ERP • Automation
                        </span>
                    </div>

                    {/* =================================================
                        MAIN HEADING
                    ================================================== */}

                    <h1
                        className="
                            max-w-4xl
                            text-5xl
                            font-semibold
                            leading-[0.98]
                            tracking-[-0.035em]
                            text-white
                            animate-[heroFadeUp_0.9s_0.15s_ease-out_both]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[82px]
                            xl:text-[92px]
                        "
                    >
                        Technology for a

                        <span className="block">

                            {/* Rotating phrase */}
                            <span
                                className={`
                                    inline-block
                                    text-velora-gold
                                    transition-all
                                    duration-500
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    ${
                                        isChanging
                                            ? 'translate-y-4 opacity-0 blur-sm'
                                            : 'translate-y-0 opacity-100 blur-0'
                                    }
                                `}
                            >
                                {phrases[phraseIndex]}
                            </span>

                        </span>
                    </h1>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                        className="
                            mt-8
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-200/90
                            animate-[heroFadeUp_0.9s_0.3s_ease-out_both]
                            sm:text-lg
                            md:text-xl
                            md:leading-8
                        "
                    >
                        Velora BiZ Solutions helps businesses, institutions,
                        NGOs and government agencies operate smarter, control
                        finances better and make confident decisions.
                    </p>

                    {/* =================================================
                        CTA AREA
                    ================================================== */}

                    <div
                        className="
                            mt-9
                            flex
                            flex-col
                            gap-4
                            animate-[heroFadeUp_0.9s_0.45s_ease-out_both]
                            sm:flex-row
                            sm:items-center
                        "
                    >

                        {/* Primary CTA */}
                        <a
                            href="#contact"
                            className="
                                group
                                relative
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                overflow-hidden
                                rounded-xl
                                bg-velora-gold
                                px-7
                                py-4
                                text-sm
                                font-bold
                                text-slate-950
                                shadow-xl
                                shadow-velora-gold/10
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-[#ffb43b]
                                hover:shadow-2xl
                                hover:shadow-velora-gold/20
                            "
                        >
                            <span className="relative z-10">
                                Let's talk
                            </span>

                            <span
                                className="
                                    relative z-10
                                    text-lg
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            >
                                →
                            </span>

                            {/* Shine */}
                            <span
                                className="
                                    absolute
                                    inset-y-0
                                    -left-full
                                    w-1/2
                                    skew-x-[-20deg]
                                    bg-white/30
                                    transition-all
                                    duration-700
                                    group-hover:left-[130%]
                                "
                            />
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="#what-we-do"
                            className="
                                group
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                border
                                border-white/25
                                bg-white/[0.05]
                                px-7
                                py-4
                                text-sm
                                font-semibold
                                text-white
                                backdrop-blur-md
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-white/50
                                hover:bg-white/10
                            "
                        >
                            <span>
                                Explore our solutions
                            </span>

                            <span
                                className="
                                    text-lg
                                    text-velora-gold
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            >
                                →
                            </span>
                        </a>

                    </div>

                    {/* =================================================
                        TRUST / CAPABILITIES STRIP
                    ================================================== */}

                    <div
                        className="
                            mt-12
                            flex
                            flex-wrap
                            items-center
                            gap-x-6
                            gap-y-3
                            text-xs
                            text-slate-300/80
                            animate-[heroFadeUp_0.9s_0.6s_ease-out_both]
                        "
                    >

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-velora-gold" />
                            ERP Solutions
                        </span>

                        <span className="hidden text-white/20 sm:block">
                            /
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-velora-gold" />
                            Accounting
                        </span>

                        <span className="hidden text-white/20 sm:block">
                            /
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-velora-gold" />
                            Automation
                        </span>

                        <span className="hidden text-white/20 sm:block">
                            /
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-velora-gold" />
                            Digital Transformation
                        </span>

                    </div>

                </div>
            </div>

            {/* =====================================================
                RIGHT SIDE DECORATIVE ELEMENT
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-8
                    top-1/2
                    hidden
                    -translate-y-1/2
                    lg:block
                "
            >

                <div className="relative h-64 w-64">

                    {/* Outer ring */}
                    <div
                        className="
                            absolute
                            inset-0
                            rounded-full
                            border
                            border-white/10
                            animate-[spin_25s_linear_infinite]
                        "
                    />

                    {/* Middle ring */}
                    <div
                        className="
                            absolute
                            inset-8
                            rounded-full
                            border
                            border-velora-gold/20
                            animate-[spin_18s_linear_infinite_reverse]
                        "
                    />

                    {/* Inner circle */}
                    <div
                        className="
                            absolute
                            inset-16
                            rounded-full
                            border
                            border-velora-blue/40
                            bg-velora-blue/10
                            backdrop-blur-sm
                        "
                    />

                    {/* Center */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            flex
                            h-12
                            w-12
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-velora-gold
                            text-lg
                            font-bold
                            text-slate-950
                            shadow-lg
                            shadow-velora-gold/20
                        "
                    >
                        V
                    </div>

                    {/* Floating dots */}
                    <span className="absolute right-4 top-10 h-2 w-2 rounded-full bg-velora-gold shadow-lg shadow-velora-gold/50" />

                    <span className="absolute bottom-10 left-5 h-1.5 w-1.5 rounded-full bg-white/60" />

                    <span className="absolute left-10 top-4 h-1 w-1 rounded-full bg-velora-blue" />

                </div>

            </div>

            {/* =====================================================
                SCROLL INDICATOR
            ====================================================== */}

            <a
                href="#who-we-are"
                className="
                    group
                    absolute
                    bottom-7
                    left-1/2
                    z-20
                    hidden
                    -translate-x-1/2
                    flex-col
                    items-center
                    gap-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                    transition-colors
                    duration-300
                    hover:text-white
                    md:flex
                "
            >
                <span>
                    Explore
                </span>

                <span
                    className="
                        flex
                        h-10
                        w-6
                        items-start
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        p-1.5
                    "
                >
                    <span
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-velora-gold
                            animate-bounce
                        "
                    />
                </span>
            </a>

            {/* =====================================================
                BOTTOM BRAND LINE
            ====================================================== */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-velora-gold/40
                    to-transparent
                "
            />

            {/* =====================================================
                CUSTOM ANIMATIONS
            ====================================================== */}

            <style>{`
                @keyframes heroZoom {
                    0% {
                        transform: scale(1.03);
                    }

                    100% {
                        transform: scale(1.1);
                    }
                }

                @keyframes heroFadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(24px);
                    }

                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}
