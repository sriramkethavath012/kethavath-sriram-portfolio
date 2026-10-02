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
    category: string;
    description: string;
    iconName: string;
  }[];
}

export interface AITopic {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  whatItIs: string;
  whyItMatters: string;
  basicExample: string;
  relatedTechnologies: string[];
}

export interface DigitalJourneyStage {
  id: string;
  step: string;
  role: string;
  status: 'Current' | 'Active Focus' | 'Next Step' | 'Aspirational';
  focus: string;
  description: string;
}

export interface PlaygroundExample {
  id: string;
  title: string;
  category: string;
  language: string;
  code: string;
  output: string;
  explanation: string;
}

export const aiTopicsData: AITopic[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    iconName: 'BrainCircuit',
    tagline: 'Computational systems capable of performing human-like reasoning tasks.',
    whatItIs: 'Artificial Intelligence is the broad field of computer science dedicated to building machines and algorithms capable of perception, reasoning, problem-solving, and decision-making.',
    whyItMatters: 'AI enables computers to automate complex analytical workflows, optimize computational resource allocation, and address problems too multifaceted for static programmatic heuristics.',
    basicExample: 'A search agent evaluating state trees (e.g. Minimax or A* Search) to identify the optimal path across a maze or game board.',
    relatedTechnologies: ['Python', 'Heuristic Search', 'State-Space Representation', 'Logic Programming'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    iconName: 'Layers',
    tagline: 'Algorithms that learn patterns from empirical data rather than rigid rules.',
    whatItIs: 'Machine Learning is a subset of AI that designs mathematical models capable of improving their performance on a specific task through iterative training on observational data.',
    whyItMatters: 'Instead of manually hardcoding thousands of edge cases, ML systems detect latent probabilistic structures within datasets and generalize to unseen instances.',
    basicExample: 'Training a linear regression or decision tree model on housing features (square footage, rooms, location) to estimate property value.',
    relatedTechnologies: ['Scikit-Learn', 'Pandas', 'NumPy', 'Supervised Learning', 'Model Evaluation'],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    iconName: 'Cpu',
    tagline: 'Multi-layered neural architectures capable of hierarchical feature extraction.',
    whatItIs: 'Deep Learning utilizes deep artificial neural networks with multiple hidden layers to extract progressively higher-level features directly from raw inputs.',
    whyItMatters: 'DL eliminates the need for manual feature engineering in sensory domains like acoustic signals, spatial imagery, and unstructured sequences.',
    basicExample: 'A multi-layer perceptron with backpropagation and ReLU activations classifying handwritten digits from the MNIST benchmark.',
    relatedTechnologies: ['PyTorch', 'TensorFlow', 'Neural Networks', 'Backpropagation', 'Activation Functions'],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    iconName: 'ScanFace',
    tagline: 'Enabling computing systems to extract meaningful insight from visual media.',
    whatItIs: 'Computer Vision encompasses algorithms that process, analyze, and comprehend digital images, video streams, and spatial pixel grids.',
    whyItMatters: 'Allows autonomous systems, biomedical instruments, and visual analytics to perceive spatial environments, recognize objects, and detect anomalies.',
    basicExample: 'A Convolutional Neural Network (CNN) applying spatial filter kernels to detect edges, contours, and object boundaries in real-time.',
    relatedTechnologies: ['OpenCV', 'CNNs', 'Image Preprocessing', 'Spatial Filtering'],
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    iconName: 'MessageSquareCode',
    tagline: 'Bridging the computational boundary between computer algorithms and human language.',
    whatItIs: 'Natural Language Processing focuses on the interaction between computers and human language, allowing machines to read, decipher, and generate text.',
    whyItMatters: 'Unlocks unstructured human knowledge—from customer feedback to scientific literature—making information retrievable and interpretable at scale.',
    basicExample: 'Tokenizing a text paragraph, generating TF-IDF vector embeddings, and running sentiment classification on product reviews.',
    relatedTechnologies: ['NLTK', 'Tokenization', 'TF-IDF', 'Word Embeddings', 'Text Classification'],
  },
  {
    id: 'genai',
    title: 'Generative AI',
    iconName: 'Sparkles',
    tagline: 'Transformer-based models capable of synthesizing novel content and code.',
    whatItIs: 'Generative AI refers to algorithms capable of producing synthetic media, structured documents, creative prose, and software code based on statistical priors.',
    whyItMatters: 'Augments developer productivity, assists in prototyping interface concepts, and powers interactive agent experiences with natural conversational interfaces.',
    basicExample: 'A transformer architecture leveraging self-attention mechanisms to predict the most contextually relevant next token in an ongoing prompt.',
    relatedTechnologies: ['Transformers', 'Attention Mechanism', 'Prompt Engineering', 'LLM Architectures'],
  },
];

export const digitalJourneyStages: DigitalJourneyStage[] = [
  {
    id: 'stage-1',
    step: '01',
    role: 'Student',
    status: 'Current',
    focus: 'B.Tech CSE (AI & ML) at Marwadi University',
    description: 'Undergraduate student building rigorous computer science foundations, discrete mathematics, and lab programming skills.',
  },
  {
    id: 'stage-2',
    step: '02',
    role: 'Learner',
    status: 'Active Focus',
    focus: 'Data Structures, Algorithms & Systems',
    description: 'Consistently practicing algorithmic problem solving in C, C++, and Python to master computational complexity and memory modeling.',
  },
  {
    id: 'stage-3',
    step: '03',
    role: 'Builder',
    status: 'Active Focus',
    focus: 'Modern Web & Software Engineering',
    description: 'Designing modular, accessible user interfaces with HTML, CSS, JavaScript, and React while exploring version control and clean architectures.',
  },
  {
    id: 'stage-4',
    step: '04',
    role: 'AI Explorer',
    status: 'Next Step',
    focus: 'Applied Machine Learning & Intelligence Models',
    description: 'Exploring machine learning workflows, data preprocessing pipelines, and practical model training to solve concrete technical challenges.',
  },
  {
    id: 'stage-5',
    step: '05',
    role: 'Software Engineer',
    status: 'Aspirational',
    focus: 'Production Systems & Industry Collaboration',
    description: 'Aspirational career goal to contribute to scalable, maintainable, and reliable software systems in collaborative engineering environments.',
  },
];

export const playgroundExamples: PlaygroundExample[] = [
  {
    id: 'py-intro',
    title: 'Python Basics',
    category: 'Foundations',
    language: 'python',
    code: `# Sriram's Engineering Introduction
name = "Kethavath Sriram"
branch = "B.Tech CSE (AI & ML)"
university = "Marwadi University, Rajkot"
aspirations = ["Software Development", "Applied AI", "Algorithms"]

print(f"Hello, I'm {name} 👋")
print(f"Program: {branch}")
print(f"Campus: {university}")
print("Core Interests:", " • ".join(aspirations))`,
    output: `Hello, I'm Kethavath Sriram 👋
Program: B.Tech CSE (AI & ML)
Campus: Marwadi University, Rajkot
Core Interests: Software Development • Applied AI • Algorithms`,
    explanation: 'Basic Python syntax demonstrating variable assignment, f-strings, list manipulation, and clean console output.',
  },
  {
    id: 'binary-search',
    title: 'Simple Algorithm (Binary Search)',
    category: 'Algorithms',
    language: 'python',
    code: `def binary_search(sorted_arr, target):
    low = 0
    high = len(sorted_arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        if sorted_arr[mid] == target:
            return mid
        elif sorted_arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Sample ordered array
data = [10, 24, 35, 42, 58, 67, 89, 95]
target = 58
index = binary_search(data, target)

print(f"Dataset: {data}")
print(f"Target value: {target}")
print(f"Target located at index: {index} (Time Complexity: O(log n))")`,
    output: `Dataset: [10, 24, 35, 42, 58, 67, 89, 95]
Target value: 58
Target located at index: 4 (Time Complexity: O(log n))`,
    explanation: 'Logarithmic search dividing the search space in half each iteration; fundamental for efficient retrieval.',
  },
  {
    id: 'stack-ds',
    title: 'Data Structure Example (LIFO Stack)',
    category: 'Data Structures',
    language: 'python',
    code: `class CustomStack:
    def __init__(self):
        self.items = []
        
    def push(self, val):
        self.items.append(val)
        print(f"Pushed: {val}")
        
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return "Underflow"
        
    def peek(self):
        return self.items[-1] if not self.is_empty() else None
        
    def is_empty(self):
        return len(self.items) == 0

s = CustomStack()
s.push("C++ Fundamentals")
s.push("Data Structures")
s.push("AI/ML Models")
print(f"Top Element: {s.peek()}")
print(f"Popped: {s.pop()}")
print(f"Remaining Stack: {s.items}")`,
    output: `Pushed: C++ Fundamentals
Pushed: Data Structures
Pushed: AI/ML Models
Top Element: AI/ML Models
Popped: AI/ML Models
Remaining Stack: ['C++ Fundamentals', 'Data Structures']`,
    explanation: 'Standard Last-In-First-Out (LIFO) stack implementation demonstrating encapsulation and memory management principles.',
  },
  {
    id: 'perceptron',
    title: 'Basic AI/ML Concept (Perceptron Step)',
    category: 'AI / ML',
    language: 'python',
    code: `def step_activation(weighted_sum):
    return 1 if weighted_sum >= 0 else 0

# Inputs [x1, x2] and Weights [w1, w2], Bias b
weights = [0.6, 0.4]
bias = -0.5

test_inputs = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
]

print("Simulating single artificial neuron (Perceptron decision):")
for inp in test_inputs:
    weighted_sum = (inp[0] * weights[0]) + (inp[1] * weights[1]) + bias
    prediction = step_activation(weighted_sum)
    print(f"Input: {inp} | Weighted Sum: {weighted_sum:.2f} | Output: {prediction}")`,
    output: `Simulating single artificial neuron (Perceptron decision):
Input: [0, 0] | Weighted Sum: -0.50 | Output: 0
Input: [0, 1] | Weighted Sum: -0.10 | Output: 0
Input: [1, 0] | Weighted Sum: 0.10 | Output: 1
Input: [1, 1] | Weighted Sum: 0.50 | Output: 1`,
    explanation: 'The elementary foundation of artificial neural networks: linear combination of inputs with weights followed by an activation threshold.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core procedural, object-oriented, and computational programming languages',
    skills: [
      { name: 'C', category: 'Programming', description: 'Foundational systems programming, memory allocation & pointers', iconName: 'Terminal' },
      { name: 'C++', category: 'Programming', description: 'Object-oriented programming, standard template library & performance optimization', iconName: 'Code2' },
      { name: 'Python', category: 'Programming', description: 'Scientific scripting, data manipulation & algorithm prototyping', iconName: 'FileCode' },
    ],
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    description: 'Core computational logic, data organization, and relational systems',
    skills: [
      { name: 'Data Structures', category: 'Computer Science', description: 'Arrays, linked lists, stacks, queues, trees & graph representations', iconName: 'Binary' },
      { name: 'Algorithms', category: 'Computer Science', description: 'Searching, sorting, recursion, asymptotic notation & complexity analysis', iconName: 'GitFork' },
      { name: 'DBMS', category: 'Computer Science', description: 'Relational database concepts, normalization, ACID properties & transaction integrity', iconName: 'HardDrive' },
      { name: 'SQL', category: 'Computer Science', description: 'Structured querying, schema design, table joins, aggregations & data filtering', iconName: 'Database' },
      { name: 'OOP', category: 'Computer Science', description: 'Encapsulation, inheritance, polymorphism, abstraction & modular software design', iconName: 'Layers' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Front-facing markup, modern responsive styling, and client-side reactive components',
    skills: [
      { name: 'HTML', category: 'Web Development', description: 'Semantic structure, accessible document hierarchy & modern DOM markup', iconName: 'Layout' },
      { name: 'CSS', category: 'Web Development', description: 'Responsive layouts, Flexbox, CSS Grid, media queries & glassmorphism styling', iconName: 'Palette' },
      { name: 'JavaScript', category: 'Web Development', description: 'DOM manipulation, modern ES6+ features, asynchronous fetch & event listeners', iconName: 'FileJson' },
      { name: 'React', category: 'Web Development', description: 'Component-driven user interfaces, state management with hooks & reusable component architectures', iconName: 'Cpu' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Machine learning fundamentals, predictive algorithms, and statistical data handling',
    skills: [
      { name: 'Artificial Intelligence', category: 'AI / ML', description: 'Heuristic search algorithms, state-space representations & intelligent decision logic', iconName: 'BrainCircuit' },
      { name: 'Machine Learning', category: 'AI / ML', description: 'Supervised and unsupervised learning principles, training pipelines & validation metrics', iconName: 'Layers' },
      { name: 'Data Processing', category: 'AI / ML', description: 'Feature extraction, cleaning missing values, matrix normalization & tabular handling', iconName: 'Binary' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Developer utilities, collaborative version control, and repository workflows',
    skills: [
      { name: 'Git', category: 'Tools', description: 'Distributed version control, branching strategies, commit history & merge conflict resolution', iconName: 'GitBranch' },
      { name: 'GitHub', category: 'Tools', description: 'Remote code repository hosting, issue tracking, markdown documentation & open-source collaboration', iconName: 'Github' },
    ],
  },
];

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

export interface RoadmapStage {
  id: number;
  stageNumber: string;
  title: string;
  status: string;
  statusCategory: 'completed' | 'learning' | 'exploring' | 'future';
  description: string;
  goal: string;
  topics: string[];
  technologies: string[];
  iconName: string;
  accentColor: string;
  isCurrentFocus?: boolean;
}

export const roadmapStages: RoadmapStage[] = [
  {
    id: 1,
    stageNumber: '01',
    title: 'Programming Foundations',
    status: 'Foundation',
    statusCategory: 'learning',
    description: 'Building strong programming fundamentals and logical problem-solving skills.',
    goal: 'Master imperative programming, pointers, memory allocation, and object-oriented paradigms.',
    topics: ['C', 'C++', 'Python', 'Programming Fundamentals', 'Problem Solving'],
    technologies: ['C', 'C++', 'Python', 'GCC', 'Data Types'],
    iconName: 'Terminal',
    accentColor: 'from-cyan-500/20 to-blue-600/20',
    isCurrentFocus: true,
  },
  {
    id: 2,
    stageNumber: '02',
    title: 'Computer Science Fundamentals',
    status: 'Learning',
    statusCategory: 'learning',
    description: 'Developing core computer science knowledge required for software development.',
    goal: 'Build an intuitive understanding of asymptotic complexity, data organization, and relational modeling.',
    topics: ['Data Structures', 'Algorithms', 'DBMS', 'SQL', 'Object-Oriented Programming'],
    technologies: ['SQL', 'Relational DB', 'Trees & Graphs', 'Sorting Algorithms', 'OOP'],
    iconName: 'Binary',
    accentColor: 'from-blue-500/20 to-indigo-600/20',
    isCurrentFocus: true,
  },
  {
    id: 3,
    stageNumber: '03',
    title: 'Web Development',
    status: 'Learning',
    statusCategory: 'learning',
    description: 'Learning how to design and build modern, responsive web applications.',
    goal: 'Build accessible, responsive frontends with reactive components and component-driven architecture.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design'],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS'],
    iconName: 'Layout',
    accentColor: 'from-sky-500/20 to-cyan-600/20',
  },
  {
    id: 4,
    stageNumber: '04',
    title: 'Artificial Intelligence',
    status: 'Exploring',
    statusCategory: 'exploring',
    description: 'Building knowledge in artificial intelligence and machine learning.',
    goal: 'Understand heuristics, state-space search algorithms, probability matrices, and agent environments.',
    topics: ['Artificial Intelligence', 'Machine Learning Fundamentals', 'Python for AI', 'Data Processing', 'Model Development'],
    technologies: ['Python', 'NumPy', 'Pandas', 'AI Agents', 'Search Algorithms'],
    iconName: 'BrainCircuit',
    accentColor: 'from-purple-500/20 to-indigo-600/20',
    isCurrentFocus: true,
  },
  {
    id: 5,
    stageNumber: '05',
    title: 'Machine Learning',
    status: 'Future Focus',
    statusCategory: 'future',
    description: 'Developing practical machine learning skills through projects and experimentation.',
    goal: 'Design reproducible training workflows, feature extractors, and regression/classification models.',
    topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering', 'ML Projects'],
    technologies: ['Scikit-Learn', 'Matplotlib', 'Jupyter', 'Feature Pipelines', 'Cross-Validation'],
    iconName: 'Layers',
    accentColor: 'from-violet-500/20 to-purple-600/20',
  },
  {
    id: 6,
    stageNumber: '06',
    title: 'Advanced AI / ML',
    status: 'Future Goal',
    statusCategory: 'future',
    description: 'Exploring advanced AI technologies and building intelligent applications.',
    goal: 'Study multi-layer perceptrons, backpropagation, convolutional layers, and generative transformers.',
    topics: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing', 'Generative AI'],
    technologies: ['PyTorch', 'TensorFlow', 'Transformers', 'CNNs', 'NLP Pipelines'],
    iconName: 'Cpu',
    accentColor: 'from-fuchsia-500/20 to-indigo-600/20',
  },
  {
    id: 7,
    stageNumber: '07',
    title: 'Software Engineering',
    status: 'Career Goal',
    statusCategory: 'future',
    description: 'Preparing to build scalable, maintainable, and production-ready software.',
    goal: 'Adopt professional industry workflows including version control branching, automated testing, and CI/CD.',
    topics: ['Software Architecture', 'Git & GitHub', 'APIs', 'Testing', 'Deployment', 'Cloud Technologies'],
    technologies: ['Git', 'GitHub', 'REST APIs', 'Unit Testing', 'Docker', 'Cloud Basics'],
    iconName: 'GitFork',
    accentColor: 'from-indigo-500/20 to-blue-600/20',
  },
  {
    id: 8,
    stageNumber: '08',
    title: 'Professional Journey',
    status: 'Future Goal',
    statusCategory: 'future',
    description: 'Applying my knowledge to real-world projects and growing as a professional software engineer.',
    goal: 'Contribute to team codebases, participate in open-source code reviews, and earn an engineering internship.',
    topics: ['Internships', 'Open Source', 'Real-world Projects', 'Collaboration', 'Software Engineering Career'],
    technologies: ['Open Source', 'Team Code Reviews', 'Production Systems', 'Agile Principles'],
    iconName: 'Rocket',
    accentColor: 'from-cyan-500/20 to-emerald-600/20',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Lab', href: '#ai-lab' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
