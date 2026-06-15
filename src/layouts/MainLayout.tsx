import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/40 bg-[#0b0f19]/75 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <NavLink to="/" className="text-2xl font-bold tracking-tight font-display hover:opacity-90 transition-opacity">
            {personalInfo.name.split(' ')[0]}
            <span className="text-emerald-400">.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-slate-300 hover:text-emerald-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="rounded-full bg-emerald-600/10 border border-emerald-500/30 px-5 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              Hire Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0f19]/90 backdrop-blur-lg md:hidden animate-fade-in">
          <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold tracking-tight font-display transition-colors py-2 ${
                      isActive ? 'text-emerald-400' : 'text-slate-100 hover:text-emerald-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Quick Mobile Contact Details */}
            <div className="border-t border-slate-800/80 pt-8 flex flex-col gap-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail size={18} />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex gap-4 mt-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-full hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-full hover:text-emerald-400 transition-colors" aria-label="GitHub">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer Area */}
      <footer className="border-t border-slate-900 bg-[#070a12] px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold font-display tracking-wide">
              {personalInfo.name}
              <span className="text-emerald-400">.</span>
            </span>
            <p className="mt-1 text-sm text-slate-500">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-slate-900 border border-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 border border-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 flex items-center justify-center"
              title="LinkedIn Profile"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 border border-slate-800/60 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 flex items-center justify-center"
              title="GitHub Profile"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.<br />
            Built with React, TypeScript, and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
