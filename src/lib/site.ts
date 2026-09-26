/** Single source of truth for personal facts used across pages, SEO and structured data. */

export const SITE_URL = "https://anit.dev";

export const person = {
  name: "Anit Jha",
  fullName: "Anit Kumar Jha",
  role: "Tools & Automation Engineer",
  company: "Apple",
  team: "AOS",
  age: 23,
  school: "Netaji Subhas University of Technology",
  schoolShort: "NSUT Delhi",
  /** Used for meta descriptions and JSON-LD. Keep under ~155 characters. */
  summary:
    "Anit Jha is a Tools & Automation Engineer at Apple, working on DevOps and automation with Kubernetes, Crossplane, Go, React and TypeScript.",
  knowsAbout: [
    "DevOps",
    "Platform engineering",
    "Infrastructure as code",
    "Kubernetes",
    "Crossplane",
    "Go",
    "TypeScript",
    "React",
    "Scala",
    "Web development",
  ],
};

export type Social = {
  label: string;
  handle: string;
  url: string;
  icon: "github" | "linkedin" | "x" | "instagram";
};

export const socials: Social[] = [
  { label: "GitHub", handle: "anitkrjha", url: "https://github.com/anitkrjha", icon: "github" },
  { label: "LinkedIn", handle: "anitjha", url: "https://www.linkedin.com/in/anitjha", icon: "linkedin" },
  { label: "X", handle: "_anitjha", url: "https://x.com/_anitjha", icon: "x" },
  { label: "Instagram", handle: "anitjhaaa", url: "https://www.instagram.com/anitjhaaa", icon: "instagram" },
];

export type Role = {
  when: string;
  title: string;
  org: string;
  summary: string;
  stack: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    when: "Now",
    title: "Tools & Automation Engineer, AOS",
    org: "Apple",
    summary:
      "DevOps plus automation, or whatever we're calling it this year. I work on infrastructure as code with Crossplane on Kubernetes, write tooling in Go, and build the internal web tools on top in React and TypeScript.",
    stack: ["Kubernetes", "Crossplane", "IaC", "Go", "React", "TypeScript"],
    current: true,
  },
  {
    when: "Intern",
    title: "Software Engineering Intern, Checkout",
    org: "Apple",
    summary:
      "Worked on the checkout flow in Scala, mostly on how offers are handled at checkout.",
    stack: ["Scala"],
  },
  {
    when: "2021–25",
    title: "B.Tech, Computer Science",
    org: "NSUT Delhi",
    summary:
      "Built the site for Moksha Innovision, the university fest, and far too many side projects between classes.",
    stack: [],
  },
];

export const toolbox: { label: string; items: string[] }[] = [
  { label: "Infrastructure", items: ["Kubernetes", "Crossplane", "Infrastructure as code", "CI/CD", "Linux"] },
  { label: "Languages", items: ["Go", "TypeScript", "Scala", "Python", "Java"] },
  { label: "Frontend", items: ["React", "Next.js", "Astro", "Tailwind CSS", "Three.js"] },
  { label: "Also", items: ["Git", "Supabase", "WebSockets", "Firebase"] },
];
