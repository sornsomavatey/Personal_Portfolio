import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Code, Layout, ShieldCheck, Database, Award, CheckCircle } from 'lucide-react';
import { personalInfo, skills, projects } from '../../data/portfolioData';

export default function Home() {
  // Extract featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="w-full pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 lg:px-8 overflow-hidden">
        {/* Glow Spots */}
        <div className="glow-spot-emerald -top-10 -left-10" />
        <div className="glow-spot-blue bottom-10 right-10" />

        <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          {/* Hero Left Content */}
          <div className="flex-1 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Award size={14} /> Available for Internships & Projects
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl leading-[1.1]">
              Hi, I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                {personalInfo.name}
              </span>
            </h1>

            <p className="mt-4 text-2xl font-semibold text-slate-300 font-display">
              {personalInfo.title}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
              {personalInfo.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                View Selected Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold text-slate-300 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Hero Right: Decorative Engineering/Cloud Graphic Placeholder */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse" />
            <div className="relative border border-slate-800/80 bg-slate-950/40 backdrop-blur-md rounded-3xl p-8 w-full max-w-sm shadow-2xl animate-float">
              {/* Graphic Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono">aws-config.yml</span>
              </div>

              {/* Graphical items */}
              <div className="space-y-4 font-mono text-xs text-slate-400">
                <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <div className="flex items-center gap-2.5">
                    <Cloud size={16} className="text-emerald-400" />
                    <span>AWS Infrastructure</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <div className="flex items-center gap-2.5">
                    <Code size={16} className="text-blue-400" />
                    <span>React & TypeScript</span>
                  </div>
                  <span className="text-blue-400 font-bold">Compiled</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={16} className="text-teal-400" />
                    <span>CI/CD Workflow</span>
                  </div>
                  <span className="text-teal-400 font-bold">Passed</span>
                </div>

                <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <div className="flex items-center gap-2.5">
                    <Database size={16} className="text-purple-400" />
                    <span>Database Engine</span>
                  </div>
                  <span className="text-purple-400 font-bold">Connected</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <span className="text-[10px] text-slate-500 font-mono">SOMAVATEY SORN · PORTFOLIO ENGINE v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Expertise</h2>
          <p className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Key Areas of Focus
          </p>
          <p className="mt-4 text-slate-400 text-sm">
            Applying cloud computing principles, sound software engineering, and modern user-centric interfaces.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Cloud Devops */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col items-start text-left">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mb-6">
              <Cloud size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Cloud & DevOps</h3>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Skilled in AWS (Technical Essentials), Huawei Cloud Infrastructure, and containerization via Docker. Practiced in building workflows using Jenkins, GitHub, and SonarQube.
            </p>
          </div>

          {/* Web Development */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col items-start text-left">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl mb-6">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Full-Stack Web</h3>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Creating responsive, fast frontend components in React, TypeScript, and Tailwind CSS. Capable of developing backends in Node.js, Express, and ASP.NET Core databases.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col items-start text-left">
            <div className="p-3 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl mb-6">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-bold text-white font-display">UX/UI & WebFlow</h3>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Designing user-friendly flows, structural wireframes, and high-fidelity interactive prototypes in Figma and Framer, then coding them into functional pages.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="text-left">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Portfolio</h2>
            <p className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Featured Projects
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Explore all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between text-left"
            >
              <div>
                {/* Visual Accent */}
                <div className="h-40 rounded-xl mb-6 bg-gradient-to-br from-slate-900 via-[#0d1527] to-slate-950 flex items-center justify-center border border-slate-800/40 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-30 group-hover:opacity-50 transition-opacity" />
                  {project.image.includes('.') ? (
                    <img
                      src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      {project.image === 'restaurant' && <Code size={48} className="text-emerald-500/45 group-hover:scale-110 transition-transform duration-300" />}
                      {project.image === 'compliance' && <ShieldCheck size={48} className="text-teal-500/45 group-hover:scale-110 transition-transform duration-300" />}
                      {project.image === 'aeroplant' && <Database size={48} className="text-blue-500/45 group-hover:scale-110 transition-transform duration-300" />}
                    </>
                  )}
                </div>

                <div className="flex gap-2 mb-3">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display hover:text-emerald-400 transition-colors">
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] text-slate-500 font-mono bg-slate-950 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-slate-500 font-mono bg-slate-950 px-2 py-0.5 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  View Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Skills Highlights */}
      <section className="px-6 lg:px-8 py-20 max-w-7xl mx-auto border-t border-slate-900">
        <div className="grid gap-12 lg:grid-cols-3 items-start">
          <div className="text-left lg:col-span-1">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Abilities</h2>
            <p className="mt-3 font-display text-3xl font-extrabold text-white">
              Skills & Toolset
            </p>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Equipped with a solid background in digital infrastructure academic workflows combined with practical engineering experience.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              {skills.soft.map((softSkill, i) => (
                <div key={i} className="flex items-start gap-2.5 text-slate-400 text-xs">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{softSkill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2 text-left">
            {skills.technical.slice(0, 4).map((techGroup) => (
              <div key={techGroup.category} className="glass-panel border border-slate-800/40 p-6 rounded-2xl">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                  {techGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-slate-300 bg-slate-900 border border-slate-800/80 px-3 py-1 rounded-lg hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
