import { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const tl = gsap.timeline({
      onComplete: () => {
        // Reveal animation
        gsap.to('.loader-wrapper', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.3,
          onComplete,
        })
      },
    })

    // Animate progress counter
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: function () {
        setProgress(Math.round(this.targets()[0].val))
      },
    })

    // Animate the progress bar width
    gsap.to('.loader-bar-fill', {
      width: '100%',
      duration: 2.2,
      ease: 'power2.inOut',
    })

    // Stagger in the text elements
    gsap.from('.loader-text', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    })

    return () => tl.kill()
  }, [onComplete])

  return (
    <div className="loader-wrapper fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Logo */}
      <div className="loader-text mb-10">
        <span className="font-display text-3xl font-bold text-white">
          amit<span className="text-accent">.</span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="loader-text w-64">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-surface-800/50">
          <div className="loader-bar-fill h-full w-0 rounded-full bg-accent" />
        </div>
      </div>

      {/* Percentage */}
      <div className="loader-text mt-4 font-mono text-sm text-surface-500">
        <span>{progress}</span>
        <span className="text-accent">%</span>
      </div>
    </div>
  )
}
