export type Language = 'en' | 'hi';

export interface Translations {
  common: {
    language: string;
    langEn: string;
    langHi: string;
    appearance: string;
    darkMode: string;
    lightMode: string;
    backToTop: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    roadmap: string;
    projects: string;
    ailab: string;
    education: string;
    certificates: string;
    resume: string;
    contact: string;
    letsConnect: string;
    current: string;
  };
  hero: {
    greeting: string;
    badge: string;
    role: string;
    tagline: string;
    description: string;
    exploreProjects: string;
    downloadResume: string;
    previewResume: string;
  };
  about: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    academicFocus: string;
    currentStatus: string;
    statusValue: string;
    institution: string;
    location: string;
    currentlyLearning: string;
    traitsTitle: string;
    trait1Title: string;
    trait1Desc: string;
    trait2Title: string;
    trait2Desc: string;
    trait3Title: string;
    trait3Desc: string;
    trait4Title: string;
    trait4Desc: string;
  };
  skills: {
    sectionBadge: string;
    title: string;
    subtitle: string;
  };
  highlights: {
    sectionBadge: string;
    title: string;
    subtitle: string;
  };
  roadmap: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    myJourney: string;
    currentStage: string;
    activeFocus: string;
    currentFocusTitle: string;
    currentFocusDesc: string;
    filterAll: string;
    filterCompleted: string;
    filterLearning: string;
    filterExploring: string;
    filterFuture: string;
    noCompletedTitle: string;
    noCompletedDesc: string;
    viewAll: string;
    targetOutcome: string;
    viewDetails: string;
    modalTargetGoal: string;
    modalCurriculum: string;
    modalTechnologies: string;
    modalPrev: string;
    modalNext: string;
    modalClose: string;
  };
  projects: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    keyFeaturesLabel: string;
    viewSource: string;
    liveDemo: string;
    placeholderNote: string;
  };
  education: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    present: string;
  };
  certificates: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    viewCredential: string;
  };
  achievements: {
    sectionBadge: string;
    title: string;
    subtitle: string;
  };
  resume: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    downloadPDF: string;
    previewModal: string;
  };
  contact: {
    sectionBadge: string;
    title: string;
    subtitle: string;
    contactChannels: string;
    sendMessage: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    copyAddress: string;
    copied: string;
  };
  footer: {
    officialProfiles: string;
    liveVerified: string;
    connectWithMe: string;
    quickLinks: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      language: 'Language',
      langEn: 'EN',
      langHi: 'HI',
      appearance: 'Appearance',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      backToTop: 'Back to top',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      roadmap: 'Roadmap',
      projects: 'Projects',
      ailab: 'AI Lab',
      education: 'Education',
      certificates: 'Certificates',
      resume: 'Resume',
      contact: 'Contact',
      letsConnect: "Let's Connect",
      current: 'CURRENT',
    },
    hero: {
      greeting: "Hello, I'm",
      badge: 'B.Tech CSE (AI & ML) Student',
      role: 'Aspiring Software Engineer',
      tagline: 'AI & Machine Learning Enthusiast',
      description:
        "I'm a CSE (AI & ML) student passionate about software development, artificial intelligence, machine learning, programming, and building practical technology solutions.",
      exploreProjects: 'Explore Projects',
      downloadResume: 'Download Resume',
      previewResume: 'Preview Resume in Modal',
    },
    about: {
      sectionBadge: 'Background & Profile',
      title: 'About Me',
      subtitle: 'Passionate student technologist focused on AI, ML, and robust software development.',
      bioParagraph1:
        "I'm a B.Tech CSE (AI & ML) student interested in software development, artificial intelligence, machine learning, programming, and problem solving. I enjoy learning new technologies and building practical solutions that combine creativity with technology.",
      bioParagraph2:
        'Currently pursuing my undergraduate engineering degree at Marwadi University, Rajkot, focusing on mastering core computer science foundations, algorithm design, and applied intelligence systems.',
      academicFocus: 'Academic Profile',
      currentStatus: 'Current Status',
      statusValue: 'Undergraduate Student (2025 – Present)',
      institution: 'Marwadi University, Rajkot',
      location: 'Rajkot, Gujarat, India',
      currentlyLearning: 'Active Learning Focus',
      traitsTitle: 'Core Capabilities & Mindset',
      trait1Title: 'AI & Machine Learning',
      trait1Desc: 'Deep curiosity for neural networks, pattern recognition, and predictive algorithms.',
      trait2Title: 'Problem Solving',
      trait2Desc: 'Structured analytical thinking across data structures and algorithmic challenges in C, C++, and Python.',
      trait3Title: 'Continuous Learning',
      trait3Desc: 'Constantly exploring new libraries, frameworks, developer tools, and computer science concepts.',
      trait4Title: 'Practical Building',
      trait4Desc: 'Committed to writing clean, maintainable code and solving real-world engineering problems.',
    },
    skills: {
      sectionBadge: 'Technical Capabilities',
      title: 'Skills & Proficiencies',
      subtitle: 'A structured breakdown of programming languages, foundational topics, and developer tools.',
    },
    highlights: {
      sectionBadge: 'Key Strengths',
      title: 'Professional Highlights',
      subtitle: 'Core competencies and technical qualities I bring as an aspiring software engineer.',
    },
    roadmap: {
      sectionBadge: 'Career & Engineering Progression',
      title: 'My Learning Roadmap',
      subtitle:
        'Tracking my structured evolution from a B.Tech CSE (AI & ML) student to an applied software engineer and machine learning practitioner.',
      myJourney: 'My Journey',
      currentStage: 'CURRENT STAGE',
      activeFocus: 'Active Focus Milestone',
      currentFocusTitle: 'CSE Fundamentals + Programming + AI/ML',
      currentFocusDesc: 'Building a strong foundation in programming, computer science, and artificial intelligence.',
      filterAll: 'All Stages',
      filterCompleted: 'Completed',
      filterLearning: 'Learning',
      filterExploring: 'Exploring',
      filterFuture: 'Future',
      noCompletedTitle: 'No milestones marked as completed yet',
      noCompletedDesc:
        'Sriram is currently actively developing his university foundations and core computer science knowledge. Completed milestones will appear here as coursework and certifications are concluded.',
      viewAll: 'View All Milestones',
      targetOutcome: 'Target Outcome',
      viewDetails: 'View learning goals & details',
      modalTargetGoal: 'Target Learning Goal',
      modalCurriculum: 'Curriculum Topics',
      modalTechnologies: 'Technologies & Tools',
      modalPrev: 'Previous Stage',
      modalNext: 'Next Stage',
      modalClose: 'Close',
    },
    projects: {
      sectionBadge: 'Portfolio Work',
      title: 'Featured Projects',
      subtitle: 'Practical implementations demonstrating programming, AI/ML concepts, and web engineering.',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      keyFeaturesLabel: 'Key Features',
      viewSource: 'Source Code',
      liveDemo: 'Live Demo',
      placeholderNote: 'Demonstration architecture — connected to upcoming GitHub repository.',
    },
    education: {
      sectionBadge: 'Academic Journey',
      title: 'Education',
      subtitle: 'Formal coursework and degrees shaping my computer science & engineering foundations.',
      present: 'Present',
    },
    certificates: {
      sectionBadge: 'Continuous Learning',
      title: 'Certificates & Credentials',
      subtitle: 'Verified online courses, lab certifications, and specialized engineering modules.',
      viewCredential: 'View Credential',
    },
    achievements: {
      sectionBadge: 'Milestones & Recognition',
      title: 'Achievements',
      subtitle: 'Academic acknowledgments, hackathon challenges, and technical honors.',
    },
    resume: {
      sectionBadge: 'Curriculum Vitae',
      title: 'Resume & Summary',
      subtitle: 'An overview of my qualifications, academic background, technical proficiencies, and contact information.',
      downloadPDF: 'Download Resume (PDF)',
      previewModal: 'Quick Preview in Browser',
    },
    contact: {
      sectionBadge: 'Get in Touch',
      title: 'Contact Me',
      subtitle: 'Feel free to reach out for student collaboration, academic discussions, or opportunities.',
      contactChannels: 'Direct Contact Channels',
      sendMessage: 'Send a Message',
      formSubtitle: 'Fill out the form below. I will respond to your inquiry as promptly as possible.',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g., Alex Johnson',
      emailLabel: 'Your Email',
      emailPlaceholder: 'e.g., alex@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g., Collaboration on Machine Learning Project',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Thank you for your message!',
      successDesc: 'Your inquiry has been received. I will get back to you shortly.',
      errorTitle: 'Please resolve the highlighted errors before submitting.',
      copyAddress: 'Copy Address',
      copied: 'Copied!',
    },
    footer: {
      officialProfiles: 'Official Profiles',
      liveVerified: 'Live Verified Channels',
      connectWithMe: 'Connect With Me',
      quickLinks: 'Quick Navigation',
      allRightsReserved: 'All rights reserved.',
    },
  },
  hi: {
    common: {
      language: 'भाषा',
      langEn: 'EN',
      langHi: 'हिन्दी',
      appearance: 'दिखावट',
      darkMode: 'डार्क मोड',
      lightMode: 'लाइट मोड',
      backToTop: 'ऊपर जाएं',
    },
    nav: {
      home: 'होम',
      about: 'परिचय',
      skills: 'कौशल',
      roadmap: 'रोडमैप',
      projects: 'प्रोजेक्ट्स',
      ailab: 'एआई लैब',
      education: 'शिक्षा',
      certificates: 'प्रमाणपत्र',
      resume: 'रिज्यूमे',
      contact: 'संपर्क',
      letsConnect: 'संपर्क करें',
      current: 'सक्रिय',
    },
    hero: {
      greeting: 'नमस्ते, मैं हूँ',
      badge: 'बी.टेक सीएसई (एआई और एमएल) छात्र',
      role: 'सॉफ्टवेयर इंजीनियर आकांक्षी',
      tagline: 'एआई और मशीन लर्निंग उत्साही',
      description:
        'मैं सॉफ्टवेयर विकास, आर्टिफिशियल इंटेलिजेंस, मशीन लर्निंग, प्रोग्रामिंग और व्यावहारिक तकनीकी समाधान बनाने के प्रति उत्साही सीएसई (एआई और एमएल) का छात्र हूँ।',
      exploreProjects: 'प्रोजेक्ट्स देखें',
      downloadResume: 'रिज्यूमे डाउनलोड करें',
      previewResume: 'ब्राउज़र में रिज्यूमे देखें',
    },
    about: {
      sectionBadge: 'पृष्ठभूमि और प्रोफ़ाइल',
      title: 'मेरे बारे में',
      subtitle: 'एआई, मशीन लर्निंग और सॉफ्टवेयर विकास पर केंद्रित एक समर्पित छात्र डेवलपर।',
      bioParagraph1:
        'मैं बी.टेक सीएसई (एआई और एमएल) का छात्र हूँ, जिसकी रुचि सॉफ्टवेयर विकास, आर्टिफिशियल इंटेलिजेंस, मशीन लर्निंग, प्रोग्रामिंग और समस्या समाधान में है। मुझे नई तकनीकें सीखना और ऐसे व्यावहारिक समाधान बनाना पसंद है जो रचनात्मकता को तकनीक के साथ जोड़ते हैं।',
      bioParagraph2:
        'वर्तमान में मारवाड़ी यूनिवर्सिटी, राजकोट से अपनी इंजीनियरिंग की पढ़ाई कर रहा हूँ, जहाँ कोर कंप्यूटर साइंस सिद्धांतों, एल्गोरिदम डिज़ाइन और इंटेलिजेंस सिस्टम में निपुणता हासिल कर रहा हूँ।',
      academicFocus: 'शैक्षणिक प्रोफ़ाइल',
      currentStatus: 'वर्तमान स्थिति',
      statusValue: 'इंजीनियरिंग छात्र (2025 – वर्तमान)',
      institution: 'मारवाड़ी यूनिवर्सिटी, राजकोट',
      location: 'राजकोट, गुजरात, भारत',
      currentlyLearning: 'सक्रिय अध्ययन विषय',
      traitsTitle: 'मुख्य क्षमताएं और दृष्टिकोण',
      trait1Title: 'एआई और मशीन लर्निंग',
      trait1Desc: 'न्यूरल नेटवर्क, पैटर्न रिकॉग्निशन और प्रेडिक्टिव एल्गोरिदम के प्रति गहरी रुचि।',
      trait2Title: 'समस्या समाधान',
      trait2Desc: 'सी, सी++ और पायथन में डेटा स्ट्रक्चर्स और एल्गोरिदम के माध्यम से विश्लेषणात्मक दृष्टिकोण।',
      trait3Title: 'निरंतर सीखना',
      trait3Desc: 'नई लाइब्रेरी, फ्रेमवर्क, डेवलपर टूल्स और कंप्यूटर साइंस अवधारणाओं का निरंतर अन्वेषण।',
      trait4Title: 'व्यावहारिक निर्माण',
      trait4Desc: 'साफ, व्यवस्थित कोड लिखने और वास्तविक दुनिया की इंजीनियरिंग चुनौतियों को हल करने के लिए प्रतिबद्ध।',
    },
    skills: {
      sectionBadge: 'तकनीकी क्षमताएं',
      title: 'कौशल और दक्षता',
      subtitle: 'प्रोग्रामिंग भाषाओं, मूलभूत विषयों और डेवलपर टूल्स का संरचित विवरण।',
    },
    highlights: {
      sectionBadge: 'मुख्य खूबियां',
      title: 'व्यावसायिक मुख्य बिंदु',
      subtitle: 'एक उभरते सॉफ्टवेयर इंजीनियर के रूप में मेरी प्रमुख योग्यताएं और तकनीकी दृष्टिकोण।',
    },
    roadmap: {
      sectionBadge: 'करियर और तकनीकी प्रगति',
      title: 'मेरा लर्निंग रोडमैप',
      subtitle:
        'बी.टेक सीएसई छात्र से सॉफ्टवेयर इंजीनियर और एआई/एमएल प्रैक्टिशनर बनने की मेरी संरचित यात्रा।',
      myJourney: 'मेरी यात्रा',
      currentStage: 'वर्तमान चरण',
      activeFocus: 'सक्रिय फोकस माइलस्टोन',
      currentFocusTitle: 'सीएसई फंडामेंटल्स + प्रोग्रामिंग + एआई/एमएल',
      currentFocusDesc: 'प्रोग्रामिंग, कंप्यूटर साइंस और आर्टिफिशियल इंटेलिजेंस में मजबूत नींव का निर्माण।',
      filterAll: 'सभी चरण',
      filterCompleted: 'पूर्ण',
      filterLearning: 'अध्ययनरत',
      filterExploring: 'अन्वेषण',
      filterFuture: 'भविष्य',
      noCompletedTitle: 'अभी तक कोई माइलस्टोन पूर्ण चिह्नित नहीं है',
      noCompletedDesc:
        'श्रीराम वर्तमान में सक्रिय रूप से अपनी विश्वविद्यालयी नींव और बुनियादी कंप्यूटर विज्ञान ज्ञान को विकसित कर रहे हैं। अध्ययन और प्रमाणपत्र पूरे होने पर वे यहाँ प्रदर्शित होंगे।',
      viewAll: 'सभी माइलस्टोन देखें',
      targetOutcome: 'लक्षित परिणाम',
      viewDetails: 'लक्ष्य और विवरण देखें',
      modalTargetGoal: 'लक्षित अध्ययन लक्ष्य',
      modalCurriculum: 'पाठ्यचर्या विषय',
      modalTechnologies: 'तकनीक और उपकरण',
      modalPrev: 'पिछला चरण',
      modalNext: 'अगला चरण',
      modalClose: 'बंद करें',
    },
    projects: {
      sectionBadge: 'पोर्टफोलियो कार्य',
      title: 'प्रमुख प्रोजेक्ट्स',
      subtitle: 'प्रोग्रामिंग, एआई/एमएल अवधारणाओं और वेब इंजीनियरिंग को दर्शाने वाले व्यावहारिक प्रोजेक्ट्स।',
      problemLabel: 'समस्या',
      solutionLabel: 'समाधान',
      keyFeaturesLabel: 'मुख्य विशेषताएं',
      viewSource: 'सोर्स कोड',
      liveDemo: 'लाइव डेमो',
      placeholderNote: 'डेमोंस्ट्रेशन आर्किटेक्चर — आगामी गिटहब रिपॉजिटरी से जुड़ा हुआ।',
    },
    education: {
      sectionBadge: 'शैक्षणिक यात्रा',
      title: 'शिक्षा',
      subtitle: 'कंप्यूटर साइंस और इंजीनियरिंग की नींव को आकार देने वाले शैक्षणिक पाठ्यक्रम और डिग्रियां।',
      present: 'वर्तमान',
    },
    certificates: {
      sectionBadge: 'निरंतर अध्ययन',
      title: 'प्रमाणपत्र और साख',
      subtitle: 'सत्यापित ऑनलाइन पाठ्यक्रम, लैब प्रमाणपत्र और विशेष इंजीनियरिंग मॉड्यूल।',
      viewCredential: 'प्रमाणपत्र देखें',
    },
    achievements: {
      sectionBadge: 'उपलब्धियां और मान्यता',
      title: 'उपलब्धियां',
      subtitle: 'शैक्षणिक सम्मान, हैकथॉन चुनौतियाँ और तकनीकी उपलब्धियां।',
    },
    resume: {
      sectionBadge: 'करिकुलम विटाई',
      title: 'रिज्यूमे और सारांश',
      subtitle: 'मेरी शैक्षणिक योग्यता, पृष्ठभूमि, तकनीकी दक्षता और संपर्क जानकारी का व्यापक अवलोकन।',
      downloadPDF: 'रिज्यूमे डाउनलोड करें (PDF)',
      previewModal: 'ब्राउज़र में तुरंत देखें',
    },
    contact: {
      sectionBadge: 'संपर्क करें',
      title: 'मुझसे संपर्क करें',
      subtitle: 'सहयोग, शैक्षणिक विचार-विमर्श या अवसरों के लिए बेझिझक संपर्क करें।',
      contactChannels: 'प्रत्यक्ष संपर्क माध्यम',
      sendMessage: 'संदेश भेजें',
      formSubtitle: 'नीचे दिया गया फॉर्म भरें। मैं जल्द से जल्द आपके संदेश का उत्तर दूंगा।',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'उदा. राहुल शर्मा',
      emailLabel: 'आपका ईमेल',
      emailPlaceholder: 'उदा. rahul@example.com',
      subjectLabel: 'विषय',
      subjectPlaceholder: 'उदा. मशीन लर्निंग प्रोजेक्ट पर सहयोग',
      messageLabel: 'संदेश',
      messagePlaceholder: 'अपना संदेश यहाँ लिखें...',
      sendButton: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      successTitle: 'आपके संदेश के लिए धन्यवाद!',
      successDesc: 'आपका संदेश प्राप्त हो गया है। मैं शीघ्र ही आपसे संपर्क करूंगा।',
      errorTitle: 'कृपया सबमिट करने से पहले त्रुटियों को ठीक करें।',
      copyAddress: 'पता कॉपी करें',
      copied: 'कॉपी हो गया!',
    },
    footer: {
      officialProfiles: 'आधिकारिक प्रोफ़ाइल',
      liveVerified: 'सत्यापित चैनल',
      connectWithMe: 'मुझसे जुड़ें',
      quickLinks: 'त्वरित नेविगेशन',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    },
  },
};
