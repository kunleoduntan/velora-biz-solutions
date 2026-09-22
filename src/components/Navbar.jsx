
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
            setScrolled(window.scrollY > 30)

            const scrollPosition = window.scrollY + 180
            let currentSection = 'home'

            navItems.forEach((item) => {
                const section = document.querySelector(item.href)

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = section.id
                }
            })

            setActive(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
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
        <>
            {/* NAVBAR */}
            <nav
                className={`
                    fixed inset-x-0 top-0 z-50
                    transition-all duration-500
                    ${
                        scrolled
                            ? 'px-4 pt-3 sm:px-6'
                            : 'px-0 pt-0'
                    }
                `}
            >
                <div
                    className={`
                        mx-auto
                        transition-all duration-500
                        ${
                            scrolled
                                ? 'max-w-6xl rounded-2xl border border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl'
                                : 'max-w-7xl bg-white/95'
                        }
                    `}
                >
                    <div
                        className={`
                            flex items-center justify-between
                            px-5 sm:px-7
                            ${
                                scrolled
                                    ? 'h-[68px]'
                                    : 'h-[78px]'
                            }
                        `}
                    >
                        {/* =========================================
                            LOGO
                        ========================================== */}

                        <button
                            onClick={() => handleNavClick('#home')}
                            className="group flex items-center gap-3 cursor-pointer"
                            aria-label="Go to homepage"
                        >
                            {/* Logo mark */}
                            <div
                                className="
                                    relative flex h-10 w-10
                                    items-center justify-center
                                    overflow-hidden rounded-[11px]
                                    bg-velora-blue
                                    shadow-md shadow-velora-blue/20
                                    transition-all duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:shadow-lg
                                "
                            >
                                {/* subtle gold accent */}
                                <span
                                    className="
                                        absolute -right-2 -top-2
                                        h-6 w-6 rounded-full
                                        bg-velora-gold/50
                                        blur-[2px]
                                    "
                                />

                                {/* inner frame */}
                                <span
                                    className="
                                        absolute inset-[5px]
                                        rounded-[7px]
                                        border border-white/15
                                    "
                                />

                                <span className="relative text-lg font-bold text-white">
                                    V
                                </span>
                            </div>

                            {/* Brand */}
                            <div className="text-left leading-none">
                                <div className="text-[16px] font-bold tracking-tight text-slate-950">
                                    Velora
                                    <span className="text-velora-gold">
                                        BiZ
                                    </span>
                                </div>

                                <div className="mt-1.5 text-[7px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                                    Solutions
                                </div>
                            </div>
                        </button>

                        {/* =========================================
                            DESKTOP NAV
                        ========================================== */}

                        <div className="hidden lg:flex items-center">
                            <div className="flex items-center gap-1 ">
                                {navItems.map((item) => {
                                    const sectionId = item.href.replace('#', '')
                                    const isActive = active === sectionId

                                    return (
                                        <button
                                            key={item.href}
                                            onClick={() =>
                                                handleNavClick(item.href)
                                            }
                                            className={`
                                                relative
                                                rounded-lg
                                                px-3 py-2
                                                text-[12.5px]
                                                font-medium
                                                tracking-[-0.01em]
                                                transition-all duration-300
                                                cursor-pointer
                                                ${
                                                    isActive
                                                        ? 'text-velora-blue'
                                                        : 'text-slate-500 hover:text-slate-950'
                                                }
                                            `}
                                        >
                                            {/* Active background */}
                                            {isActive && (
                                                <span
                                                    className="
                                                        absolute inset-0
                                                        -z-10
                                                        rounded-lg
                                                        bg-slate-100
                                                    "
                                                />
                                            )}

                                            {item.name}

                                            {/* Active indicator */}
                                            {isActive && (
                                                <span
                                                    className="
                                                        absolute
                                                        bottom-0.5
                                                        left-1/2
                                                        h-0.5
                                                        w-3
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

                        {/* =========================================
                            DESKTOP CTA
                        ========================================== */}

                        <div className="hidden lg:block">
                            <button
                                onClick={() =>
                                    handleNavClick('#contact')
                                }
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-velora-blue
                                    px-4 py-2.5
                                    text-[12px]
                                    font-semibold
                                    text-white
                                    shadow-md
                                    shadow-velora-blue/15
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-slate-950
                                    hover:shadow-lg
                                    active:translate-y-0
                                    cursor-pointer
                                "
                            >
                                <span>Let's Talk</span>

                                <svg
                                    className="
                                        h-3.5 w-3.5
                                        transition-transform duration-300
                                        group-hover:translate-x-0.5
                                    "
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M3 8h9M8.5 4.5L12 8l-3.5 3.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* =========================================
                            MOBILE BUTTON
                        ========================================== */}

                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            aria-label={
                                open ? 'Close menu' : 'Open menu'
                            }
                            aria-expanded={open}
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-xl
                                border border-slate-200
                                bg-white
                                text-slate-800
                                transition-all duration-300
                                hover:border-slate-300
                                hover:bg-slate-50
                                active:scale-95
                                lg:hidden
                            "
                        >
                            <div className="relative h-4 w-5">
                                <span
                                    className={`
                                        absolute left-0 top-1/2
                                        h-[1.5px] w-5
                                        rounded-full bg-current
                                        transition-all duration-300
                                        ${
                                            open
                                                ? 'rotate-45'
                                                : '-translate-y-1.5'
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        absolute left-0 top-1/2
                                        h-[1.5px] w-5
                                        rounded-full bg-current
                                        transition-all duration-200
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
                                        h-[1.5px] w-5
                                        rounded-full bg-current
                                        transition-all duration-300
                                        ${
                                            open
                                                ? '-rotate-45'
                                                : 'translate-y-1.5'
                                        }
                                    `}
                                />
                            </div>
                        </button>
                    </div>

                    {/* =============================================
                        MOBILE MENU
                    ============================================== */}

                    <div
                        className={`
                            overflow-hidden
                            transition-all duration-400
                            lg:hidden
                            ${
                                open
                                    ? 'max-h-[650px] opacity-100'
                                    : 'max-h-0 opacity-0'
                            }
                        `}
                    >
                        <div className="px-4 pb-4">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-2">
                                {navItems.map((item, index) => {
                                    const sectionId =
                                        item.href.replace('#', '')
                                    const isActive =
                                        active === sectionId

                                    return (
                                        <button
                                            key={item.href}
                                            onClick={() =>
                                                handleNavClick(
                                                    item.href
                                                )
                                            }
                                            style={{
                                                transitionDelay: open
                                                    ? `${index * 30}ms`
                                                    : '0ms',
                                            }}
                                            className={`
                                                flex w-full
                                                items-center
                                                justify-between
                                                rounded-xl
                                                px-4 py-3
                                                text-left
                                                text-sm
                                                font-medium
                                                transition-all duration-300
                                                ${
                                                    isActive
                                                        ? 'bg-white text-velora-blue shadow-sm'
                                                        : 'text-slate-600 hover:bg-white hover:text-slate-950'
                                                }
                                            `}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span
                                                    className={`
                                                        h-1.5 w-1.5
                                                        rounded-full
                                                        transition-all
                                                        ${
                                                            isActive
                                                                ? 'bg-velora-gold'
                                                                : 'bg-transparent'
                                                        }
                                                    `}
                                                />

                                                {item.name}
                                            </span>

                                            <svg
                                                className={`
                                                    h-4 w-4
                                                    transition-all duration-300
                                                    ${
                                                        isActive
                                                            ? 'translate-x-0 text-velora-gold opacity-100'
                                                            : '-translate-x-1 opacity-0'
                                                    }
                                                `}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 8h9M8.5 4.5L12 8l-3.5 3.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    )
                                })}

                                {/* Mobile CTA */}
                                <button
                                    onClick={() =>
                                        handleNavClick('#contact')
                                    }
                                    className="
                                        mt-2
                                        flex w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-velora-blue
                                        px-5 py-3.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        shadow-md
                                        transition-all duration-300
                                        hover:bg-slate-950
                                        active:scale-[0.98]
                                    "
                                >
                                    Let's Talk

                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 8h9M8.5 4.5L12 8l-3.5 3.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Prevent content from sitting underneath navbar */}
            <div className="h-[78px]" />
        </>
    )
}
