import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { MapPin, Code, Zap, Award, GraduationCap, Briefcase } from 'lucide-react';
import { ABOUT_TEXT, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolio';

export const About = () => {
  const location = useLocation();

  // Scroll to the section referenced by the URL hash (e.g. /about#certifications)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // small delay so the page has laid out before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location]);

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Automation First',
      description: 'Every manual process should be automated, every deployment should be reproducible.',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Treat infrastructure with the same discipline as application code.',
    },
    {
      icon: MapPin,
      title: 'Cloud Native',
      description: 'Build for the cloud from day one, embrace containerization and orchestration.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="terminal-window">
                <div className="terminal-chrome">
                  <span className="ml-1 font-mono text-xs text-neutral-400">cat bio.txt</span>
                </div>
                <div className="p-8 space-y-4 text-neutral-300 font-mono text-sm leading-relaxed">
                  <Typewriter
                    text="Hello, I'm Nassim Ben Mustapha, and I turn code into production reality."
                    delay={30}
                    className="text-primary-500 text-glow-green font-semibold block mb-4"
                  />
                  <p>{ABOUT_TEXT}</p>
                  <p className="text-primary-500">
                    For me, DevOps isn't just about speed — it's about precision, repeatability,
                    and creating systems that empower teams to ship confidently and innovate faster.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="terminal-window p-6">
                <h3 className="font-display text-primary-500 font-semibold mb-4 text-base uppercase tracking-wide">
                  Quick Stats
                </h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="text-primary-500">5+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="text-primary-500">AWS, Azure, Hetzner</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Location</span>
                    <span className="text-primary-500">Ariana, Tunisia</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Status</span>
                    <span className="text-primary-500">Open to opportunities</span>
                  </div>
                </div>
              </div>

              <div className="terminal-window p-6">
                <h3 className="font-display text-primary-500 font-semibold mb-4 text-base uppercase tracking-wide">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Cloud Architecture', 'CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Observability', 'High Availability'].map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-0.5 bg-bg-elevated text-accent-500 border border-accent-500/30 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-bg-surface/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-accent-500 uppercase tracking-widest mb-3">// experience</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-500 text-glow-green uppercase tracking-wide">
              Career Timeline
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-primary-500/30" />

            <div className="space-y-8">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={item.period + item.company}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-4 top-5 w-3 h-3 rounded-full bg-primary-500 border-2 border-bg-page -translate-x-1/2 animate-pulse-glow z-10" />

                  <div className="terminal-window p-6 hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-lg font-semibold text-neutral-100 uppercase tracking-wide">
                        {item.role}
                      </h3>
                      <span className="font-mono text-xs text-accent-500 whitespace-nowrap">{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-500 font-mono text-sm mb-3">
                      <Briefcase size={14} />
                      {item.company}
                    </div>
                    <ul className="space-y-1.5">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-2 font-mono text-xs text-neutral-400 leading-relaxed">
                          <span className="text-primary-500 shrink-0">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education + Certifications */}
      <section id="certifications" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="terminal-window">
              <div className="terminal-chrome">
                <span className="ml-1 font-mono text-xs text-neutral-400">cat education.txt</span>
              </div>
              <div className="p-6 space-y-5">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary-500 uppercase tracking-wide">
                  <GraduationCap size={20} /> Education
                </h3>
                {EDUCATION.map((edu) => (
                  <div key={edu.title} className="border-l-2 border-primary-500/30 pl-4">
                    <div className="font-mono text-xs text-accent-500 mb-1">{edu.period}</div>
                    <div className="font-mono text-sm text-neutral-100">{edu.title}</div>
                    <div className="font-mono text-xs text-neutral-400">{edu.school}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="terminal-window">
              <div className="terminal-chrome">
                <span className="ml-1 font-mono text-xs text-neutral-400">ls ~/certifications</span>
              </div>
              <div className="p-6 space-y-5">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary-500 uppercase tracking-wide">
                  <Award size={20} /> Certifications
                </h3>
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-sm text-neutral-100">{cert.name}</div>
                      <div className="font-mono text-xs text-neutral-400">{cert.issuer} · {cert.date}</div>
                    </div>
                    <span className={`shrink-0 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                      cert.status === 'completed'
                        ? 'text-primary-500 border-primary-500/30 bg-primary/5'
                        : 'text-accent-500 border-accent-500/30 bg-accent-500/5'
                    }`}>
                      {cert.status === 'completed' ? 'certified' : 'in progress'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-accent-500 uppercase tracking-widest mb-3">// philosophy</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-500 text-glow-green uppercase tracking-wide">
              Tech Philosophy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="terminal-window p-8 text-center transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-neutral-100 mb-4 uppercase tracking-wide">{point.title}</h3>
                  <p className="font-mono text-sm text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
