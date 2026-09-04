import { useState, useEffect } from 'react'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: BsLinkedin, href: 'https://www.linkedin.com/in/amit-reddy-180862225/', label: 'LinkedIn' },
  { icon: BsGithub, href: 'https://github.com/Amitreddy14', label: 'GitHub' },
  { icon: BsTwitterX, href: 'https://x.com/Amit140804', label: 'Twitter' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const y = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'glass py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          amit<span className="text-accent">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-surface-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop socials */}
        <div className="hidden items-center gap-4 md:flex">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-surface-500 transition-colors duration-300 hover:text-white"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-surface-950/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <a href="#home" className="font-display text-xl font-bold text-white">
            amit<span className="text-accent">.</span>
          </a>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <HiX size={24} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center px-12">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-3xl font-medium text-surface-300 transition-colors hover:text-white"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-surface-500 transition-colors hover:text-white"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
