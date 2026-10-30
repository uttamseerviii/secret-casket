const RESUME_FILE_ID = "1Iopr-MZdNGWdHOlpAhOkyixZKGsC7EXn"

export const RESUME_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview?pli=1`
export const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`

export const personalLinks = {
  email: "uttamseerviii@gmail.com",
  github: "https://github.com/uttamseervi",
  linkedin: "https://www.linkedin.com/in/uttam-seervi-8500032ab/",
}

export type ProjectLayout = "featured" | "compact" | "wide" | "narrow"

export type Project = {
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  sourceUrl: string
  liveDemo?: string
  layout: ProjectLayout
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "Mind Dump",
    category: "Full-stack web application",
    description:
      "I built this blogging platform to explore content creation, rich-text editing, authentication, and search.",
    image:
      "https://res.cloudinary.com/duphxfug7/image/upload/v1746548392/Screenshot_2025-05-06_214917_zcswex.png",
    imageAlt: "Mind Dump blogging platform screenshot",
    technologies: ["Next.js", "Prisma", "NeonDB", "ShadCN"],
    sourceUrl: "https://github.com/uttamseervi/Mind-Dump",
    liveDemo: "https://mind-dump-taupe.vercel.app/",
    layout: "wide",
    featured: true,
  },
  {
    name: "True Feedback",
    category: "Full-stack web application",
    description:
      "I built this anonymous feedback app around feedback collection, user authentication, and an administrative interface.",
    image:
      "https://res.cloudinary.com/duphxfug7/image/upload/v1744520111/Screenshot_2025-04-13_102155_nxod17.png",
    imageAlt: "True Feedback anonymous feedback application screenshot",
    technologies: ["Next.js", "NextAuth", "MongoDB", "Tailwind CSS", "ShadCN"],
    sourceUrl: "https://github.com/uttamseervi/True-Feedback",
    liveDemo: "https://true-feedback-one.vercel.app/",
    layout: "featured",
    featured: true,
  },
  {
    name: "Hotel Management System",
    category: "Hotel management application",
    description:
      "I built a hotel management app centered on room booking and availability, customer management, and administration.",
    image:
      "https://res.cloudinary.com/duphxfug7/image/upload/v1734163975/b7ude6bdirfcgadyfznt.png",
    imageAlt: "Hotel Management System application screenshot",
    technologies: ["Node.js", "MongoDB", "Vite"],
    sourceUrl: "https://github.com/uttamseervi/Hotel-Manegement-System",
    layout: "compact",
  },
  {
    name: "EmotionVox",
    category: "Machine learning · audio processing",
    description:
      "I explored emotion recognition across text and voice, combining machine-learning models with audio processing.",
    image:
      "https://res.cloudinary.com/duphxfug7/image/upload/v1744450750/35bc6879-3fce-4654-b481-8a9e96dc7ac8.png",
    imageAlt: "EmotionVox text and voice emotion recognition screenshot",
    technologies: ["Next.js", "Flask", "Machine-learning models"],
    sourceUrl: "https://github.com/uttamseervi/emotions-augment-ai-hackathon",
    layout: "compact",
  },
  {
    name: "Fundify",
    category: "Decentralized crowdfunding",
    description:
      "I built this decentralized crowdfunding platform to explore blockchain technology and smart contracts.",
    image:
      "https://res.cloudinary.com/duphxfug7/image/upload/v1748260391/3e5d6f73-1938-44bf-90f7-08cbae61cf62.png",
    imageAlt: "Fundify decentralized crowdfunding platform screenshot",
    technologies: ["Next.js", "Solidity", "Thirdweb"],
    sourceUrl: "https://github.com/uttamseervi/Fundify-Decentralized-Crowdfunding-Platform",
    liveDemo: "https://fundify-nine.vercel.app/",
    layout: "narrow",
  },
]

export const skillGroups = [
  {
    title: "Systems & DevOps",
    description: "The infrastructure side I’m exploring more deeply now.",
    items: ["Linux", "Docker", "Git", "CI/CD", "AWS"],
    layout: "systems",
  },
  {
    title: "Programming languages",
    description: "Languages I’ve used to shape applications and services.",
    items: ["Python", "JavaScript", "TypeScript"],
    layout: "languages",
  },
  {
    title: "Backend & APIs",
    description: "Frameworks I’ve used to build application logic.",
    items: ["Node.js", "Express", "Django", "Flask"],
    layout: "backend",
  },
  {
    title: "Frontend & applications",
    description: "The user-facing side of my software projects.",
    items: ["React", "Next.js"],
    layout: "frontend",
  },
  {
    title: "Databases & data access",
    description: "Data stores and access tools across my projects.",
    items: ["MongoDB", "Prisma", "NeonDB"],
    layout: "data",
  },
  {
    title: "Blockchain · selected projects",
    description: "A focused set from my Web3 project work.",
    items: ["Solidity", "Thirdweb", "Web3.js", "Ethers.js"],
    layout: "blockchain",
  },
] as const
