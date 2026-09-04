import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articles = [
  {
    title: 'Understanding Multi-Agent Reinforcement Learning',
    excerpt: 'A deep dive into MARL architectures, cooperative strategies, and how agents learn to collaborate in complex environments.',
    tags: ['Reinforcement Learning', 'AI'],
    date: 'Coming Soon',
    readTime: '8 min read',
    status: 'draft',
  },
  {
    title: 'Building Real-Time Systems with Socket Programming',
    excerpt: 'Lessons from building a centralized group chat server — handling concurrency, message broadcasting, and fault tolerance in C.',
    tags: ['Systems', 'Networking'],
    date: 'Coming Soon',
    readTime: '6 min read',
    status: 'draft',
  },
  {
    title: 'Computer Vision for Terrain Classification',
    excerpt: 'How convolutional neural networks can classify satellite imagery for topographical analysis and land-use mapping.',
    tags: ['Computer Vision', 'Deep Learning'],
    date: 'Coming Soon',
    readTime: '10 min read',
    status: 'draft',
  },
]

export default function Blog() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.blog-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="blog" className="section-padding" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="mb-3 font-mono text-sm text-accent">06 — Blog</p>
        <h2 className="reveal-up font-display text-3xl font-bold text-white md:text-5xl">
          Writing<span className="text-accent">.</span>
        </h2>
        <p className="reveal-up mt-4 max-w-2xl text-surface-400">
          Technical articles and insights from my journey in ML research and software engineering.
        </p>

        {/* Articles Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((article, i) => (
            <article
              key={i}
              className="blog-card group relative flex flex-col rounded-2xl border border-surface-800/60 bg-surface-950/50 p-6 transition-all duration-500 hover:border-surface-700/80 hover:bg-surface-900/30"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
              />

              <div className="relative flex flex-1 flex-col">
                {/* Status + Date */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-surface-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                    {article.status}
                  </span>
                  <span className="text-xs text-surface-600">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-400">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-surface-800/40 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-accent/8 px-2.5 py-0.5 text-[11px] text-accent/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-surface-600">{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal-up mt-12 text-center">
          <p className="text-sm text-surface-500">
            Articles coming soon. Stay tuned for deep dives into ML, systems, and engineering.
          </p>
        </div>
      </div>
    </section>
  )
}
