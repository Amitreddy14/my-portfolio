import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactLinks = [
  {
    label: 'Email',
    value: 'jsammureddy140804@gmail.com',
    href: 'mailto:jsammureddy140804@gmail.com',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amit-reddy-180862225',
    href: 'https://www.linkedin.com/in/amit-reddy-180862225',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Amitreddy14',
    href: 'https://github.com/Amitreddy14',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    value: '@amitreddy14',
    href: 'https://twitter.com/amitreddy14',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="mb-3 font-mono text-sm text-accent">08 — Contact</p>
          <h2 className="reveal-up font-display text-3xl font-bold text-white md:text-5xl">
            Let's connect<span className="text-accent">.</span>
          </h2>
          <p className="reveal-up mx-auto mt-4 max-w-lg text-surface-400">
            Have an opportunity, a project idea, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal-up mt-10 text-center">
          <a
            href="mailto:jsammureddy140804@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 font-medium text-white transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25"
          >
            Get in touch
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Contact Links Grid */}
        <div className="contact-grid mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="contact-card group flex flex-col items-center rounded-2xl border border-surface-800/60 bg-surface-950/50 p-6 text-center transition-all duration-500 hover:border-accent/30 hover:bg-surface-900/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-800/60 text-surface-400 transition-all duration-300 group-hover:bg-accent/15 group-hover:text-accent">
                {link.icon}
              </div>
              <p className="mt-4 text-sm font-medium text-white">{link.label}</p>
              <p className="mt-1 text-xs text-surface-500 transition-colors group-hover:text-accent/60">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="reveal-up mt-14 flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm text-surface-500">Currently open to opportunities</span>
        </div>
      </div>
    </section>
  )
}
