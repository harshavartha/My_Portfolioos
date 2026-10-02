import { motion } from 'framer-motion'
import { recognitions } from '../data/recognitions'

export default function Recognition() {
  return (
    <section id="recognition" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Global Impact</h2>
            <p className="text-zinc-400 text-lg font-light max-w-xl">
              From localized engineering to representing the nation on the world stage.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {recognitions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 md:p-8 rounded-2xl glass-card overflow-hidden"
            >
              <div className="w-full md:w-2/5 aspect-[4/3] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-zinc-500 font-mono text-sm tracking-widest">{item.year}</span>
                  <div className="h-[1px] w-12 bg-white/20" />
                  <span className="text-zinc-400 text-sm tracking-wide uppercase">{item.event}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-200 transition-colors">{item.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
