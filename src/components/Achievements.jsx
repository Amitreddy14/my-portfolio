import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    icon: '🏆',
    title: '1st Runner Up',
    subtitle: 'Agentica International Hackathon, IIIT Sricity',
    description: 'Secured 1st Runner Up at the Agentica International Hackathon hosted by IIIT Sricity in March 2025.',
    type: 'hackathon',
  },
  {
    icon: '🥈',
    title: '2nd Runner Up',
    subtitle: 'ACM-W Mak-e-thon Hackathon, SRMIST',
    description: 'Achieved 2nd Runner Up at the ACM-W Mak-e-thon Hackathon held at SRM Institute in October 2024.',
    type: 'hackathon',
  },
  {
    icon: '🌏',
    title: 'ICPC — Global Rank 151',
    subtitle: 'ICPC Taiwan Contest',
    description: 'Ranked 151st globally in the International Collegiate Programming Contest (ICPC) Taiwan regional contest.',
    type: 'competitive',
  },
  {
    icon: '📄',
    title: 'IEEE Publication',
    subtitle: 'IEEE ICCCNT 2025, IIT Indore',
    description: '"Detection of Marine Oil Spills using Automatic Identification System and Satellite Remote Sensing" — published at IEEE ICCCNT 2025.',
    type: 'research',
  },
  {
    icon: '🏢',
    title: 'Samsung R&D Intern',
    subtitle: 'Samsung Research Institute India',
    description: 'Built a Fixed Foveated Rendering pipeline in OpenGL & C++ for production-grade XR applications, reducing shading workload by ~30%.',
    type: 'experience',
  },
  {
    icon: '🛡️',
    title: 'DRDO Research Intern',
    subtitle: 'Research Centre Imarat',
    description: 'Developed supervised ML models for large-scale defense classification tasks at India\'s premier defense R&D organization.',
    type: 'experience',
  },
]

const certifications = [
  { name: 'AWS Certified CloudOps Engineer — Associate', org: 'Amazon Web Services · Mar 2026 · Grade 93.5%' },
  { name: 'AWS Certified ML Engineer — Associate', org: 'Amazon Web Services · Mar 2026 · Grade 89.3%' },
  { name: 'Oracle OCI 2025 Generative AI Professional', org: 'Oracle · Oct 2025' },
  { name: 'Oracle APEX Cloud Developer Professional', org: 'Oracle · Aug 2025' },
]

const coursework = [
  'Data Structures & Algorithms',
  'Software Testing',
  'Artificial Intelligence',
  'Machine Learning',
  'System Design',
  'Cloud Computing',
  'Operating Systems',
  'DBMS',
  'Computer Networks',
  'OOP',
]

export default function Achievements() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.achievement-card').forEach((card, i) => {
        gsap.from(card, {
          y: 60, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
      gsap.utils.toArray('.cert-item').forEach((item, i) => {
        gsap.from(item, {
          x: -30, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 90%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="achievements" className="section-padding" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-sm text-accent">05 — Achievements</p>
        <h2 className="reveal-up font-display text-3xl font-bold text-white md:text-5xl">
          Milestones<span className="text-accent">.</span>
        </h2>
        <p className="reveal-up mt-4 max-w-2xl text-surface-400">
          Hackathon wins, competitive programming, research publications, and industry certifications.
        </p>

        {/* Achievement Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <div key={i} className="achievement-card group relative rounded-2xl border border-surface-800/60 bg-surface-950/50 p-6 transition-all duration-500 hover:border-surface-700/80 hover:bg-surface-900/30">
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
              <div className="relative">
                <span className="text-3xl">{item.icon}</span>
                <span className="ml-3 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">{item.type}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent/70">{item.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-surface-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="reveal-up font-display text-xl font-semibold text-white md:text-2xl">
            Certifications<span className="text-accent">.</span>
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item flex items-start gap-4 rounded-xl border border-surface-800/40 bg-surface-950/30 p-5 transition-all duration-300 hover:border-surface-700/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">{cert.name}</p>
                  <p className="mt-1 text-sm text-surface-500">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mt-14">
          <h3 className="reveal-up font-display text-xl font-semibold text-white md:text-2xl">
            Relevant Coursework<span className="text-accent">.</span>
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {coursework.map((course) => (
              <span key={course} className="cert-item rounded-full border border-surface-800/50 bg-surface-950/40 px-4 py-2 text-sm text-surface-400 transition-colors hover:border-surface-700 hover:text-surface-300">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
