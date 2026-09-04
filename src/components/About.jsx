import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '../utils/paths'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '9.11', label: 'CGPA' },
  { value: '3+', label: 'Internships' },
  { value: '20+', label: 'Projects' },
  { value: '2027', label: 'Graduating' },
]

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const bodyRef = useRef(null)
  const statsRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          bodyRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          statsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.4'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div ref={headingRef} className="mb-16">
          <p className="mb-3 font-mono text-sm text-accent">01 — About</p>
          <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
            A bit about me<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div ref={bodyRef} className="flex flex-col gap-6 lg:col-span-3">
            <p className="text-lg leading-relaxed text-surface-300">
              I'm a final-year Computer Science student at{' '}
              <span className="text-white font-medium">SRM Institute of Science and Technology</span>,
              Chennai. My work sits at the intersection of ML research and production engineering — I
              don't just build models, I ship systems.
            </p>
            <p className="leading-relaxed text-surface-400">
              From optimizing GPU shaders for foveated rendering at{' '}
              <span className="text-surface-200">Samsung R&D</span> to designing multi-agent
              reinforcement learning algorithms at{' '}
              <span className="text-surface-200">NIT Trichy</span>, and building ML classification
              pipelines at <span className="text-surface-200">DRDO</span> — I've had the chance to
              work on problems where the bar is production quality, not just a proof of concept.
            </p>
            <p className="leading-relaxed text-surface-400">
              I care about code that scales, interfaces that feel right, and research that
              actually makes it out of the notebook. When I'm not coding, you'll find me on
              competitive programming platforms sharpening algorithms, or exploring new papers
              in computer vision and NLP.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              {['ML / Deep Learning', 'Full-Stack Development', 'Systems Programming', 'Computer Vision', 'NLP'].map((tag) => (
                <span key={tag} className="rounded-full border border-surface-800 px-4 py-1.5 text-xs font-medium text-surface-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="flex items-start justify-center lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-surface-800/50" />
              <div className="absolute -inset-6 rounded-3xl border border-surface-900/30" />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={asset('prof.png')}
                  alt="Amit Reddy"
                  className="h-auto w-full max-w-[320px] rounded-xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-accent glow-accent" />
            </div>
          </div>
        </div>

        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-6 border-t border-surface-900 pt-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-surface-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
