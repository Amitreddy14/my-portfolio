import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'C++', level: 90 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    title: 'Full-Stack & APIs',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 65 },
    ],
  },
  {
    title: 'AI-Native Engineering',
    skills: [
      { name: 'AI Coding Assistants', level: 90 },
      { name: 'LLMs & RAG', level: 85 },
      { name: 'AI Output Validation', level: 85 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'PyTorch / TensorFlow', level: 88 },
      { name: 'OpenCV / NLP', level: 80 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS (Certified)', level: 75 },
      { name: 'Linux', level: 85 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
]

const SkillBar = ({ name, level, delay }) => {
  const barRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      {
        width: `${level}%`,
        duration: 1.2,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [level, delay])

  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-300 transition-colors group-hover:text-white">
          {name}
        </span>
        <span className="font-mono text-xs text-surface-600">{level}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-surface-900">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light"
          style={{ width: 0 }}
        />
      </div>
    </div>
  )
}

const Tech = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div ref={headingRef} className="mb-16">
          <p className="mb-3 font-mono text-sm text-accent">02 — Skills</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            Technologies I work with<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-xl text-surface-400">
            From low-level systems to high-level abstractions — here's my toolkit
            across domains.
          </p>
        </div>

        {/* Skills grid */}
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="rounded-2xl border border-surface-900 bg-surface-950/50 p-8 transition-all duration-500 hover:border-surface-800 hover:bg-surface-900/30"
            >
              <h3 className="mb-6 flex items-center gap-3 font-display text-lg font-semibold text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                  {String(catIdx + 1).padStart(2, '0')}
                </span>
                {category.title}
              </h3>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIdx * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech
