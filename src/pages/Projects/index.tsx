import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, ShieldCheck, Cpu, LayoutGrid } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  // Categories
  const categories = ['All', 'Cloud & DevOps', 'Web Development', 'UX/UI & Web', 'IoT & Web'];

  // Filter projects
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase().split(' ')[0]));

  return (
    <section className="px-6 py-16 lg:px-8 text-left relative overflow-hidden">
      <div className="glow-spot-emerald -top-20 -left-20 animate-pulse" />
      <div className="glow-spot-blue bottom-10 right-10" />

      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="border-b border-slate-800 pb-8 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Selected Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 text-base text-slate-400 max-w-3xl leading-relaxed">
            A showcase of application development, cloud infrastructure setups, and UX/UI research prototypes. You can easily add more repositories to this list by editing the database configurations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'bg-emerald-500 border-emerald-500 text-slate-950 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800/80 bg-slate-950/20 text-slate-400 hover:border-slate-700 hover:text-slate-250'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Category Illustration */}
                  <div className="h-44 rounded-xl mb-6 bg-gradient-to-br from-slate-900 via-[#0a1122] to-slate-950 flex items-center justify-center border border-slate-850 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-40 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Choose icon or img based on image type */}
                    {project.image.includes('.') ? (
                      <img
                        src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        {project.image === 'restaurant' && (
                          <Code size={52} className="text-emerald-500/40 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {project.image === 'compliance' && (
                          <ShieldCheck size={52} className="text-teal-500/40 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {project.image === 'aeroplant' && (
                          <Cpu size={52} className="text-blue-500/40 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {project.image === 'portfolio' && (
                          <LayoutGrid size={52} className="text-purple-500/40 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </>
                    )}
                  </div>

                  <span className="inline-block text-[10px] font-bold text-emerald-450 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mb-3">
                    {project.category}
                  </span>

                  <h2 className="text-xl font-bold font-display text-white hover:text-emerald-400 transition-colors">
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed min-h-[50px]">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] text-slate-500 font-mono bg-slate-950 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] text-slate-550 font-mono bg-slate-950 px-2 py-0.5 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-emerald-400 transition-colors"
                        title="View Github Code"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                    >
                      Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl text-slate-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
