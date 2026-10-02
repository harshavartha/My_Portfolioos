import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X, Zap, Award, CircleCheck, Activity, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

const FALLBACK_IMG = '/images/image-6.jpg'
const onImgError = (e) => {
  e.currentTarget.src = FALLBACK_IMG
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <div
      className="sticky w-full cursor-pointer group"
      style={{ top: `calc(12vh + ${index * 25}px)`, marginBottom: '10vh', zIndex: index }}
      onClick={() => onOpen(project)}
    >
      <div className="will-change-transform origin-top">
        <motion.article
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0c10] shadow-[0_-12px_40px_rgba(0,0,0,0.6)] transition-all group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            <div className="p-8 md:p-12 lg:col-span-6 flex flex-col justify-center relative z-10">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sky-300/90 uppercase">{project.category}</p>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-100 group-hover:scale-110 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                  <ChevronRight className="text-white w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
              <h3 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.1]">{project.title}</h3>
              <p className="mt-4 text-zinc-300 text-sm md:text-base font-medium">{project.subtitle}</p>
              <p className="mt-6 text-zinc-400 leading-relaxed text-sm md:text-base">{project.cardDescription}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-300">
                    {h}
                  </span>
                ))}
              </div>
            </div>
            {project.imageFit === 'contain' ? (
              <div className="relative lg:col-span-6 overflow-hidden bg-[#07090e] w-full min-h-[300px] lg:min-h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
                {project.video || project.image?.endsWith('.mp4') ? (
                  <video
                    src={project.video || project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto max-h-[420px] object-contain rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={onImgError}
                    className="w-full h-auto max-h-[420px] object-contain rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                )}
              </div>
            ) : (
              <div className="relative lg:col-span-6 overflow-hidden bg-black w-full min-h-[300px] lg:min-h-full">
                {project.video || project.image?.endsWith('.mp4') ? (
                  <video
                    src={project.video || project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={onImgError}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0a0c10] via-black/20 to-transparent pointer-events-none" />
              </div>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  )
}

function DetailList({ title, icon, items, textClass, dotClass, useCheck }) {
  if (!items) return null
  return (
    <div>
      <h4 className="font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 flex items-center gap-2">
        {icon} {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className={`flex items-start gap-3 text-sm ${textClass}`}>
            {useCheck ? (
              <CircleCheck size={14} className="mt-0.5 text-amber-400 shrink-0" />
            ) : (
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${dotClass}`} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const { details } = project
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8 bg-black/80 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl bg-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-6 z-[1000] p-2.5 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto custom-scrollbar relative">
          {project.imageFit === 'contain' ? (
            <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full bg-[#07090e] flex items-center justify-center p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              {project.video || project.image?.endsWith('.mp4') ? (
                <video
                  src={project.video || project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  onError={onImgError}
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              )}
            </div>
          ) : (
            <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
              {project.video || project.image?.endsWith('.mp4') ? (
                <video
                  src={project.video || project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img src={project.image} alt={project.title} onError={onImgError} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 to-transparent pointer-events-none" />
            </div>
          )}

          <div className="lg:w-3/5 p-8 md:p-12 flex flex-col gap-10 z-10 -mt-20 lg:mt-0 relative">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-400/90 uppercase">{project.category}</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">{project.title}</h2>
              <p className="mt-4 text-lg font-light text-zinc-400">{project.subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed"
            >
              {details.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <DetailList
                title="Key Features"
                icon={<Zap size={14} className="text-emerald-400" />}
                items={details.features}
                textClass="text-zinc-400"
                dotClass="bg-emerald-400/50"
              />
              <div className="space-y-8">
                <DetailList
                  title="Achievements"
                  icon={<Award size={14} className="text-amber-400" />}
                  items={details.achievements}
                  textClass="text-amber-200/80"
                  useCheck
                />
                <DetailList
                  title="Impact"
                  icon={<Activity size={14} className="text-sky-400" />}
                  items={details.impact}
                  textClass="text-sky-200/80"
                  dotClass="bg-sky-400/50"
                />
                <DetailList
                  title="Role"
                  icon={<CircleCheck size={14} className="text-rose-400" />}
                  items={details.role}
                  textClass="text-rose-200/80"
                  dotClass="bg-rose-400/50"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {details.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3 md:px-4 py-1.5 md:py-2 border border-white/10 bg-white/[0.02] rounded-xl text-xs md:text-sm text-zinc-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.dashboardImage && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>
                <h4 className="font-medium mb-3 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2">
                  Platform Dashboard Interface
                </h4>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#07090e] p-2">
                  <img src={project.dashboardImage} alt="Platform Dashboard Interface" className="w-full h-auto rounded-xl object-contain shadow-lg" />
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="pt-4">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-200 px-6 py-3 text-sm font-medium text-black transition-all"
                >
                  Visit Live Project <ArrowUpRight size={16} />
                </a>
              ) : (
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all cursor-pointer"
                >
                  Close Case Study
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selected])

  return (
    <section id="projects" className="py-32 px-6 bg-[#030508] relative">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Selected Works</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            A showcase of my recent high-impact engineering projects. Click any project for a detailed case study.
          </p>
        </motion.div>

        <div className="relative flex flex-col pt-10" style={{ paddingBottom: '20vh' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  )
}
