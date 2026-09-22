import { useEffect, useState } from 'react'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Why Velora', href: '#why-velora' },
    { name: 'Our Approach', href: '#our-approach' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean)

            const scrollPosition = window.scrollY + 150

            let currentSection = 'home'

            sections.forEach((section) => {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section.id
                }
            })

            setActive(currentSection)
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNavClick = (href) => {
        setOpen(false)

        const target = document.querySelector(href)

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-500
                ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-slate-200/70'
                        : 'bg-white/90 backdrop-blur-md border-b border-slate-100'
                }
            `}
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="flex h-[76px] items-center justify-between">

                    {/* ==================================================
                        LOGO
                    ================================================== */}

                    <button
                        onClick={() => handleNavClick('#home')}
                        className="group flex items-center gap-3"
                    >
                        {/* Logo mark */}
                        <div
                            className="
                                relative flex h-11 w-11 items-center justify-center
                                overflow-hidden rounded-xl
                                bg-velora-blue
                                shadow-lg shadow-velora-blue/20
                                transition-all duration-300
                                group-hover:-translate-y-0.5
                                group-hover:shadow-xl
                                group-hover:shadow-velora-blue/25
                                cursor-pointer
                            "
                        >
                            {/* Decorative ring */}
                            <div className="absolute inset-[5px] rounded-lg border border-velora-gold/40" />

                            {/* Gold corner */}
                            <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-velora-gold/30 blur-sm" />

                            <span className="relative z-10 text-xl font-bold text-white">
                                V
                            </span>
                        </div>

                        {/* Brand text */}
                        <div className="text-left leading-none cursor-pointer">
                            <div className="text-[17px] font-bold tracking-tight text-slate-900">
                                Velora{' '}
                                <span className="text-velora-gold">
                                    BiZ
                                </span>
                            </div>

                            <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                                Solutions
                            </div>
                        </div>
                    </button>

                    {/* ==================================================
                        DESKTOP NAVIGATION
                    ================================================== */}

                    <div className="hidden lg:flex items-center">

                        <div className="flex items-center rounded-full border border-slate-200/80 bg-slate-50/70 p-1">

                            {navItems.map((item) => {
                                const sectionId = item.href.replace('#', '')
                                const isActive = active === sectionId

                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`
                                            relative rounded-full px-4 py-2.5
                                            text-[13px] font-medium
                                            transition-all duration-300  cursor-pointer 
                                            ${
                                                isActive
                                                    ? 'text-velora-blue'
                                                    : 'text-slate-600 hover:text-velora-blue'
                                            }
                                        `}
                                    >
                                        {/* Active background */}
                                        {isActive && (
                                            <span
                                                className="
                                                    absolute inset-0 -z-0
                                                    rounded-full
                                                    bg-white
                                                    shadow-sm
                                                    ring-1 ring-slate-200/70
                                                "
                                            />
                                        )}

                                        <span className="relative z-10">
                                            {item.name}
                                        </span>

                                        {/* Active gold indicator */}
                                        {isActive && (
                                            <span
                                                className="
                                                    absolute bottom-1 left-1/2
                                                    h-0.5 w-4
                                                    -translate-x-1/2
                                                    rounded-full
                                                    bg-velora-gold
                                                "
                                            />
                                        )}
                                    </button>
                                )
                            })}

                        </div>

                    </div>

                    {/* ==================================================
                        DESKTOP CTA
                    ================================================== */}

                    <div className="hidden lg:block">

                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="
                                group relative
                                inline-flex items-center gap-3
                                overflow-hidden
                                rounded-xl
                                bg-velora-blue
                                px-5 py-3
                                text-sm font-semibold text-white
                                shadow-lg shadow-velora-blue/15
                                transition-all duration-300
                                hover:-translate-y-0.5
                                hover:shadow-xl
                                hover:shadow-velora-blue/25
                            "
                        >
                            {/* Gold hover layer */}
                            <span
                                className="
                                    absolute inset-0
                                    -translate-x-full
                                    bg-velora-gold
                                    transition-transform duration-500
                                    group-hover:translate-x-0
                                "
                            />

                            <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                                Let's Talk
                            </span>

                            <span
                                className="
                                    relative z-10
                                    text-lg
                                    transition-all duration-300
                                    group-hover:translate-x-1
                                    group-hover:text-slate-950
                                "
                            >
                                →
                            </span>
                        </button>

                    </div>

                    {/* ==================================================
                        MOBILE MENU BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        className="
                            relative flex h-11 w-11
                            items-center justify-center
                            rounded-xl
                            border border-slate-200
                            bg-white
                            text-velora-blue
                            shadow-sm
                            transition-all duration-300
                            hover:border-velora-blue/30
                            hover:shadow-md
                            active:scale-95
                            lg:hidden
                        "
                    >
                        <div className="relative h-5 w-5">

                            <span
                                className={`
                                    absolute left-0 top-1/2
                                    h-0.5 w-5
                                    rounded-full
                                    bg-current
                                    transition-all duration-300
                                    ${
                                        open
                                            ? 'translate-y-0 rotate-45'
                                            : '-translate-y-2'
                                    }
                                `}
                            />

                            <span
                                className={`
                                    absolute left-0 top-1/2
                                    h-0.5 w-5
                                    rounded-full
                                    bg-current
                                    transition-all duration-300
                                    ${
                                        open
                                            ? 'opacity-0'
                                            : 'opacity-100'
                                    }
                                `}
                            />

                            <span
                                className={`
                                    absolute left-0 top-1/2
                                    h-0.5 w-5
                                    rounded-full
                                    bg-current
                                    transition-all duration-300
                                    ${
                                        open
                                            ? '-translate-y-0 rotate-[-45deg]'
                                            : 'translate-y-2'
                                    }
                                `}
                            />

                        </div>
                    </button>

                </div>

                {/* ======================================================
                    MOBILE MENU
                ====================================================== */}

                <div
                    className={`
                        overflow-hidden transition-all duration-500 lg:hidden
                        ${
                            open
                                ? 'max-h-[600px] pb-5 opacity-100'
                                : 'max-h-0 opacity-0'
                        }
                    `}
                >
                    <div
                        className="
                            rounded-2xl
                            border border-slate-200
                            bg-white
                            p-3
                            shadow-xl shadow-slate-900/10
                        "
                    >

                        {navItems.map((item, index) => {
                            const sectionId = item.href.replace('#', '')
                            const isActive = active === sectionId

                            return (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    style={{
                                        transitionDelay: open
                                            ? `${index * 35}ms`
                                            : '0ms',
                                    }}
                                    className={`
                                        flex w-full
                                        items-center justify-between
                                        rounded-xl
                                        px-4 py-3.5
                                        text-left
                                        text-sm font-medium
                                        transition-all duration-300
                                        ${
                                            isActive
                                                ? 'bg-velora-blue/5 text-velora-blue'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-velora-blue'
                                        }
                                    `}
                                >
                                    <span className="flex items-center gap-3">

                                        {isActive && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-velora-gold" />
                                        )}

                                        {item.name}
                                    </span>

                                    <span
                                        className={`
                                            transition-transform duration-300
                                            ${
                                                isActive
                                                    ? 'translate-x-0 text-velora-gold'
                                                    : '-translate-x-1 opacity-0'
                                            }
                                        `}
                                    >
                                        →
                                    </span>
                                </button>
                            )
                        })}

                        {/* Mobile CTA */}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="
                                mt-2 flex w-full
                                items-center justify-center gap-3
                                rounded-xl
                                bg-velora-gold
                                px-5 py-3.5
                                text-sm font-bold
                                text-slate-950
                                shadow-lg shadow-velora-gold/10
                                transition-all duration-300
                                hover:bg-[#ffb43b]
                                active:scale-[0.98]
                            "
                        >
                            Let's Talk
                            <span>→</span>
                        </button>

                    </div>
                </div>

            </div>
        </nav>
    )
}
