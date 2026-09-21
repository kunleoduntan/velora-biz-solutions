import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-velora-blue">
                    Velora <span className="text-velora-gold">BiZ</span>
                </h1>

                <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                    <li><a href="#home" className="hover:text-velora-blue transition-colors duration-200">Home</a></li>
                    <li><a href="#who-we-are" className="hover:text-velora-blue transition-colors duration-200">Who We Are</a></li>
                    
                    <li><a href="#what-we-do" className="hover:text-velora-blue transition-colors duration-200">What We Do</a></li>
                    <li><a href="#why-velora" className="hover:text-velora-blue transition-colors duration-200">Why Velora</a></li>
                    <li><a href="#our-approach" className="hover:text-velora-blue transition-colors duration-200">Our Approach</a></li>
                    <li><a href="#cta" className="hover:text-velora-blue transition-colors duration-200">CTA</a></li>
                    <li><a href="#industries" className="hover:text-velora-blue transition-colors duration-200">Industries</a></li>
                    <li><a href="#contact" className="hover:text-velora-blue transition-colors duration-200">Contact</a></li>
                    <li><a href="#footer" className="hover:text-velora-blue transition-colors duration-200">Footer</a></li>
                </ul>

                <a href="#contact" className="hidden md:inline-block bg-velora-gold text-white px-5 py-2 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 hover:opacity-90">Let's Talk</a>

                <button className="md:hidden text-velora-blue text-3xl transition-transform duration-200 active:scale-90" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
            </div>

            {open && (
                <ul className="md:hidden flex flex-col gap-4 mt-4 font-medium text-gray-700">
                    <li><a href="#home" className="hover:text-velora-blue transition-colors duration-200">Home</a></li>
                     <li><a href="#who-we-are" className="hover:text-velora-blue transition-colors duration-200">Who We Are</a></li>
                    
                    <li><a href="#what-we-do" className="hover:text-velora-blue transition-colors duration-200">What We Do</a></li>
                    <li><a href="#why-velora" className="hover:text-velora-blue transition-colors duration-200">Why Velora</a></li>
                    <li><a href="#our-approach" className="hover:text-velora-blue transition-colors duration-200">Our Approach</a></li>
                    <li><a href="#cta" className="hover:text-velora-blue transition-colors duration-200">CTA</a></li>
                    <li><a href="#industries" className="hover:text-velora-blue transition-colors duration-200">Industries</a></li>
                    <li><a href="#contact" className="hover:text-velora-blue transition-colors duration-200">Contact</a></li>
                    <li><a href="#footer" className="hover:text-velora-blue transition-colors duration-200">Footer</a></li>
                </ul>
            )}
        </nav>
    )
}