import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "Amit demonstrated exceptional analytical thinking and a strong grasp of machine learning concepts during his internship. His work on the Samsung PRISM project showed real initiative and technical depth.",
    name: 'Samsung R&D Mentor',
    role: 'Project Lead, Samsung Research',
    initials: 'SR',
  },
  {
    quote: "A dedicated researcher with a keen eye for detail. Amit's contributions to our computer vision research were significant, and his ability to translate complex ideas into working implementations is impressive.",
    name: 'NIT Trichy Supervisor',
    role: 'Faculty, NIT Tiruchirappalli',
    initials: 'NT',
  },
  {
    quote: "Amit brings a rare combination of strong coding skills and research mindset. His work at DRDO showed maturity beyond his years, and he consistently delivered quality results under tight timelines.",
    name: 'DRDO Research Lead',
    role: 'Scientist, DRDO RCI',
    initials: 'DR',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-container', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonial-container',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="section-padding" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="mb-3 font-mono text-sm text-accent">07 — Testimonials</p>
        <h2 className="reveal-up font-display text-3xl font-bold text-white md:text-5xl">
          What people say<span className="text-accent">.</span>
        </h2>
        <p className="reveal-up mt-4 max-w-2xl text-surface-400">
          Feedback from mentors and supervisors I've had the privilege of working with.
        </p>

        {/* Testimonial Card */}
        <div className="testimonial-container mt-14">
          <div className="relative rounded-2xl border border-surface-800/60 bg-surface-950/50 p-8 md:p-12">
            {/* Large quote mark */}
            <svg className="absolute left-6 top-6 h-12 w-12 text-accent/10 md:left-10 md:top-8 md:h-16 md:w-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>

            {/* Quote text */}
            <div className="relative min-h-[120px]">
              {testimonials.map((t, i) => (
                <p
                  key={i}
                  className={`absolute inset-0 text-lg leading-relaxed text-surface-300 transition-all duration-700 md:text-xl md:leading-relaxed ${
                    i === active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ paddingLeft: '1rem' }}
                >
                  "{t.quote}"
                </p>
              ))}
            </div>

            {/* Author info */}
            <div className="mt-8 flex items-center gap-4 border-t border-surface-800/40 pt-6">
              {/* Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                {testimonials[active].initials}
              </div>
              <div>
                <p className="font-medium text-white transition-all duration-500">{testimonials[active].name}</p>
                <p className="text-sm text-surface-500 transition-all duration-500">{testimonials[active].role}</p>
              </div>
            </div>

            {/* Dots navigation */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-accent' : 'w-2 bg-surface-700 hover:bg-surface-600'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
