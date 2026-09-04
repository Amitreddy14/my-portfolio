import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { asset } from '../utils/paths'
import HeroScene from './three/HeroScene'

const Hero = () => {
  const containerRef = useRef(null)
  const nameRef = useRef(null)
  const roleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )

    // Parallax on scroll
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 150,
      opacity: 0.3,
    })
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="canvas-container">
        <HeroScene />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_80%)]" />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* Status badge */}
        <div
          ref={badgeRef}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-800 bg-surface-900/80 px-4 py-2 text-xs font-medium text-surface-400 opacity-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display text-5xl font-bold tracking-tight text-white opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Amit Reddy
        </h1>

        {/* Role */}
        <p
          ref={roleRef}
          className="mt-4 font-display text-lg font-medium tracking-wide text-surface-400 opacity-0 sm:text-xl md:text-2xl"
        >
          Software Engineer{' '}
          <span className="text-surface-600">&</span>{' '}
          ML Researcher
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-6 max-w-xl text-base leading-relaxed text-surface-500 opacity-0 sm:text-lg"
        >
          Building production-grade systems across ML/AI, full-stack, and
          systems programming. Passionate about turning research into
          real-world impact.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
          >
            View my work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href={asset('resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-surface-800 px-7 py-3 text-sm font-medium text-surface-300 transition-all duration-300 hover:border-surface-600 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>

      </div>

      {/* Scroll indicator - outside parallax container */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-surface-600">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-surface-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
