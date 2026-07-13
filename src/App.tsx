import { useEffect, useState, type ElementType } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  GraduationCap,
  Mail,
  Menu,
  Palette,
  Trophy,
  X,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type IconComponent = ElementType<{ size?: number | string; className?: string }>;

type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  screens?: string[];
  teamImages?: string[];
  href?: string;
  linkLabel?: string;
  summary: string;
  contribution: string;
  stack: string[];
  caseStudy: {
    problem: string;
    role: string;
    features: string[];
    outcome: string;
    learning: string;
  };
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const strengths: { icon: IconComponent; title: string; text: string }[] = [
  {
    icon: Cloud,
    title: 'Cloud foundations',
    text: 'AWS, Huawei Cloud and practical DevOps foundations.',
  },
  {
    icon: Code2,
    title: 'Product development',
    text: 'Responsive products built with React and TypeScript.',
  },
  {
    icon: Palette,
    title: 'Human-centred thinking',
    text: 'Clear interfaces shaped around real people and needs.',
  },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'AeroPlant',
    category: 'Startup idea · Mobile prototype',
    image: '/assets/aeroplant/IMG_8585.PNG',
    screens: [
      '/assets/aeroplant/IMG_8585.PNG',
      '/assets/aeroplant/IMG_8586.PNG',
      '/assets/aeroplant/IMG_8588.PNG',
    ],
    teamImages: [
      '/assets/aeroplant/team.jpg',
      '/assets/aeroplant/team1.jpg',
    ],
    href: 'https://github.com/sornsomavatey/AeroPlant',
    linkLabel: 'View GitHub repository',
    summary:
      'A marketplace connecting aeroponic growers with restaurant buyers.',
    contribution:
      'Designed the mobile flow from crop discovery and pre-orders to delivery tracking.',
    stack: ['Startup Concept', 'Mobile Prototype', 'Marketplace UX', 'Product Design'],
    caseStudy: {
      problem:
        'Small aeroponic growers need a clearer way to reach restaurant buyers, while restaurants need trusted crop availability before ordering.',
      role:
        'I shaped the product flow, designed the buyer and grower experience, and helped present the startup concept during the hackathon.',
      features: [
        'Crop discovery with availability and grower details',
        'Pre-order flow for restaurant buyers',
        'Delivery tracking concept for active orders',
      ],
      outcome:
        'The prototype turned a raw marketplace idea into a clear mobile experience that could be tested with growers and buyers.',
      learning:
        'I learned how much product clarity matters before code, especially when two user groups need to trust the same system.',
    },
  },
  {
    number: '02',
    title: 'One More Restaurant',
    category: 'Full-stack web development',
    image: '/assets/omr.png',
    href: 'https://www.onemorerestaurant.com/',
    linkLabel: 'Visit live website',
    summary:
      'A responsive restaurant platform developed from early prototypes.',
    contribution:
      'Designed in Figma and built reusable React components.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    caseStudy: {
      problem:
        'The restaurant needed a responsive public website that felt polished and made the menu, brand, and visitor actions easy to access.',
      role:
        'I worked from Figma designs into reusable frontend components and helped keep pages consistent across screen sizes.',
      features: [
        'Responsive page layouts for restaurant content',
        'Reusable React components for repeated UI patterns',
        'Clean visual hierarchy for visitors browsing on mobile',
      ],
      outcome:
        'The site became a live restaurant platform with a more complete and consistent user experience.',
      learning:
        'I strengthened my React and TypeScript workflow while learning how small UI decisions affect a real business website.',
    },
  },
  {
    number: '03',
    title: 'Samanea Wellness Resort',
    category: 'Hospitality web development',
    image: '/assets/samanea.png',
    href: 'https://www.samanea-wellnessresort.com/',
    linkLabel: 'Visit live website',
    summary:
      'A website for Cambodia’s first mountain wellness sanctuary.',
    contribution:
      'Built responsive, consistent pages across the resort experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    caseStudy: {
      problem:
        'The resort needed a calm hospitality website that could introduce the place, services, and atmosphere across devices.',
      role:
        'I built responsive pages and refined layout details so the experience stayed consistent from desktop to mobile.',
      features: [
        'Hospitality-focused page structure',
        'Responsive content sections',
        'Visual presentation for resort information',
      ],
      outcome:
        'The website gives visitors a clearer first impression of the resort and its wellness positioning.',
      learning:
        'I learned to balance imagery, spacing, and content density for a hospitality audience.',
    },
  },
  {
    number: '04',
    title: 'Smart IoT Parking',
    category: 'Connected systems',
    image: '/assets/iot-parking.png',
    href: 'https://www.facebook.com/share/v/1BbHsQuoUj/',
    linkLabel: 'Watch project demo',
    summary:
      'An automated parking system with live slot and gate monitoring.',
    contribution:
      'Connected ESP32 sensors, fee logic, alerts and a web dashboard.',
    stack: ['ESP32', 'MicroPython', 'Telegram Bot', 'Blynk'],
    caseStudy: {
      problem:
        'Parking areas need faster slot visibility and simpler gate monitoring without relying fully on manual checking.',
      role:
        'I connected ESP32 sensors, built the fee logic, and integrated alert and monitoring tools.',
      features: [
        'Live slot monitoring through sensors',
        'Automated gate and fee logic',
        'Telegram and Blynk updates for system status',
      ],
      outcome:
        'The prototype showed how low-cost hardware and simple dashboards can make parking operations easier to follow.',
      learning:
        'I learned how hardware reliability, network timing, and user feedback all matter in connected systems.',
    },
  },
  {
    number: '05',
    title: 'SnapBooth',
    category: 'Computer vision & IoT',
    image: '/assets/snapbooth.png',
    summary:
      'A gesture-controlled photo booth with instant photo delivery.',
    contribution:
      'Integrated ESP32-CAM, MediaPipe, Flask and Telegram.',
    stack: ['ESP32-CAM', 'MediaPipe', 'OpenCV', 'Flask'],
    caseStudy: {
      problem:
        'Photo booths usually need physical controls, which can be awkward for events or shared public setups.',
      role:
        'I helped combine camera hardware, gesture recognition, backend handling, and Telegram delivery.',
      features: [
        'Gesture-controlled capture flow',
        'Computer vision recognition with MediaPipe and OpenCV',
        'Photo delivery through a Telegram bot',
      ],
      outcome:
        'The project created a hands-free photo booth concept that felt playful while combining IoT and computer vision.',
      learning:
        'I learned how to connect physical devices with software services in a way that feels immediate to users.',
    },
  },
];

const otherWork = [
  ['Invoxia', 'Product interface concept', 'Figma · UX/UI'],
  ['Komi', 'Web interface design', 'Responsive UI · Frontend'],
];

const experiences = [
  {
    period: 'May—Aug 2026',
    icon: BriefcaseBusiness,
    role: 'Application Developer Intern',
    organization: 'One Fraternity Co. Ltd',
    detail: 'Designed and built features for a restaurant product.',
  },
  {
    period: '2025—2026',
    icon: Trophy,
    featured: true,
    role: 'Huawei ICT Competition · Cloud Track',
    organization: 'Regional Finalist · Cambodia',
    detail: 'Represented Cambodia at the Regional Final in Jakarta.',
  },
  {
    period: 'Dec 2025—Feb 2026',
    icon: Code2,
    role: 'Junior Frontend Developer Intern',
    organization: 'TechFlow',
    detail: 'Built and tested responsive Webflow sites.',
  },
  {
    period: 'May—Aug 2025',
    icon: Palette,
    role: 'Web Development & UX/UI',
    organization: 'Sister of Code',
    detail: 'Created portfolio prototypes and finished as a top-five student.',
  },
  {
    period: '2024',
    icon: GraduationCap,
    role: 'AWS Cloud Practitioner Foundation',
    organization: 'Cloud4Cambodia',
    detail: 'Built practical foundations across core AWS services.',
  },
];

const stack = [
  ['Cloud & DevOps', 'AWS, Huawei Cloud, Docker, Terraform, Jenkins, GitHub'],
  ['Development', 'React, TypeScript, JavaScript, Node.js, Express, ASP.NET Core'],
  ['Data & systems', 'MongoDB, MySQL, ESP32, MicroPython, Power BI'],
  ['Design & delivery', 'Figma, Framer, Webflow, Jira, Notion, Canva'],
];

const highlights = [
  'Huawei ICT Competition Regional Finalist',
  'Full Scholarship · Digital Infrastructure at AUPP',
  'Top 5 Outstanding Student · Sister of Code',
  'National BAC II Exam · Grade A',
];

const contacts = [
  { icon: Mail, label: 'Email', href: 'mailto:somavateysorn@gmail.com' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/sornsomavatey' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.16, rootMargin: '-6% 0px -10% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('keydown', closeMenu);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeMenu);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const closeModal = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeModal);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeModal);
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen overflow-hidden text-ink">
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
        <nav className="main-navigation page-width h-20">
          <a href="#home" className="site-logo font-editorial text-3xl font-bold tracking-tight" aria-label="Home">
            Somavatey<span className="text-rust">.</span>
          </a>

          <div className="desktop-navigation hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="icon-button md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={20} className="menu-icon menu-icon--open" />
            <X size={20} className="menu-icon menu-icon--close" />
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className={`mobile-menu md:hidden ${menuOpen ? 'mobile-menu--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:somavateysorn@gmail.com"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            Let&apos;s talk <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="page-width hero-grid min-h-screen items-center pt-24">
          <div className="hero-copy py-16 lg:py-24">
            <h1 className="hero-title font-editorial max-w-4xl font-semibold reveal-on-scroll reveal-rise">
              Building useful things across <em className="font-normal text-rust">cloud</em> &amp; web.
            </h1>
            <div className="eyebrow reveal-on-scroll reveal-rise reveal-delay-1">
              <span className="status-dot" /> Digital Infrastructure student · Phnom Penh
            </div>
            <p className="hero-description max-w-xl text-lg leading-8 text-muted reveal-on-scroll reveal-rise reveal-delay-2">
              I build practical experiences across cloud, web and connected devices.
            </p>
            <div className="hero-actions mt-9 flex flex-wrap items-center gap-4 reveal-on-scroll reveal-rise reveal-delay-3">
              <a href="#work" className="button">
                View my work <ArrowDown size={17} />
              </a>
              <a href="mailto:somavateysorn@gmail.com" className="text-link">
                Email me <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="hero-portrait-wrap reveal-on-scroll reveal-from-right reveal-delay-2">
            <div className="hero-portrait">
              <img src="/assets/profile.jpg" alt="Somavatey Sorn" />
            </div>
            <p className="portrait-note font-editorial">Curious by nature.<br />Practical by choice.</p>
          </div>
        </section>

        <section id="about" className="section page-width about-section">
          <div className="section-rule reveal-on-scroll reveal-fade" />
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div className="reveal-on-scroll reveal-from-left">
              <p className="section-label">01 · About</p>
              <h2 className="section-title">Cloud, code and people.</h2>
            </div>
            <div>
              <p className="lead-copy reveal-on-scroll reveal-from-right reveal-delay-1">
                I&apos;m a Digital Infrastructure student at AUPP, interested in cloud systems and thoughtful digital products. I learn best by building.
              </p>
              <div className="strength-list">
                {strengths.map(({ icon: Icon, title, text }, index) => (
                  <div key={title} className={`strength-row reveal-on-scroll reveal-rise reveal-delay-${index + 3}`}>
                    <Icon size={21} className="mt-1 text-rust" />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section page-width">
          <div className="section-rule reveal-on-scroll reveal-fade" />
          <div className="section-heading reveal-on-scroll reveal-rise reveal-delay-1">
            <div>
              <p className="section-label">02 · Selected work</p>
              <h2 className="section-title max-w-2xl">Projects</h2>
            </div>
          </div>

          <div className="mt-16 space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <article key={project.title} className={`project-row ${index % 2 ? 'project-row--reverse' : ''}`}>
                <div
                  className={`project-image reveal-on-scroll ${
                    index % 2 ? 'reveal-from-right' : 'reveal-from-left'
                  } ${project.screens ? 'project-prototype' : ''}`}
                >
                  {project.screens ? (
                    <div className="prototype-screens" aria-label={`${project.title} mobile prototype screens`}>
                      {project.screens.map((screen, screenIndex) => (
                        <div className="prototype-screen" key={screen}>
                          <img
                            src={screen}
                            alt={`${project.title} prototype screen ${screenIndex + 1}`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  )}
                  <span>{project.number}</span>
                </div>
                <div className={`project-copy reveal-on-scroll ${index % 2 ? 'reveal-from-left' : 'reveal-from-right'} reveal-delay-1`}>
                  <p className="section-label">{project.category}</p>
                  <h3 className="font-editorial mt-3 text-5xl font-semibold leading-none md:text-6xl">{project.title}</h3>
                  <p className="mt-6 text-xl leading-8 text-ink/90">{project.summary}</p>
                  <div className="mt-7 border-l-2 border-rust pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">My contribution</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{project.contribution}</p>
                  </div>
                  {project.teamImages && (
                    <figure className="project-team">
                      <div className="project-team-gallery">
                        {project.teamImages.map((image, index) => (
                          <img
                            key={image}
                            src={image}
                            alt={index === 0
                              ? 'AeroPlant startup team with their mentor'
                              : 'AeroPlant team at Turing Hackathon Demo Day'}
                            loading="lazy"
                          />
                        ))}
                      </div>
                      <figcaption>
                        <strong>Built with my team</strong>
                        <span>Product, design and technical collaboration.</span>
                      </figcaption>
                    </figure>
                  )}
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {project.stack.join('  ·  ')}
                  </p>
                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-link project-link--button"
                      onClick={() => setSelectedProject(project)}
                    >
                      View case study <ArrowUpRight size={15} />
                    </button>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        {project.linkLabel ?? 'View project'} <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-28 border-t border-line pt-8 reveal-on-scroll reveal-rise">
            <p className="section-label mb-3">More experiments</p>
            {otherWork.map(([name, type, tools]) => (
              <div key={name} className="other-work-row reveal-on-scroll reveal-rise reveal-delay-1">
                <h3 className="font-editorial text-3xl font-semibold">{name}</h3>
                <p>{type}</p>
                <p>{tools}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="section bg-wash">
          <div className="page-width">
            <div>
              <div className="journey-heading reveal-on-scroll reveal-rise">
                <div>
                  <p className="section-label">03 · Journey</p>
                  <h2 className="section-title">Learning by doing.</h2>
                </div>
                <p className="max-w-md leading-7 text-muted">
                  Learning through internships, competitions and hands-on work.
                </p>
              </div>
              <div className="timeline">
                {experiences.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={`${item.period}-${item.role}`}
                      className={`timeline-item reveal-on-scroll reveal-rise reveal-delay-${Math.min(index + 1, 5)} ${item.featured ? 'timeline-item--featured' : ''}`}
                    >
                      <div className="timeline-topline">
                        <span className="timeline-icon"><Icon size={18} /></span>
                        <span className="timeline-number">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="timeline-period">{item.period}</p>
                      <div className="timeline-copy">
                        <h3>{item.role}</h3>
                        <p className="mt-1 text-sm font-semibold text-rust">{item.organization}</p>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{item.detail}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="jakarta-story">
              <div className="jakarta-intro reveal-on-scroll reveal-rise">
                <div>
                  <p className="section-label">Jakarta · Indonesia</p>
                  <h3 className="font-editorial mt-3 text-4xl font-semibold leading-none md:text-5xl">
                    From Cambodia to the APAC Regional Final.
                  </h3>
                </div>
                <p>
                  The Regional Final turned cloud learning into an international team experience.
                </p>
              </div>

              <div className="journey-gallery">
                <figure className="journey-photo journey-photo--feature reveal-on-scroll reveal-from-left">
                  <img
                    src="/assets/huawei-journey/regional-origin.png"
                    alt="Cambodia Cloud Track participants after taking the Huawei ICT Competition Regional Final exam"
                    loading="lazy"
                  />
                  <figcaption>Regional Final exam · Cambodia</figcaption>
                </figure>

                <figure className="journey-photo journey-photo--side reveal-on-scroll reveal-from-right reveal-delay-1">
                  <img
                    src="/assets/huawei-journey/photo_2_2026-06-29_10-42-17.jpg"
                    alt="Somavatey at the ASEAN headquarters in Jakarta"
                    loading="lazy"
                  />
                  <figcaption>A visit to ASEAN headquarters</figcaption>
                </figure>

                <figure className="journey-photo journey-photo--third reveal-on-scroll reveal-rise reveal-delay-2">
                  <img
                    src="/assets/huawei-journey/photo_5_2026-06-29_10-42-17.jpg"
                    alt="Cambodian delegation at the Huawei ICT Competition APAC Regional Final"
                    loading="lazy"
                  />
                  <figcaption>Cambodia delegation · APAC Regional Final</figcaption>
                </figure>

                <figure className="journey-photo journey-photo--third reveal-on-scroll reveal-rise reveal-delay-3">
                  <img
                    src="/assets/huawei-journey/photo_4_2026-06-29_10-42-17.jpg"
                    alt="Cambodia Cloud Track team at the Huawei ICT Competition"
                    loading="lazy"
                  />
                  <figcaption>Cloud Track team · Cambodia</figcaption>
                </figure>

                <figure className="journey-photo journey-photo--third reveal-on-scroll reveal-rise reveal-delay-4">
                  <img
                    src="/assets/huawei-journey/photo_6_2026-06-29_10-42-17.jpg"
                    alt="Cloud Track team and mentor at the regional final"
                    loading="lazy"
                  />
                  <figcaption>Regional final with our team and mentor</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section page-width">
          <div className="section-rule reveal-on-scroll reveal-fade" />
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="reveal-on-scroll reveal-from-left">
              <p className="section-label">Toolbox</p>
              <h2 className="section-title">What I work with.</h2>
              <div className="mt-10 divide-y divide-line border-t border-line">
                {stack.map(([title, items], index) => (
                  <div key={title} className={`stack-row reveal-on-scroll reveal-rise reveal-delay-${index + 1}`}>
                    <h3>{title}</h3>
                    <p>{items}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-on-scroll reveal-from-right reveal-delay-1">
              <p className="section-label">Selected recognition</p>
              <h2 className="section-title">A little proof of momentum.</h2>
              <div className="mt-10 space-y-5">
                {highlights.map((highlight, index) => (
                  <div key={highlight} className={`highlight-row reveal-on-scroll reveal-rise reveal-delay-${index + 2}`}>
                    <span><Check size={15} /></span>
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-7 text-muted">
                Graduating May 2027 · Digital Infrastructure
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="page-width grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="reveal-on-scroll reveal-from-left">
              <p className="section-label">04 · Contact</p>
              <h2 className="contact-title font-editorial mt-5 max-w-4xl font-semibold text-white">
                Have a useful idea? I&apos;d love to hear it.
              </h2>
            </div>
            <div className="reveal-on-scroll reveal-from-right reveal-delay-1">
              <p className="mb-8 leading-7 text-white/65">
                Open to internships and thoughtful collaborations.
              </p>
              <div className="flex flex-wrap gap-3">
                {contacts.map(({ icon: Icon, label, href }, index) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className={`contact-link reveal-on-scroll reveal-rise reveal-delay-${index + 2}`}
                  >
                    <Icon size={17} /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="case-modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedProject(null)}
        >
          <section
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="case-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study"
            >
              <X size={18} />
            </button>

            <div className="case-modal-content">
              <p className="section-label">{selectedProject.category}</p>
              <h2 id="case-modal-title" className="case-modal-title font-editorial">
                {selectedProject.title}
              </h2>
              <p className="case-modal-summary">{selectedProject.summary}</p>

              <div className="case-modal-media">
                {selectedProject.screens ? (
                  <div className="prototype-screens" aria-label={`${selectedProject.title} case study screens`}>
                    {selectedProject.screens.map((screen, screenIndex) => (
                      <div className="prototype-screen" key={screen}>
                        <img
                          src={screen}
                          alt={`${selectedProject.title} case study screen ${screenIndex + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img src={selectedProject.image} alt={`${selectedProject.title} project preview`} />
                )}
              </div>

              <div className="case-detail-grid">
                <div>
                  <p className="case-detail-label">Problem</p>
                  <p>{selectedProject.caseStudy.problem}</p>
                </div>
                <div>
                  <p className="case-detail-label">My role</p>
                  <p>{selectedProject.caseStudy.role}</p>
                </div>
              </div>

              <div className="case-feature-block">
                <p className="case-detail-label">Key features</p>
                <ul>
                  {selectedProject.caseStudy.features.map((feature) => (
                    <li key={feature}>
                      <Check size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-detail-grid">
                <div>
                  <p className="case-detail-label">Outcome</p>
                  <p>{selectedProject.caseStudy.outcome}</p>
                </div>
                <div>
                  <p className="case-detail-label">What I learned</p>
                  <p>{selectedProject.caseStudy.learning}</p>
                </div>
              </div>

              <div className="case-stack">
                {selectedProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      <footer className="bg-ink px-5 py-7 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
        © {new Date().getFullYear()} Somavatey Sorn · Designed with focus
      </footer>
    </div>
  );
}
