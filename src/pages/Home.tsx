import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Linkedin, Code2, ChevronDown } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { HERO_CONTENT, SKILLS, CONTACT } from '../data/portfolio';

export const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', to: '/about#experience' },
    { label: 'Cloud Platforms', value: '6', to: '/skills' },
    { label: 'Projects Delivered', value: '30+', to: '/projects' },
    { label: 'Certifications', value: '10+', to: '/about#certifications' },
  ];

  const featuredSkills = SKILLS.slice(0, 6);

  // Decorative floating tech logos — one in each corner of the hero
  const floatingLogos = [
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', pos: 'top-[22%] left-[10%]', size: 'w-20 h-20', delay: '0s' },
    { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', pos: 'top-[22%] right-[10%]', size: 'w-20 h-20', delay: '0.8s' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', pos: 'top-[72%] left-[14%]', size: 'w-20 h-20', delay: '1.6s' },
    { name: 'Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', pos: 'top-[72%] right-[12%]', size: 'w-20 h-20', delay: '0.4s' },
  ];

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      {/* 3D Grid Background */}
      <Grid3DBackground />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Floating tech logos — one per corner of the hero */}
        <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {floatingLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt=""
              className={`absolute ${logo.pos} ${logo.size} object-contain opacity-20 animate-float-soft`}
              style={{
                animationDelay: logo.delay,
                filter: 'grayscale(100%) brightness(1.6) drop-shadow(0 0 10px rgba(0,230,118,0.35))',
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Boot terminal */}
            <div className="terminal-window mx-auto max-w-2xl shadow-glow-green-sm">
              <div className="terminal-chrome">
                <span className="ml-1 font-mono text-xs text-neutral-400">nassim@portfolio: ~</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1.5 text-neutral-300">
                <p><span className="text-accent-500">$</span> ssh nassim@portfolio</p>
                <p className="text-neutral-400">Initializing secure shell session...</p>
                <p className="text-primary-500">Loading profile... [████████████] 100%</p>
                <p className="pt-2"><span className="text-accent-500">$</span> <span className="text-primary-500">whoami</span></p>
              </div>
            </div>

            {/* Name + title */}
            <div className="text-center space-y-4">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-500 text-glow-green tracking-tight uppercase">
                Nassim Ben Mustapha
              </h1>
              <div className="font-mono text-xl md:text-2xl text-neutral-200">
                <Typewriter text="Full Stack & DevOps Engineer" delay={70} />
                <span className="animate-blink text-primary-500 ml-1">_</span>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="font-mono text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed text-center"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center gap-2 border border-primary-500/40 rounded-sm px-3 py-1 text-xs font-mono text-primary-500 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-glow" />
                AVAILABLE FOR HIRE
              </span>
            </motion.div>

            {/* Scroll hint (above the buttons) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="flex flex-col items-center gap-1 text-neutral-500 pt-2"
            >
              <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-page transition-all duration-200 font-mono font-semibold tracking-wide rounded-sm hover:shadow-glow"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-neutral-700 bg-bg-elevated text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-mono font-semibold tracking-wide rounded-sm"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  to={stat.to}
                  className="terminal-window p-6 text-center block transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-green-sm"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary-500 text-glow-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-widest">
                    {stat.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="font-mono text-xs text-accent-500 uppercase tracking-widest mb-3">// stack</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-500 text-glow-green uppercase tracking-wide">
              Featured Technologies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="terminal-window p-4 text-center transition-all duration-300 group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 mx-auto mb-3 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="font-mono text-xs text-neutral-200 font-medium leading-tight">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
            >
              <span className="mr-2">View all skills</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="terminal-window p-12 shadow-glow"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-500 text-glow-green mb-6 uppercase tracking-wide">
              Ready to Deploy Your Vision?
            </h2>
            <p className="font-mono text-base text-neutral-300 mb-8 leading-relaxed">
              From infrastructure automation to full-stack development, let's turn your ideas into
              production-grade reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-page font-mono font-semibold rounded-sm hover:bg-primary-400 transition-all duration-200 shadow-glow"
              >
                Start a Project
              </Link>
              <a
                href={CONTACT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-700 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-mono font-semibold rounded-sm transition-all duration-200"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
