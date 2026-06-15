import { useState } from 'react';
import { Briefcase, GraduationCap, Award, AwardIcon, CheckCircle2, Bookmark, Flame, Heart, Sparkles, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { personalInfo, experiences, educationList, achievements, certificates, volunteerExperiences, extraCurriculars } from '../../data/portfolioData';

type TabType = 'timeline' | 'credentials' | 'volunteer';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('timeline');
  const [certFilter, setCertFilter] = useState<string>('All');

  // Filter certificates
  const filteredCerts = certFilter === 'All'
    ? certificates
    : certificates.filter(c => c.category === certFilter);

  // Certificate categories
  const certCategories = ['All', 'Cloud', 'Web', 'Leadership', 'Language'];

  return (
    <div className="w-full py-16 px-6 lg:px-8 animate-fade-in text-left">
      <div className="mx-auto max-w-7xl">
        {/* Profile Intro header */}
        <div className="relative border-b border-slate-800 pb-10 mb-12">
          <div className="glow-spot-emerald -top-20 -left-20" />
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            About Me
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-white md:text-6xl">
            Somavatey Sorn
          </h1>
          <p className="mt-2 text-lg text-emerald-400 font-display">
            Cloud Enthusiast & Application Developer
          </p>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-350">
            {personalInfo.summary}
          </p>
        </div>

        {/* Dynamic Tab Switcher */}
        <div className="flex border-b border-slate-800/80 mb-10 overflow-x-auto gap-2 sm:gap-6 scrollbar-none">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-4 py-3 font-display font-semibold text-sm transition-all duration-300 border-b-2 shrink-0 ${
              activeTab === 'timeline'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase size={16} />
            Professional Journey & Education
          </button>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`flex items-center gap-2 px-4 py-3 font-display font-semibold text-sm transition-all duration-300 border-b-2 shrink-0 ${
              activeTab === 'credentials'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award size={16} />
            Certifications & Achievements
          </button>
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`flex items-center gap-2 px-4 py-3 font-display font-semibold text-sm transition-all duration-300 border-b-2 shrink-0 ${
              activeTab === 'volunteer'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart size={16} />
            Volunteer & Clubs
          </button>
        </div>

        {/* Tab content area */}
        <div>
          {/* TAB 1: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Experience Column */}
              <div>
                <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white mb-8">
                  <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    <Briefcase size={18} />
                  </span>
                  Work Experience
                </h2>

                <div className="relative pl-6 border-l-2 border-slate-800/80 space-y-10">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="relative group text-left">
                      {/* Custom timeline bullet */}
                      <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 bg-slate-900 border-2 border-emerald-400 rounded-full group-hover:bg-emerald-400 transition-colors" />

                      <div className="bg-slate-950/20 border border-slate-800/40 p-6 rounded-2xl group-hover:border-emerald-500/20 transition-all duration-300">
                        <span className="inline-block text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mb-3">
                          {exp.type}
                        </span>

                        <h3 className="text-lg font-bold text-white font-display">
                          {exp.role}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                          <span className="font-medium text-slate-350">{exp.company}</span>
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <MapPin size={12} /> {exp.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <Calendar size={12} /> {exp.duration}
                          </span>
                        </div>

                        <ul className="mt-4 space-y-2 list-none">
                          {exp.description.map((bullet, idx) => (
                            <li key={idx} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                              <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white mb-8">
                  <span className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                    <GraduationCap size={18} />
                  </span>
                  Education
                </h2>

                <div className="relative pl-6 border-l-2 border-slate-800/80 space-y-10">
                  {educationList.map((edu) => (
                    <div key={edu.id} className="relative group text-left">
                      {/* Custom timeline bullet */}
                      <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 bg-slate-900 border-2 border-blue-400 rounded-full group-hover:bg-blue-400 transition-colors" />

                      <div className="bg-slate-950/20 border border-slate-800/40 p-6 rounded-2xl group-hover:border-blue-500/20 transition-all duration-300">
                        <h3 className="text-lg font-bold text-white font-display">
                          {edu.institution}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                          <span className="font-medium text-blue-400">{edu.degree}</span>
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <Calendar size={12} /> {edu.duration}
                          </span>
                        </div>

                        {edu.details && (
                          <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                            {edu.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CREDENTIALS */}
          {activeTab === 'credentials' && (
            <div className="grid gap-12 lg:grid-cols-3 items-start">
              {/* Achievements left (1 col) */}
              <div className="lg:col-span-1">
                <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white mb-8">
                  <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    <AwardIcon size={18} />
                  </span>
                  Key Achievements
                </h2>

                <div className="space-y-4">
                  {achievements.map((ach) => (
                    <div key={ach.id} className="glass-panel border-slate-850 p-5 rounded-xl text-left flex gap-3.5 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
                      <Flame size={20} className="text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-semibold text-slate-200 leading-relaxed">
                        {ach.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications right (2 cols) */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white">
                    <span className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                      <Bookmark size={18} />
                    </span>
                    Certifications
                  </h2>

                  {/* Cert filter category bar */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-950/40 border border-slate-800 p-1 rounded-lg">
                    {certCategories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setCertFilter(cat)}
                        className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                          certFilter === cat
                            ? 'bg-emerald-500 text-slate-950'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {filteredCerts.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {filteredCerts.map((cert) => (
                      <div
                        key={cert.id}
                        className="glass-panel border-slate-800/40 p-5 rounded-xl text-left flex flex-col justify-between hover:border-emerald-500/30 transition-all"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                              {cert.category}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                          </div>
                          <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[11px] text-slate-400">
                          <span>{cert.issuer}</span>
                          <span className="text-emerald-400 flex items-center gap-0.5 text-[10px] font-semibold hover:underline cursor-pointer">
                            Verified <ExternalLink size={10} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border border-dashed border-slate-800 rounded-2xl text-slate-500 text-sm">
                    No certifications found in this category.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: VOLUNTEER & CLUBS */}
          {activeTab === 'volunteer' && (
            <div className="space-y-12">
              {/* Extra Curricular Spotlight */}
              <div>
                <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white mb-6">
                  <span className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg">
                    <Sparkles size={18} />
                  </span>
                  Extracurricular Activities & Hobbies
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 text-left">
                  {extraCurriculars.map((activity, idx) => (
                    <div key={idx} className="glass-panel border-slate-850 p-6 rounded-2xl flex items-center gap-4 hover:border-purple-500/20 transition-all duration-300">
                      <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
                        <Flame size={20} />
                      </div>
                      <p className="text-sm font-bold text-white font-display">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteer Experiences timeline/list */}
              <div>
                <h2 className="flex items-center gap-2.5 text-xl font-bold font-display text-white mb-6">
                  <span className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                    <Heart size={18} />
                  </span>
                  Volunteer Services
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {volunteerExperiences.map((vol) => (
                    <div
                      key={vol.id}
                      className="glass-panel border-slate-800/40 p-5 rounded-2xl text-left flex flex-col justify-between hover:border-emerald-500/10 transition-all duration-300"
                    >
                      <div>
                        <span className="text-[10px] text-slate-550 font-mono flex items-center gap-1 mb-2.5">
                          <Calendar size={10} /> {vol.date}
                        </span>
                        <h3 className="text-sm font-bold text-slate-100 font-display leading-snug">
                          {vol.role}
                        </h3>
                        <p className="mt-2 text-xs text-slate-400">
                          {vol.organization}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
