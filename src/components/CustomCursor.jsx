import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e) => setHovering(!!e.target.closest('a, button, [role="button"]'))
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white/40 rounded-full pointer-events-none z-[9999] mix-blend-difference items-center justify-center hidden md:flex"
      animate={{
        x: pos.x - 16,
        y: pos.y - 16,
        scale: hovering ? 2 : 1,
        backgroundColor: hovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
    >
      <motion.div className="w-1 h-1 bg-white rounded-full" animate={{ opacity: hovering ? 0 : 1 }} />
    </motion.div>
  )
}
