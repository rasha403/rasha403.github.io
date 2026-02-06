// ================================
// BRAND (Hero, Navbar, Footer)
// ================================
export const BRAND = {
    name: "Rasha Al Haj Hasan",
    role: "Mobile Application Developer (Flutter & React Native)",
    location: "Beirut, Lebanon",
    tagline:
      "I build secure, scalable mobile applications and modern web experiences with clean architecture and strong business logic.",
  };
  
  // ================================
  // ABOUT
  // ================================
  export const ABOUT = {
    headline: "About Me",
    bio: `I am a Mobile Application Developer with strong experience in Flutter and growing expertise in React Native. 
  I focus on building secure, scalable, and user-centric applications integrated with RESTful APIs, following clean architecture principles. 
  My background in Management Information Systems allows me to bridge technical implementation with real business needs.`,
  
    highlights: [
      { title: "Specialization", value: "Flutter & React Native" },
      { title: "Experience", value: "Mobile Apps & API Integration" },
      { title: "Location", value: "Beirut, Lebanon" },
    ],
  
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "C#",
      ".NET Core",
      "REST APIs",
      "SQL Server",
      "Clean Architecture",
      "Firebase",
      "Git / GitHub",
      "HTML & CSS",
      "Business Analysis",
    ],
  };
  
  // ================================
  // EXPERIENCE
  // ================================
  export const EXPERIENCE = [
    {
      title: "Flutter & .NET Developer",
      company: "Dynasoft Technology",
      period: "May 2024 – Present",
      bullets: [
        "Developed a multi-tenant school management system with role-based access for administrators and end users.",
        "Built and secured RESTful APIs using .NET Web API with JWT authentication.",
        "Developed and integrated Flutter mobile applications with backend services.",
        "Designed and optimized database architecture to improve performance and reporting accuracy.",
        "Implemented multi-language support, notifications, and modular dashboards.",
      ],
      tech: ["Flutter", ".NET Web API", "JWT", "SQL Server"],
    },
    {
      title: "Functional Intern – Odoo ERP",
      company: "ERP Cloud",
      period: "Internship",
      bullets: [
        "Participated in functional training for the Odoo ERP system.",
        "Supported ERP module implementation and proposal preparation.",
        "Collaborated with business users to gather and analyze requirements.",
      ],
      tech: ["Odoo ERP", "Business Analysis", "Process Mapping"],
    },
  ];
  
  // ================================
  // PROJECTS
  // ================================
  export const PROJECTS = [
    {
      id: "school-app",
      type: "mobile",
      title: "SIS",
      summary:
        "A full-featured multi-tenant school management mobile application with secure authentication, role-based access, and multilingual support.",
      stack: ["Flutter", ".NET Web API", "SQL Server"],
      links: {
        live: "",
        github: "",
      },
      media: {
        cover: "/images/favicon.ico",
        gallery: [],
        video: "",
      },
      featured: true,
    },
    {
      id: "react-portfolio",
      type: "website",
      title: "React Portfolio Website",
      summary:
        "A modern, responsive personal portfolio built with React and Vite, featuring smooth animations, reusable components, and mobile-first design.",
      stack: ["React", "Vite"],
      links: {
        live: "",
        github: "",
      },
      media: {
        cover: "/images/portfolio.png",
        gallery: [],
        video: "",
      },
      featured: true,
    },
    {
      id: "recipe-app",
      type: "mobile",
      title: "Food Recipe Mobile App",
      summary:
        "A multi-language Flutter recipe application with offline storage, nutrition calculation, and favorite recipes management.",
      stack: ["Flutter", "SQLite"],
      links: {
        live: "",
        github: "",
      },
      media: {
        cover: "/images/recipe-app.jfif",
        gallery: [],
        video: "",
      },
      featured: false,
    },
    {
      id: "graduation-project",
      type: "website",
      title: "Graduation Project – Business Website",
      summary:
        "A responsive business website built as a graduation project, including product, customer, and order management with database integration.",
      stack: ["HTML", "CSS", "PHP", "SQL"],
      links: {
        live: "",
        github: "",
      },
      media: {
        cover: "/images/graduation-project.png",
        gallery: [],
        video: "",
      },
      featured: false,
    },
  ];
  
  // ================================
  // CONTACT
  // ================================
  export const CONTACT = {
    email: "rashaalhajhasan@gmail.com",
    phone: "+961 3 676 425",
    whatsapp: "https://wa.me/9613676425",
    github: "https://github.com/rasha403", 
    linkedin: "https://www.linkedin.com/in/rasha-haj-hasan-b4586624a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Biy9ryN2eRve7eRu9a1UKag%3D%3D", // add your profile
  };
  