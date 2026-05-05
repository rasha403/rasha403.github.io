// ==========================
// BRAND (used in Home, TopBar, Footer)
// ==========================
export const BRAND = {
  name: "Rasha Hasan",
  role: "Frontend Developer",
  tagline: "I build clean, user-focused websites and mobile apps.",
};

// ==========================
// CONTACT (used in Contact + Home)
// ==========================
export const CONTACT = {
  email: "your@email.com",
  phone: "+961XXXXXXXX",
  whatsapp: "https://wa.me/961XXXXXXXX",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
};

// ==========================
// ABOUT (used in About page)
// ==========================
export const ABOUT = {
  headline: "Frontend Developer passionate about building real-world products",
  bio: "I focus on creating clean UI, structured code, and user-friendly experiences across web and mobile applications.",

  highlights: [
    { title: "University", value: "Your University" },
    { title: "Current role", value: "Frontend Developer" },
    { title: "Based in", value: "Lebanon" },
  ],

  companies: [
    {
      name: "Company Name",
      role: "Frontend Intern",
      period: "2024",
      notes: "Worked on real-world web applications and UI improvements.",
    },
  ],

  skills: [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
  ],
};

// ==========================
// EXPERIENCE (used in Experience page)
// ==========================
export const EXPERIENCE = [
  {
    title: "Frontend Intern",
    company: "Company Name",
    period: "2024",
    bullets: [
      "Built responsive UI using React and Tailwind",
      "Improved user experience and page performance",
      "Collaborated with backend team",
    ],
    tech: ["React", "Tailwind", "JavaScript"],
  },
];

// ==========================
// PROJECTS (used in Home + Projects)
// ==========================
export const PROJECTS = [
  {
    id: 1,
    title: "Sample Project",
    summary: "Short description of your project and what problem it solves.",
    featured: true,
    stack: ["React", "Node.js"],
    media: {
      cover: "/images/sample.png",
      gallery: ["/images/sample.png"],
    },
  },
];