export default function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amit-reddy-180862225',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Amitreddy14',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/amitreddy14',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="border-t border-surface-800/40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main footer content */}
        <div className="grid gap-10 py-14 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#hero" className="font-display text-xl font-bold text-white">
              amit<span className="text-accent">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-surface-500">
              Software Engineer & ML Researcher passionate about building intelligent systems and elegant digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-surface-600">Navigation</p>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-surface-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-surface-600">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-800/60 text-surface-500 transition-all duration-300 hover:border-accent/30 hover:text-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:jsammureddy140804@gmail.com"
              className="mt-4 inline-block text-sm text-surface-500 transition-colors hover:text-accent"
            >
              jsammureddy140804@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-surface-800/30 py-6 text-xs text-surface-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Amit Reddy. All rights reserved.</p>
          <p className="text-surface-700">Designed & built with care.</p>
        </div>
      </div>
    </footer>
  )
}
