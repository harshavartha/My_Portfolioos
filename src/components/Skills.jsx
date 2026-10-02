import { motion } from 'framer-motion'
import { skillGroups, languageGroups } from '../data/skills'

const cardClass = (border) =>
  `group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0c10] p-8 transition-all duration-500 hover:-translate-y-2 ${border} shadow-lg hover:shadow-2xl hover:shadow-black/50`

const iconBox =
  'p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500'

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">{title}</h2>
      <p className="text-zinc-400 text-lg font-light">{subtitle}</p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      <section className="py-32 px-6 bg-[#030508] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Technical Capabilities" subtitle="The core stack driving my engineering and research." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={cardClass(g.border)}
              >
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${g.gradient}`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={iconBox}>{g.icon}</div>
                    <span className={`text-[11px] uppercase tracking-[0.2em] font-mono ${g.color} opacity-60 font-semibold`}>0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{g.group}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8 min-h-[48px]">{g.description}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 border border-white/5 bg-white/[0.02] rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#030508] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Languages & Communication" subtitle="Communicating effectively across cultures and environments." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {languageGroups.map((g, i) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={cardClass(g.border)}
              >
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${g.gradient}`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={iconBox}>{g.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{g.group}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-8">{g.description}</p>
                  </div>
                  <div className="flex flex-col gap-3 mt-auto">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2.5 border border-white/5 bg-white/[0.02] rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default flex items-center justify-center text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
