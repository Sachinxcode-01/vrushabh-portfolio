import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vrushabh B",
    role: "Computer Science Engineering Student",
    college: "Rural Engineering College, Hulkoti – 588205",
    academicYear: "2nd Year B.E. (CSE)",
    location: "Hulkoti, Karnataka, India",
    bio: "Passionate Computer Science Engineering student focused on full-stack web development, modern software engineering, and interactive digital experiences. Enthusiastic about solving complex algorithmic problems, building scalable backend services, and designing clean user interfaces.",
    interests: [
      "Full-Stack Web Architecture",
      "Interactive 3D Web Graphics",
      "Algorithm Optimization & Data Structures",
      "Artificial Intelligence & Machine Learning",
      "Open-Source Software Development"
    ],
    learningGoals: [
      "Mastering Next.js 15 App Router & Server Actions",
      "Deepening WebGL, Three.js & Shader programming",
      "Exploring Cloud Infrastructure & Microservices",
      "Contributing to high-impact Open Source repositories"
    ],
    personalQualities: [
      "Relentless Curiosity",
      "Consistent Problem Solver",
      "Collaborative Team Player",
      "Detail-Oriented Architect"
    ],
    profileImage: "/Vrushabh.jpeg",
    resumeUrl: "#resume-download",
    socials: {
      email: "vrushijain1008@gmail.com",
      instagram: "https://www.instagram.com/mr_vrushi_arasu_17",
      facebook: "https://www.facebook.com/share/194jEXFn5L/",
      github: "https://github.com/Sachinxcode-01",
      linkedin: "https://linkedin.com/in/vrushabh-b"
    }
  },
  stats: [
    {
      id: "stat-1",
      label: "Projects Completed",
      value: 12,
      suffix: "+",
      description: "Full-stack apps, tools & UI components"
    },
    {
      id: "stat-2",
      label: "Technologies Mastered & Learning",
      value: 15,
      suffix: "+",
      description: "Languages, frameworks & modern dev tools"
    },
    {
      id: "stat-3",
      label: "Coding Practice Hours",
      value: 500,
      suffix: "+",
      description: "Problem solving on LeetCode & GitHub"
    },
    {
      id: "stat-4",
      label: "Academic Milestone",
      value: 2,
      suffix: "nd Year",
      description: "B.E. Computer Science Engineering"
    }
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      description: "Core foundational syntax & computational logic",
      skills: [
        { name: "C", level: "Experienced", featured: true },
        { name: "C++", level: "Experienced", featured: true },
        { name: "Python", level: "Experienced", featured: true },
        { name: "Java", level: "Learning", featured: false },
        { name: "JavaScript", level: "Experienced", featured: true },
        { name: "TypeScript", level: "Learning", featured: true }
      ]
    },
    {
      category: "Frontend Development",
      description: "Responsive layouts, smooth UI animations & 3D graphics",
      skills: [
        { name: "HTML5", level: "Experienced" },
        { name: "CSS3 / Tailwind CSS", level: "Experienced", featured: true },
        { name: "React", level: "Experienced", featured: true },
        { name: "Next.js", level: "Learning", featured: true },
        { name: "GSAP & ScrollTrigger", level: "Learning", featured: true },
        { name: "Three.js / React Three Fiber", level: "Learning", featured: true }
      ]
    },
    {
      category: "Backend & Databases",
      description: "Server-side logic, API design & database systems",
      skills: [
        { name: "Node.js", level: "Learning" },
        { name: "Express.js", level: "Learning" },
        { name: "MongoDB", level: "Learning" },
        { name: "PostgreSQL", level: "Familiar" },
        { name: "REST APIs", level: "Experienced" }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Development environment, version control & deployment",
      skills: [
        { name: "Git", level: "Experienced" },
        { name: "GitHub", level: "Experienced" },
        { name: "VS Code", level: "Experienced" },
        { name: "Figma", level: "Familiar" },
        { name: "Vercel", level: "Experienced" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "DevNexus - Developer Knowledge Sharing Platform",
      tagline: "Collaborative developer forum and code snippet hub",
      problemStatement: "Students and developers often struggle to organize code snippets, technical summaries, and project resources in a searchable single workspace.",
      solutionSummary: "Built a full-stack platform featuring syntax-highlighted snippet creation, markdown preview, tag-based discovery, and bookmarking.",
      category: "Full-Stack",
      status: "Featured Project",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
      features: [
        "Live markdown code preview with syntax highlighting",
        "Tag-based project and snippet search filtering",
        "Responsive dark mode UI with interactive cards",
        "Secure User authentication & profile dashboards"
      ],
      image: "/images/projects/devnexus.jpg",
      demoUrl: "https://devnexus-demo.vercel.app",
      githubUrl: "https://github.com/Sachinxcode-01/vrushabh-portfolio",
      featured: true
    },
    {
      id: "proj-2",
      title: "AlgoVista - Visualizing Graph & Sorting Algorithms",
      tagline: "Interactive 3D & 2D algorithm visualizer for CS students",
      problemStatement: "Abstract data structures and sorting algorithms like QuickSort, Dijkstra, and A* are difficult to visualize purely through static textbook diagrams.",
      solutionSummary: "Created an interactive web application that animates array sorting steps and graph traversal nodes in real time with playback controls.",
      category: "Web",
      status: "Completed",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Canvas API", "GSAP"],
      features: [
        "Real-time speed and step controls for sorting execution",
        "Interactive maze generator and pathfinding visualizer",
        "Detailed time and space complexity explanations",
        "Responsive canvas layout for mobile and desktop screens"
      ],
      image: "/images/projects/algovista.jpg",
      demoUrl: "https://algovista-demo.vercel.app",
      githubUrl: "https://github.com/Sachinxcode-01/vrushabh-portfolio",
      featured: true
    },
    {
      id: "proj-3",
      title: "REC Hulkoti Campus Portal Companion",
      tagline: "Student productivity tool & event notifications dashboard",
      problemStatement: "Engineering students need a central hub to track timetable updates, exam notices, club hackathons, and study material downloads.",
      solutionSummary: "Designed and prototyped a unified web dashboard for Rural Engineering College Hulkoti students with event calendars and resource links.",
      category: "Web",
      status: "In Development",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide React"],
      features: [
        "Centralized notice board with filterable category tags",
        "Semester syllabus & assignment resource download index",
        "Student timetable viewer with offline caching",
        "Clean, high-contrast accessible UI"
      ],
      image: "/images/projects/rec-portal.jpg",
      demoUrl: "https://rec-companion.vercel.app",
      githubUrl: "https://github.com/Sachinxcode-01/vrushabh-portfolio",
      featured: true
    },
    {
      id: "proj-4",
      title: "NeuralCanvas - AI Image Generator Interface",
      tagline: "Sleek frontend dashboard for generative AI image prompt testing",
      problemStatement: "Testing AI prompts requires a responsive, high-performance UI with prompt presets, image history, and variation controls.",
      solutionSummary: "Developed an aesthetic glassmorphic web dashboard with sample gallery grids, seed parameter controls, and prompt history storage.",
      category: "AI / ML",
      status: "Completed",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Unsplash API"],
      features: [
        "Prompt preset builder with style & dimension selector",
        "Image grid layout with lightbox viewer and download option",
        "Local Storage persistence for saved prompts and history",
        "Smooth page transitions and micro-animations"
      ],
      image: "/images/projects/neuralcanvas.jpg",
      demoUrl: "https://neuralcanvas-demo.vercel.app",
      githubUrl: "https://github.com/Sachinxcode-01/vrushabh-portfolio",
      featured: false
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "Rural Engineering College, Hulkoti",
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      period: "2023 – Present (Expected 2027)",
      status: "Currently in 2nd Year (Semester IV)",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++ / Java)",
        "Database Management Systems",
        "Computer Organization & Architecture",
        "Discrete Mathematical Structures",
        "Web Programming Fundamentals"
      ],
      achievements: [
        "Active participant in Department Technical Workshops & Coding Competitions",
        "Building academic & student project portfolios"
      ],
      location: "Hulkoti – 588205, Gadag District, Karnataka"
    },
    {
      id: "edu-2",
      institution: "Pre-University College (PUC)",
      degree: "Pre-University Education (Science Stream - PCMB / PCMC)",
      period: "2021 – 2023",
      status: "Completed with Distinction",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science / Biology"
      ],
      achievements: [
        "Top performer in Science & Mathematics coursework"
      ],
      location: "Karnataka, India"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Full-Stack Web Development Certification",
      type: "Certification",
      issuer: "Online Learning Platform",
      date: "2024",
      description: "Completed comprehensive training on modern frontend libraries, responsive design, REST API architecture, and state management.",
      tags: ["React", "Node.js", "Web Dev"],
      credentialUrl: "https://example.com/certificate/webdev-placeholder",
      isPlaceholder: true
    },
    {
      id: "ach-2",
      title: "Inter-College Coding Hackathon - Participant",
      type: "Hackathon",
      issuer: "Regional Engineering Fest",
      date: "2024",
      description: "Collaborated in a 24-hour sprint to prototype a web app solution for real-world campus problem statements.",
      tags: ["Hackathon", "Problem Solving", "Teamwork"],
      isPlaceholder: false
    },
    {
      id: "ach-3",
      title: "Technical Workshop on Modern JavaScript & Frameworks",
      type: "Workshop",
      issuer: "REC Hulkoti CSE Association",
      date: "2024",
      description: "Participated in hands-on technical sessions covering ES6+, DOM manipulation, component architecture, and Git workflows.",
      tags: ["JavaScript", "Git", "Workshop"],
      isPlaceholder: false
    },
    {
      id: "ach-4",
      title: "Data Structures & Algorithms Mastery Badge",
      type: "Certification",
      issuer: "Competitive Programming Platform",
      date: "2024",
      description: "Solved 200+ algorithm challenges across arrays, strings, trees, graphs, and dynamic programming.",
      tags: ["C++", "DSA", "Problem Solving"],
      credentialUrl: "https://example.com/certificate/dsa-placeholder",
      isPlaceholder: true
    }
  ],
  services: [
    {
      id: "srv-1",
      title: "Web Application Development",
      description: "Building responsive, modern, and high-performance web applications using React, Next.js, and TypeScript.",
      icon: "Code2",
      highlights: [
        "Clean, maintainable component hierarchy",
        "Fast page load & SEO optimization",
        "Responsive cross-device layouts"
      ]
    },
    {
      id: "srv-2",
      title: "UI / UX Engineering & Interactive Motion",
      description: "Transforming design mockups into liquid-smooth web experiences with GSAP, Framer Motion, and glassmorphic UI.",
      icon: "Layout",
      highlights: [
        "Micro-animations & scroll interactions",
        "Dark-themed futuristic aesthetic",
        "Accessible & touch-friendly controls"
      ]
    },
    {
      id: "srv-3",
      title: "Software Engineering & Problem Solving",
      description: "Applying solid data structures and object-oriented principles (C++, Python, Java) to solve complex computational problems.",
      icon: "Cpu",
      highlights: [
        "Algorithmic efficiency & data parsing",
        "Clean code & modular structure",
        "Database design & API endpoints"
      ]
    },
    {
      id: "srv-4",
      title: "AI Exploration & Open Source",
      description: "Investigating AI-assisted tools, web graphics (Three.js), and contributing to student-driven open-source projects.",
      icon: "Sparkles",
      highlights: [
        "Generative AI interface integration",
        "3D canvas scene creation",
        "Open-source collaboration"
      ]
    }
  ]
};
