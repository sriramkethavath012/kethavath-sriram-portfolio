/**
 * Centralized Content Configuration for Kethavath Sriram's Portfolio
 * 
 * You can easily update your details, projects, skills, certificates,
 * and resume information directly in this single file.
 */

export interface PersonalInfo {
  name: string;
  fullName: string;
  badge: string;
  role: string;
  tagline: string;
  description: string;
  aboutText: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  githubIsPlaceholder: boolean;
  resumePath: string;
  currentlyLearning: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI & ML' | 'Software Engineering' | 'Web Development';
  shortDescription: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isPlaceholder: boolean;
  accentColor: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  status: string;
  location: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialUrl: string;
  isPlaceholder: boolean;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  isPlaceholder: boolean;
}

export interface ProfessionalHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SocialProfile {
  name: string;
  username: string;
  url: string;
}

export interface SocialLinksConfig {
  github: SocialProfile;
  linkedin: SocialProfile;
  instagram: SocialProfile;
  email: {
    name: string;
    address: string;
    url: string;
  };
}

export const socialLinks: SocialLinksConfig = {
  github: {
    name: "GitHub",
    username: "@sriramkethavath012",
    url: "https://github.com/sriramkethavath012",
  },
  linkedin: {
    name: "LinkedIn",
    username: "Kethavath Sriram",
    url: "https://www.linkedin.com/in/kethavath-sriram-59a4a7423",
  },
  instagram: {
    name: "Instagram",
    username: "@sriramnayak_1438",
    url: "https://www.instagram.com/sriramnayak_1438/",
  },
  email: {
    name: "Email",
    address: "sriramkethavath012@gmail.com",
    url: "mailto:sriramkethavath012@gmail.com",
  },
};

export const personalInfo: PersonalInfo = {
  name: 'Kethavath Sriram',
  fullName: 'Kethavath Sriram',
  badge: 'B.Tech CSE (AI & ML) Student',
  role: 'Aspiring Software Engineer',
  tagline: 'AI & Machine Learning Enthusiast',
  description:
    "I'm a CSE (AI & ML) student passionate about software development, artificial intelligence, machine learning, programming, and building practical technology solutions.",
  aboutText:
    "I'm a B.Tech CSE (AI & ML) student interested in software development, artificial intelligence, machine learning, programming, and problem solving. I enjoy learning new technologies and building practical solutions that combine creativity with technology.",
  location: 'Rajkot, Gujarat, India',
  email: socialLinks.email.address,
  linkedin: socialLinks.linkedin.url,
  github: socialLinks.github.url,
  instagram: socialLinks.instagram.url,
  githubIsPlaceholder: false,
  resumePath: '/resume.pdf',
  currentlyLearning: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Software Development',
  ],
};

export const professionalHighlights: ProfessionalHighlight[] = [
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Developing logical approaches to programming and technical problems.',
    iconName: 'Cpu',
  },
  {
    id: 'technical-learning',
    title: 'Technical Learning',
    description: 'Continuously exploring programming and emerging technologies.',
    iconName: 'BookOpen',
  },
  {
    id: 'ai-ml-interest',
    title: 'AI & ML Interest',
    description: 'Building knowledge in artificial intelligence and machine learning.',
    iconName: 'Sparkles',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Interested in creating practical and useful software solutions.',
    iconName: 'Code',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core procedural, object-oriented, and computational programming languages',
    skills: [
      { name: 'C', description: 'Foundational systems programming, memory allocation & pointers', iconName: 'Terminal' },
      { name: 'C++', description: 'Object-oriented programming, standard template library & performance', iconName: 'Code2' },
      { name: 'Python', description: 'Scientific scripting, data manipulation & algorithm development', iconName: 'FileCode' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern front-facing markup, styling, and interactive web scripting',
    skills: [
      { name: 'HTML', description: 'Semantic structure, accessible markup & modern document hierarchy', iconName: 'Layout' },
      { name: 'CSS', description: 'Responsive layouts, Flexbox, Grid, transitions & modern aesthetics', iconName: 'Palette' },
      { name: 'JavaScript', description: 'DOM manipulation, modern ES6+ syntax & client-side interaction', iconName: 'FileJson' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational storage principles, schema design, and querying',
    skills: [
      { name: 'SQL', description: 'Structured querying, joins, aggregations & data filtering', iconName: 'Database' },
      { name: 'DBMS', description: 'Relational concepts, ACID properties, normalization & integrity', iconName: 'HardDrive' },
    ],
  },
  {
    id: 'cs-fundamentals',
    title: 'Computer Science',
    description: 'Core computational logic and problem analysis foundations',
    skills: [
      { name: 'Data Structures', description: 'Arrays, linked lists, stacks, queues, trees & graphs', iconName: 'Binary' },
      { name: 'Algorithms', description: 'Searching, sorting, recursion, asymptotic complexity analysis', iconName: 'GitFork' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    description: 'Intelligent decision models, pattern recognition, and data analytics',
    skills: [
      { name: 'Artificial Intelligence', description: 'Search agents, heuristic reasoning & intelligent systems', iconName: 'BrainCircuit' },
      { name: 'Machine Learning', description: 'Supervised/unsupervised learning concepts & model workflows', iconName: 'Layers' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'project-ai-ml',
    number: '01',
    title: 'Your AI/ML Project',
    category: 'AI & ML',
    shortDescription: 'Add your real AI/ML project description here. This slot is formatted for your predictive model, neural network, or data pipeline.',
    problemStatement:
      'Editable placeholder: Describe the real-world problem, data complexity, or predictive challenge your machine learning model aims to solve.',
    solution:
      'Editable placeholder: Detail how you preprocessed data, selected algorithms, trained models, and evaluated accuracy or inference speed.',
    technologies: ['Python', 'Machine Learning', 'Data Processing', 'Jupyter'],
    keyFeatures: [
      'Data cleaning and exploratory feature analysis pipeline',
      'Model training with cross-validation and hyperparameter tuning',
      'Performance evaluation metrics and confusion matrices',
      'Exportable inference pipeline for automated predictions',
    ],
    githubUrl: 'https://github.com/sriram-kethavath/ai-ml-project-template',
    liveDemoUrl: '#',
    isPlaceholder: true,
    accentColor: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 'project-software',
    number: '02',
    title: 'Your Software Project',
    category: 'Software Engineering',
    shortDescription: 'Add your software engineering or systems project description here. Perfect for C++ data structures, desktop utilities, or algorithms.',
    problemStatement:
      'Editable placeholder: Explain the computational bottleneck, system requirement, or software utility goal addressed by your application.',
    solution:
      'Editable placeholder: Outline the architecture, memory management strategy, and data structure implementations used.',
    technologies: ['C++', 'Data Structures', 'Algorithms', 'OOP'],
    keyFeatures: [
      'Modular object-oriented class hierarchy design',
      'Optimized time and space complexity with custom data structures',
      'Safe memory management and pointer validation',
      'CLI / console interface with comprehensive unit test scenarios',
    ],
    githubUrl: 'https://github.com/sriram-kethavath/software-project-template',
    liveDemoUrl: '#',
    isPlaceholder: true,
    accentColor: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    id: 'project-web',
    number: '03',
    title: 'Your Web Project',
    category: 'Web Development',
    shortDescription: 'Add your web application description here. Ideal for responsive frontends, interactive dashboards, or full-stack web platforms.',
    problemStatement:
      'Editable placeholder: Describe the user experience problem, web platform purpose, or information delivery objective.',
    solution:
      'Editable placeholder: Explain how HTML, CSS, JavaScript, and responsive design principles were applied to create the interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    keyFeatures: [
      'Clean, accessible semantic layout compatible with all viewports',
      'Dynamic client-side DOM rendering and event-driven interactivity',
      'Consistent dark/light theme styling and CSS architecture',
      'Optimized asset loading and smooth navigation interactions',
    ],
    githubUrl: 'https://github.com/sriram-kethavath/web-project-template',
    liveDemoUrl: '#',
    isPlaceholder: true,
    accentColor: 'from-purple-500/20 to-cyan-600/20',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'marwadi-university',
    institution: 'Marwadi University',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering (AI & ML)',
    duration: '2025 – Present',
    status: 'Currently Enrolled',
    location: 'Rajkot, Gujarat, India',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning curriculum',
      'Focusing on computational foundations, algorithms, and applied software engineering',
      'Active participant in technical labs, academic problem-solving, and peer learning',
    ],
  },
  {
    id: 'narayana-junior-college',
    institution: 'Narayana Junior College',
    degree: 'Intermediate Education',
    field: 'MPC (Mathematics, Physics, Chemistry)',
    duration: 'June 2023 – March 2025',
    status: 'Completed',
    location: 'India',
    highlights: [
      'Intensive rigorous focus on higher-level analytical mathematics and physics',
      'Built strong analytical reasoning and systematic problem-solving methods',
      'Prepared solid foundation for engineering algorithms and computational analysis',
    ],
  },
  {
    id: 'wisdom-high-school',
    institution: 'Wisdom High School',
    degree: 'Secondary School Education',
    field: 'General Academic Curriculum & Sciences',
    duration: 'June 2022 – April 2023',
    status: 'Completed',
    location: 'India',
    highlights: [
      'Core foundation in mathematics, physical sciences, and computer basics',
      'Developed early curiosity for computer science and logical thinking',
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Your First Certificate Title',
    issuer: 'Issuing Organization (e.g. Coursera / NPTEL / HackerRank)',
    date: 'Month Year (e.g. August 2025)',
    category: 'AI & ML / Programming',
    credentialUrl: '#',
    isPlaceholder: true,
    description: 'Add your verified course completion, technical certification, or academic specialization details here.',
  },
  {
    id: 'cert-2',
    title: 'Your Second Certificate Title',
    issuer: 'Issuing Organization (e.g. LeetCode / Udemy / Google)',
    date: 'Month Year (e.g. January 2026)',
    category: 'Computer Science / Algorithms',
    credentialUrl: '#',
    isPlaceholder: true,
    description: 'Add details regarding algorithms, problem solving, or web development credentials when completed.',
  },
  {
    id: 'cert-3',
    title: 'Your Third Certificate Title',
    issuer: 'Issuing Organization (e.g. University / Technical Society)',
    date: 'Month Year',
    category: 'Software Development',
    credentialUrl: '#',
    isPlaceholder: true,
    description: 'Keep your portfolio up-to-date by adding newly achieved course certificates or workshop credentials.',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-1',
    title: 'Academic Milestone / Technical Challenge',
    organization: 'Marwadi University / Academic Forum',
    date: '2025 – Present',
    description: 'Slot for upcoming hackathon participations, coding competition rankings, or academic honors. Easily editable.',
    isPlaceholder: true,
  },
  {
    id: 'achieve-2',
    title: 'Continuous Coding & Problem Solving',
    organization: 'Programming Platforms & University Labs',
    date: 'Ongoing',
    description: 'Consistently practicing algorithmic problem solving in C, C++, and Python to build strong analytical muscle.',
    isPlaceholder: true,
  },
  {
    id: 'achieve-3',
    title: 'Collaborative Project / Workshop Participation',
    organization: 'Department of Computer Science',
    date: 'Ongoing',
    description: 'Engaging in academic workshops and peer tech discussions centered on AI, ML, and software architecture.',
    isPlaceholder: true,
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
