import { useState, useEffect, useRef } from 'react'

const VISIBLE = 3
const INTERVAL = 2500

const HorizontalCrousel = ({ products }) => {
  const [current, setCurrent] = useState(0)
  const [liked, setLiked] = useState(new Set())
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const trackRef = useRef(null)
  const timerRef = useRef(null)
  const progRef = useRef(null)

  const maxIndex = products.length - VISIBLE

  const goTo = (i) => {
    setCurrent(Math.max(0, Math.min(i, maxIndex)))
    setProgress(0)
  }

  const next = () => setCurrent(prev => {
    const nextVal = prev + 1
    return nextVal > maxIndex ? 0 : nextVal
  })

  const prev = () => setCurrent(prev => {
    const prevVal = prev - 1
    return prevVal < 0 ? maxIndex : prevVal
  })

  // auto play
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [current, paused])

  // progress bar
  useEffect(() => {
    if (paused) return
    setProgress(0)
    clearInterval(progRef.current)
    progRef.current = setInterval(() => {
      setProgress(p => p >= 100 ? 100 : p + (100 / (INTERVAL / 100)))
    }, 100)
    return () => clearInterval(progRef.current)
  }, [current, paused])

  const toggleLike = (id) => {
    setLiked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const stars = (r) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r))

  // ✅ calculate exact pixel offset using actual card width from DOM
  const getTranslate = () => {
    if (!trackRef.current) return 0
    const card = trackRef.current.children[0]
    if (!card) return 0
    const cardW = card.offsetWidth
    const gap = 16
    return current * (cardW + gap)
  }

  return (
    <div
      className="bg-[#0f1923] px-6 py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ✅ overflow hidden on wrapper, track moves via translateX */}
      <div className="overflow-hidden p-2">
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ transform: `translateX(-${getTranslate()}px)` }}
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              // ✅ exact 1/3 width minus gap distribution
              style={{ minWidth: `calc((100% - ${16 * (VISIBLE - 1)}px) / ${VISIBLE})` }}
              className={`bg-[#1a2a38] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
                ${i === current
                  ? 'border-teal-500 -translate-y-1.5'
                  : 'border-white/8 hover:border-teal-500 hover:-translate-y-1'
                }`}
            >
              <div className="relative bg-white/5 flex items-center justify-center p-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-36 w-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-2.5 left-2.5 bg-teal-900 text-teal-300 text-xs px-2.5 py-0.5 rounded-full">
                  Best seller
                </span>
                <button
                  onClick={() => toggleLike(p.id)}
                  className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-sm transition-colors
                    ${liked.has(p.id) ? 'text-red-400' : 'text-white/30 hover:text-white/60'}`}
                >♡</button>
              </div>

              <div className="px-4 py-3">
                <p className="text-teal-500 text-xs mb-1">{p.subCategory}</p>
                <p className="text-white text-sm font-medium mb-2 truncate">{p.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-xs">{stars(p.rating.stars)}</span>
                  <span className="text-white/40 text-xs">{p.rating.stars} ({p.rating.count})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* progress bar */}
      {/* <div className="mt-4 h-0.5 bg-white/10 rounded overflow-hidden">
        <div
          className="h-full bg-teal-500 rounded"
          style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
        />
      </div> */}

      {/* dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'bg-teal-500 w-6' : 'bg-white/15 w-2'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HorizontalCrousel