import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export default function ProjectDetails() {
  const { slug } = useParams();

  // Find matching project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-md">
          <h2 className="text-3xl font-extrabold text-white font-display">Project Not Found</h2>
          <p className="mt-4 text-slate-400">The project slug you requested does not exist or has been modified.</p>
          <Link
            to="/projects"
            className="mt-8 inline-block rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  // Generate mock details for role, challenges, results based on the project type to make it feel premium
  const getMockCaseStudy = () => {
    switch (project.slug) {
      case 'one-more-restaurant':
        return {
          role: 'Full-Stack Developer Intern. Responsible for designing Figma wireframes, translating layouts into React elements, configuring Tailwind styles, implementing state machines, and coding responsive frontend behaviors.',
          challenges: 'Optimizing high-resolution image uploads for menu items and coordinating real-time seat reservation availability to prevent double bookings.',
          solutions: 'Leveraged modern React state contexts and optimized asset rendering speeds by implementing responsive WebP compression templates, alongside setting up API endpoints on a Node.js/Express backend.',
          results: 'Delivered a fully responsive high-performance prototype with interactive reservation capabilities and smooth menu filters, which is scheduled for launch in late June 2026.'
        };
      case 'pet-care-system':
        return {
          role: 'Lead Backend & DevOps Developer. Designed modular microservices in Node.js/Express, structured NoSQL databases using Mongoose and MongoDB Compass, secure user/admin logins via JWT authentication and Bcrypt hashing, containerized workloads in Docker, and set up orchestration pods in Kubernetes (Minikube).',
          challenges: 'Managing cross-service communication, preventing unauthorized updates to booking logs, and deploying multi-service components inside a locally resource-constrained container environment.',
          solutions: 'Developed clean Express router middlewares to intercept and parse JWT tokens, isolated microservice databases, packaged services into Docker containers, and orchestrated them using Minikube Kubernetes configurations tested via Postman API endpoints.',
          results: 'Delivered a fully scalable, modular pet daycare booking platform with secure, robust role access rules and digitized automated logs.'
        };
      case 'zoroscope':
        return {
          role: 'Full-Stack Developer. Developed the birthday-to-zodiac mapping algorithms, server-side routes in Python Flask, custom color recommendations, session-based user authentication using secure password hashing, and integrated the MongoDB database schema via Mongoose.',
          challenges: 'Creating dynamic zodiac calculations, preventing cleartext password leakage, and configuring the rule-based elemental matching logic for zodiac compatibility values.',
          solutions: 'Wrote robust backend validation logic in Python, implemented secure password encryption algorithms, established MongoDB Compass document schemas, and tested endpoints thoroughly with Postman.',
          results: 'Deployed a fully integrated, live astrology portal on Render featuring customized daily horoscopes and visual compatibility reports praised by peer testers.'
        };
      case 'artory':
        return {
          role: 'Frontend Web Developer & UX Specialist. Built modular components for the artwork grid, styled the galleries and layouts using custom CSS, integrated responsive user interfaces, and configured hosting workflows.',
          challenges: 'Creating an uncluttered, premium gallery view that displays artwork beautifully across various screen dimensions, and managing optimized loading speeds for high-resolution images.',
          solutions: 'Constructed custom CSS styling templates, created interactive hover triggers for painting detail reveals, and connected automated deployment integrations.',
          results: 'Delivered a production-ready web platform hosting 140+ active deployment checks, enabling artists to display and showcase work efficiently to collectors.'
        };
      default:
        return {
          role: 'UX/UI Designer & Front-End Developer. Managed user flow testing, wireframing, custom CSS layouts, and cross-device testing.',
          challenges: 'Assuring absolute cross-device display parity and smooth interactive flow behaviors without relying on heavy third-party UI libraries.',
          solutions: 'Conducted rigorous browser QA tests and wrote custom CSS layouts alongside vanilla javascript event handlers to drive navigation menus.',
          results: 'Finished a high-fidelity fully responsive web portfolio template praised for its clean visual aesthetics during the Sister of Code review.'
        };
    }
  };

  const caseStudy = getMockCaseStudy();

  return (
    <section className="px-6 py-16 lg:px-8 text-left relative overflow-hidden">
      <div className="glow-spot-emerald -top-20 -left-20" />
      
      <div className="mx-auto max-w-4xl">
        {/* Navigation Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-450 hover:text-emerald-300 transition-colors"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        {/* Project Header Banner */}
        <div className="mt-8 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-emerald-400 font-bold uppercase tracking-wider mb-3">
            <span>{project.category}</span>
            <span>·</span>
            <span>Featured Project</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-display">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate-350 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project URLs */}
            <div className="flex gap-4">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg> Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-450 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Case Study Template Content */}
        <div className="mt-12 space-y-12">
          {/* Section 1: Overview */}
          <div>
            <h2 className="text-xl font-bold font-display text-white mb-4">Project Overview</h2>
            <p className="text-slate-350 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Section 2: Role & Responsibilities */}
          <div className="bg-slate-950/20 border border-slate-800/40 rounded-2xl p-6">
            <h2 className="text-xl font-bold font-display text-white mb-4">My Role & Responsibilities</h2>
            <p className="text-slate-350 text-sm leading-relaxed">
              {caseStudy.role}
            </p>
          </div>

          {/* Section 3: Challenges & Solutions */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-slate-800/40 bg-slate-950/20 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-red-400 font-display mb-3">The Challenges</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {caseStudy.challenges}
              </p>
            </div>
            <div className="border border-slate-800/40 bg-slate-950/20 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-emerald-400 font-display mb-3">Our Solutions</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {caseStudy.solutions}
              </p>
            </div>
          </div>

          {/* Section 4: Results & Takeaways */}
          <div>
            <h2 className="text-xl font-bold font-display text-white mb-4">Results & Key Takeaways</h2>
            <div className="flex gap-4 items-start">
              <div className="p-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                <CheckCircle size={18} />
              </div>
              <p className="text-slate-350 text-sm leading-relaxed">
                {caseStudy.results}
              </p>
            </div>
          </div>
        </div>

        {/* Info Box to edit */}
        <div className="mt-16 bg-emerald-950/10 border border-emerald-500/10 rounded-2xl p-6 text-center">
          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Notice for Somavatey</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
            You can customize the texts, descriptions, and Github repositories for this case study. Simply modify the database configurations directly inside <code className="text-emerald-400">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
