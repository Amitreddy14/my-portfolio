import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '../utils/paths'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Research and Development Intern',
    company: 'Samsung R&D Institute India',
    period: 'Mar 2025 — Nov 2025',
    description:
      'Designed and shipped production-grade C++ software components across the full engineering stack, applying quality engineering practices including unit testing, peer code reviews, and production-readiness checks across 3 release cycles. Used AI coding assistants to accelerate development workflows, reducing shading workload by 30% and improving frame stability by 18%.',
    logo: 'l3.png',
    tags: ['C++', 'OpenGL', 'AI Assistants', 'XR'],
  },
  {
    role: 'Summer Research Intern',
    company: 'NIT Trichy',
    period: 'May 2025 — Jul 2025',
    description:
      'Built reusable Python software components for a distributed AI coordination platform, applying Git-based version control, CI/CD-aligned testing, and Agile-style iterative delivery across 100+ experimental configurations. Used AI-assisted development tools to improve engineering productivity with rigorous output validation.',
    logo: 'l2.png',
    tags: ['Python', 'PyTorch', 'CI/CD', 'MARL'],
  },
  {
    role: 'Research & Data',
    company: "Placfv's — SRM Placement Student Team",
    period: 'Jan 2025 — Present',
    description:
      'Driving data-informed placement strategy and analytics for the student placement cell, analyzing trends and building tools to support recruitment outcomes.',
    logo: 'l4.png',
    tags: ['Data Analysis', 'Strategy'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Research Centre Imarat, DRDO',
    period: 'Dec 2024 — Jan 2025',
    description:
      'Shipped production-ready Python backend components with automated unit testing and secure coding practices, contributing to client-delivery-equivalent engineering standards. Contributed reusable data processing and evaluation assets to team-wide repositories, improving team productivity by ~40%.',
    logo: 'l1.png',
    tags: ['Python', 'ML', 'Unit Testing', 'Pandas'],
  },
]

const Experience = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const timelineRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      )

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: 'power2.inOut',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )

      const cards = timelineRef.current.querySelectorAll('.exp-card')
      gsap.fromTo(
        cards,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div ref={headingRef} className="mb-16">
          <p className="mb-3 font-mono text-sm text-accent">03 — Experience</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Where I've worked<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-surface-400">
            Research labs, product teams, and defense organizations — each one raised the bar on what "production quality" means.
          </p>
        </div>

        <div ref={timelineRef} className="relative pl-8 md:pl-12">
          <div ref={lineRef} className="absolute left-[11px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-[15px]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-card relative">
                <div className="absolute -left-8 top-3 flex h-[22px] w-[22px] items-center justify-center md:-left-12 md:h-[30px] md:w-[30px]">
                  <div className="h-3 w-3 rounded-full border-2 border-accent bg-surface-950 md:h-3.5 md:w-3.5" />
                </div>

                <div className="group rounded-2xl border border-surface-900 bg-surface-950/50 p-6 transition-all duration-500 hover:border-surface-800 hover:bg-surface-900/30 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 p-2">
                      <img src={asset(exp.logo)} alt={exp.company} className="h-10 w-10 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                        <span className="font-mono text-xs text-surface-500">{exp.period}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-accent/80">{exp.company}</p>
                      {exp.description && (
                        <p className="mt-3 leading-relaxed text-surface-400">{exp.description}</p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-surface-900 px-3 py-1 text-xs font-medium text-surface-400 transition-colors group-hover:text-surface-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
