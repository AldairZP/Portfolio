import heroImage from "../../assets/portfolio-home/the-monolith/image-01.png";
import projectOneImage from "../../assets/portfolio-home/the-monolith/image-03.png";
import projectTwoImage from "../../assets/portfolio-home/the-monolith/image-04.png";
import projectThreeImage from "../../assets/portfolio-home/the-monolith/image-02.png";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type ProjectItem = {
  id: string;
  code: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  timeline: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
};

export const hero = {
  title: "Visual Aldair For Precision",
  description:
    "I am a designer and creative engineer focused on structural integrity and editorial clarity. My work explores the intersection of neo-brutalist architecture and high-fidelity digital systems.",
  image: heroImage,
  imageAlt:
    "Brutalist architecture with sharp concrete geometry and hard shadows",
};

export const navItems: NavItem[] = [
  { label: "Index", href: "#index", active: true },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: ProjectItem[] = [
  {
    id: "project-01",
    code: "01 / ARCH",
    title: "Metropolitan Grid",
    description: "A systematic overhaul of urban information architecture.",
    image: projectOneImage,
    alt: "High contrast aerial city layout with hard-edged architecture",
    href: "#",
  },
  {
    id: "project-02",
    code: "02 / UI",
    title: "Monolith UI",
    description: "Experimental design system built on 2px boundaries.",
    image: projectTwoImage,
    alt: "Modular interface composition with rigid blocks and monochrome accents",
    href: "#",
  },
  {
    id: "project-03",
    code: "03 / GEN",
    title: "Synthetic Nature",
    description: "Exploration of procedural generation and organic forms.",
    image: projectThreeImage,
    alt: "Abstract procedural forms blending geometric and organic structures",
    href: "#",
  },
  {
    id: "project-04",
    code: "04 / STRUC",
    title: "Linear Void",
    description:
      "Investigating the spatial depth within structural minimalist architecture.",
    image: heroImage,
    alt: "Architectural corridor with long linear perspective and deep shadows",
    href: "#",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Lead Design Technologist",
    company: "The Monolith Studio / London",
    timeline: "2022 — Pres.",
  },
  {
    role: "Senior Creative Engineer",
    company: "Grid Systems Agency / NY",
    timeline: "2019 — 2022",
  },
  {
    role: "Interaction Designer",
    company: "Brutal Digital / Berlin",
    timeline: "2017 — 2019",
  },
];

export const technologies = [
  "TypeScript",
  "React",
  "Tailwind",
  "Figma",
  "Cinema 4D",
  "Node.js",
  "WebGPU",
  "GLSL",
];

export const education: EducationItem[] = [
  {
    degree: "MSc Computational Design",
    institution: "Royal College of Art / 2017",
  },
  {
    degree: "BFA Graphic Engineering",
    institution: "Bauhaus-Universitat Weimar / 2015",
  },
];

export type SocialLink = {
  label: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/jonathanzapata" },
  { label: "GitHub", href: "https://github.com/jonathanzapata" },
  { label: "Email", href: "mailto:jonathan@themonolith.co" },
];
