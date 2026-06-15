// src/data/portfolioData.ts

import type { Project, Experience, Education, Achievement, Certificate, VolunteerExperience } from '../types';

export const personalInfo = {
  name: 'Somavatey Sorn',
  title: 'Cloud Enthusiast & Web Developer',
  email: 'somavateysorn@gmail.com',
  phone: '+855 70 358 567',
  location: 'SenSok, Phnom Penh, Cambodia',
  linkedin: 'https://linkedin.com/in/somavatey-sorn',
  github: 'https://github.com/somavateysorn', // Placeholder
  summary:
    'Cloud and web development enthusiast pursuing a degree in Digital Infrastructure. Experienced in hands-on projects across cloud platforms, including AWS and Huawei Cloud, as well as CI/CD workflows, containerization, and frontend development. Skilled in WebFlow, UX/UI design, and responsive web development, with problem-solving and adaptability honed through internships, academic projects, and volunteering. Passionate about continuous learning and applying technology to build practical, real-world solutions.',
};

export const skills = {
  technical: [
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Terraform', 'Kubernetes', 'Cloudflare'] },
    { category: 'CI/CD & Tools', items: ['Jenkins', 'GitHub Actions', 'SonarQube', 'Git', 'Jira', 'Notion'] },
    { category: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { category: 'Web Development', items: ['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js', 'ASP.NET Core', 'shadcn/ui', 'Vite'] },
    { category: 'UX/UI & Design', items: ['Figma', 'Framer', 'Canva', 'WebFlow'] },
    { category: 'Additional Skills', items: ['Khmer-English Translation', 'Content Creation', 'Power BI', 'Microsoft Office Suite'] },
  ],
  soft: [
    'Strong organizational and time-management skills',
    'Exceptional communication and interpersonal skills',
    'Ability to work independently and as part of a team',
    'Detail-oriented and able to handle multiple tasks simultaneously',
  ],
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Application Developer - Internship',
    company: 'One Fraternity Co. Ltd',
    location: 'Phnom Penh, Cambodia',
    duration: 'May 18th, 2026 - August 18th, 2026',
    description: [
      'Developed the One More Restaurant website (full-stack) using React, TypeScript, Tailwind CSS, and shadcn/ui.',
      'Designed high-fidelity UI prototypes in Figma and managed tasks collaboratively via Jira and Notion.',
      'Handled both frontend and backend development integrations; Phase 1 launch scheduled for June 2026.',
    ],
    type: 'internship',
  },
  {
    id: 2,
    role: 'Huawei ICT Competition Cambodia - Cloud Track',
    company: 'Huawei',
    location: 'Cambodia & Indonesia',
    duration: '2025 - 2026',
    description: [
      'Advanced through the Preliminary and National rounds of the Huawei ICT Competition in the Cloud track.',
      'Qualified to represent Cambodia at the Regional Final 2025-2026 in Jakarta, Indonesia.',
      'Demonstrated strong cloud computing fundamentals, containerization skills, teamwork, and problem-solving.',
    ],
    type: 'competition',
  },
  {
    id: 3,
    role: 'Junior Frontend Developer - Internship',
    company: 'TechFlow',
    location: 'Phnom Penh, Cambodia',
    duration: 'December 17th, 2025 - February 17th, 2026',
    description: [
      'Built and maintained responsive client websites, translating Figma UX/UI designs into functional pages using WebFlow.',
      'Conducted rigorous QA testing, fixed layouts, resolved functionality issues, and applied SEO best practices.',
      'Collaborated closely with designers and developers, strengthening project delivery and communication skills.',
    ],
    type: 'internship',
  },
  {
    id: 4,
    role: 'Validated Translation Files',
    company: 'Ministry of Post and Telecommunications (MPTC)',
    location: 'Phnom Penh, Cambodia',
    duration: '3 Months - 2025',
    description: [
      'Contributed to ensuring clarity and accuracy of official ICT documentation for public use.',
      'Validated technical Khmer-English translation files to support digital governance and communication projects.',
    ],
    type: 'translation',
  },
  {
    id: 5,
    role: 'Women Innovators SparkMeet Season 4 Bootcamp',
    company: 'Techo StartUp Center',
    location: 'Phnom Penh, Cambodia',
    duration: '5 Weeks - 2025',
    description: [
      'Completed an intensive innovation and entrepreneurship program designed to empower women in tech.',
      'Gained hands-on experience in problem identification, product-market fit validation, and final project pitching to judges.',
    ],
    type: 'program',
  },
  {
    id: 6,
    role: 'Youth Pioneering a Resilient Digital Society',
    company: 'YIGF Program',
    location: 'Cambodia',
    duration: '2025',
    description: [
      'Participated in a global youth capacity development program focused on internet governance, digital policy, and using technology for positive social impact.',
    ],
    type: 'program',
  },
  {
    id: 7,
    role: 'Local APIGA Cambodia Chapter',
    company: 'Open Development Cambodia (ODC)',
    location: 'Phnom Penh, Cambodia',
    duration: '2 Days - 2025',
    description: [
      'Participated in an intensive leadership development program focused on Internet Governance, digital policy, and online safety.',
      'Engaged in discussions and community initiatives to improve digital governance awareness.',
    ],
    type: 'program',
  },
  {
    id: 8,
    role: 'Web Development and UX/UI Design',
    company: 'Sister of Code',
    location: 'Phnom Penh, Cambodia',
    duration: '14 Weeks | May 4th, 2025 - August 13th, 2025',
    description: [
      'Designed and developed a responsive personal portfolio website using HTML, CSS, and JavaScript, ensuring cross-device compatibility.',
      'Created interactive prototypes in Framer to test user flows and improve usability.',
      'Collaborated in a team environment, strengthening networking and communication through group design challenges.',
    ],
    type: 'program',
  },
  {
    id: 9,
    role: 'English Subtitle Translator',
    company: 'Sastra Film Cambodia',
    location: 'Phnom Penh, Cambodia',
    duration: '2024',
    description: [
      'Produced accurate, contextual English and Khmer subtitles for movies and media content, integrating linguistic precision with modern editing tools.',
    ],
    type: 'translation',
  },
  {
    id: 10,
    role: 'AWS Cloud Practitioner Foundation',
    company: 'C4C Cambodia Bootcamp',
    location: 'Phnom Penh, Cambodia',
    duration: '2024',
    description: [
      'Graduated from an intensive cloud computing program, obtaining hands-on experience with AWS Core Services (EC2, S3, RDS, IAM).',
      'Scored 642 points on the AWS Certified Cloud Practitioner Practice Exam.',
    ],
    type: 'program',
  },
  {
    id: 11,
    role: 'Khmer-English Translator - Internship',
    company: 'Translation Transformer International',
    location: 'Phnom Penh, Cambodia',
    duration: 'Internship - 2024',
    description: [
      'Translated complex technical and non-technical documents between Khmer and English.',
      'Assisted in reviewing and ensuring clarity for legal and law-related translations.',
    ],
    type: 'translation',
  },
  {
    id: 12,
    role: 'Barista & Stock Controller',
    company: 'Cyclo Cafe',
    location: 'Phnom Penh, Cambodia',
    duration: '2023',
    description: [
      'Managed order preparation, customer relations, and coffee station inventory control.',
      'Strengthened communication, teamwork, and problem-solving skills in a high-paced, customer-oriented setting.',
    ],
    type: 'other',
  },
];

export const educationList: Education[] = [
  {
    id: 1,
    institution: 'American University of Phnom Penh (AUPP)',
    degree: 'Bachelor\'s Degree in Digital Infrastructure',
    duration: '2023 - Present | Expected Graduation: May 2027',
    details: 'Recipient of a prestigious Full Scholarship. Active participant in the technology and sports community.',
  },
  {
    id: 2,
    institution: 'Southeast Asian School',
    degree: 'Chinese Language Program',
    duration: '2026 - Present',
    details: 'Expanding trilingual capabilities to support international collaborations.',
  },
  {
    id: 3,
    institution: 'IT Step Academy',
    degree: 'Professional Course in Web Development and UX/UI Design',
    duration: 'Graduated: 2025',
    details: 'Focused on responsive front-end programming, user-centered prototyping, and wireframing.',
  },
  {
    id: 4,
    institution: 'ISTAD Institute',
    degree: 'Advanced C++ Programming',
    duration: 'Completed: 2023',
    details: 'Granted Full Scholarship. Focused on object-oriented programming, data structures, and memory management.',
  },
  {
    id: 5,
    institution: 'Southeast Asian School',
    degree: 'Microsoft Office Applications Mastery',
    duration: 'Completed: 2023',
    details: 'Focused on data management, spreadsheet modeling in Excel, and reporting tools.',
  },
  {
    id: 6,
    institution: 'Spring Education Center',
    degree: 'General English Program',
    duration: 'Completed: 2023',
    details: 'Granted Full Scholarship. Focused on advanced academic writing, presentation, and communication skills.',
  },
  {
    id: 7,
    institution: 'Anlong Veng High School',
    degree: 'High School Diploma (Grade A)',
    duration: 'Graduated: Class of 2022',
    details: 'Achieved top marks (Grade A) in national Baccalaureate II exam.',
  },
];

export const achievements: Achievement[] = [
  { id: 1, title: 'Huawei ICT Competition 2025-2026 Cloud Track - Regional Finalist Representing Cambodia (Jakarta, Indonesia)' },
  { id: 2, title: 'American University of Phnom Penh (AUPP) - Granted Full Scholarship (Digital Infrastructure)' },
  { id: 3, title: 'ISTAD Academy - Granted Full Scholarship for Programming Course' },
  { id: 4, title: 'SPRING Education Center - Granted Full Scholarship for General English' },
  { id: 5, title: 'Royal University of Phnom Penh (RUPP) - Granted Full Scholarship (International Business Management)' },
  { id: 6, title: 'National High School Exam (BAC II) - Achieved perfect Grade "A"' },
  { id: 7, title: 'Physics Outstanding Student, Oddar Meanchey Province - 2nd Place Winner' },
];

export const certificates: Certificate[] = [
  { id: 1, title: 'APIGA Cambodia Chapter - Internet Governance & Digital Policy', issuer: 'Open Development Cambodia', date: '2025', category: 'Leadership' },
  { id: 2, title: 'Certificate of Contribution - Khmer-English Translation Validation', issuer: 'Ministry of Post and Telecommunications (MPTC)', date: '2025', category: 'Language' },
  { id: 3, title: 'Web Development & UX/UI Design - Top 5 Outstanding Student Award', issuer: 'IT Step Academy', date: 'September 2025', category: 'Web' },
  { id: 4, title: 'ASP.NET Core Foundation Certification', issuer: 'ISTAD', date: '2025', category: 'Web' },
  { id: 5, title: 'AWS Cloud Technical Essentials', issuer: 'Amazon Web Services (AWS)', date: '2024', category: 'Cloud' },
  { id: 6, title: 'Introduction to Information Technology and AWS Cloud', issuer: 'Amazon Web Services (AWS)', date: '2024', category: 'Cloud' },
  { id: 7, title: 'SparkMeet Season 4: Women Innovators Bootcamp', issuer: 'Techo Startup Center', date: 'May 2025', category: 'Leadership' },
  { id: 8, title: 'Youth Internet Governance Forum (YIGF) Certificate', issuer: 'YIGF Cambodia', date: 'November 2024', category: 'Leadership' },
  { id: 9, title: 'Cloud4Cambodia Graduation Certification', issuer: 'USAID & Elix Organization', date: 'June 2024', category: 'Cloud' },
];

export const volunteerExperiences: VolunteerExperience[] = [
  { id: 1, role: 'Event Coordinator & Volunteer', organization: 'AUPP Songkran Day', date: 'April 2025' },
  { id: 2, role: 'Conference Volunteer', organization: 'IBTSS Conference', date: 'August 2024' },
  { id: 3, role: 'Logistics Volunteer', organization: 'AUPP High School Graduation Day', date: 'June 2025' },
  { id: 4, role: 'Medical Assistant & Logistics Volunteer', organization: 'Samdech Techo Youth Volunteer Doctor (TYDA)', date: 'May 2024' },
  { id: 5, role: 'Charity Volunteer Coordinator', organization: 'Charity program by AMT in Kandal Province', date: 'February 2024' },
  { id: 6, role: 'Community Volunteer', organization: 'Lok Ta Cyclo Charity Program by Vital Premium Water at Olympic Stadium', date: 'January 2024' },
  { id: 7, role: 'Registration Desk Officer', organization: 'AMT China Scholarship Registrar', date: 'November 2023' },
];

export const extraCurriculars = [
  'Active Member of AUPP Pickle Ball Sport Club',
  'Traditional Dancer in AUPP Khmer Traditional Dance Club',
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'One More Restaurant',
    slug: 'one-more-restaurant',
    category: 'Web Development',
    shortDescription: 'A premium full-stack restaurant reservation and visual menu platform built using React, TypeScript, and Tailwind CSS.',
    description: 'Developed during an application developer internship, this platform streamlines fine-dining operations, reservations, and interactive digital menus. Built with React and TypeScript on the frontend, using Tailwind CSS and shadcn/ui components for a premium user experience, and Figma for prototyping. Handled responsibilities from wireframing to frontend component construction and API integration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Figma', 'Jira', 'Notion'],
    image: 'restaurant',
    featured: true,
    liveUrl: 'https://github.com/somavateysorn',
    repositoryUrl: 'https://github.com/sornsomavatey/omr_website_v1.git',
  },
  {
    id: 2,
    title: 'Pet Care System',
    slug: 'pet-care-system',
    category: 'Cloud & DevOps',
    shortDescription: 'A microservices-based pet service platform containerized with Docker and orchestrated with Kubernetes.',
    description: 'A modular, scalable application developed to digitize and centralize pet services operations. Features secure user and admin authentication, pet profile management, and bookings logs. Built using Node.js and Express.js for the service layer, MongoDB Compass and Mongoose for structured NoSQL storage, and fully containerized/orchestrated to run inside isolated Kubernetes local pods.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes', 'Minikube', 'JWT', 'Bcrypt', 'Postman'],
    image: '/assets/petcaresystem.jpg',
    featured: true,
    liveUrl: 'https://github.com/somavateysorn',
    repositoryUrl: 'https://github.com/sornsomavatey/Auth-and-Profile-Management.git',
  },
  {
    id: 3,
    title: 'Zoroscope',
    slug: 'zoroscope',
    category: 'Web Development',
    shortDescription: 'A personalized zodiac exploration and matching platform powered by Flask, MongoDB, and Bootstrap.',
    description: 'An astrology application offering customized color recommendations, personality insights, and birthday tracking/compatibility features. Built using Python Flask for the backend, MongoDB Compass for storing user profiles and zodiac traits, and a responsive frontend styled with Bootstrap and Framer, deployed on Render with automatic GitHub CI/CD integration.',
    technologies: ['Python', 'Flask', 'MongoDB', 'Bootstrap', 'Framer', 'Render', 'Postman'],
    image: '/assets/zoroscope.png',
    featured: true,
    liveUrl: 'https://github.com/somavateysorn',
    repositoryUrl: 'https://github.com/sornsomavatey/Zoroscope.git',
  },
  {
    id: 4,
    title: 'Artory',
    slug: 'artory',
    category: 'UX/UI & Web',
    shortDescription: 'A global online artwork marketplace connecting talented creators with collectors worldwide.',
    description: 'Artory is a global online platform that sells unique and original artworks. It connects talented artists with art lovers and collectors around the world. From paintings to digital art, Artory offers a curated collection that celebrates creativity and expression. Built using responsive HTML5/CSS3 components, styled galleries, and deployed on Vercel.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vercel', 'Figma'],
    image: '/assets/artory.png',
    featured: false,
    liveUrl: 'https://artory-gamma.vercel.app',
    repositoryUrl: 'https://github.com/engsreynich/Artory.git',
  },
];
