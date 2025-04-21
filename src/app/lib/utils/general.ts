// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const landingPageVideoLinks = [
  "https://www.youtube.com/embed/uSXaJWWNjtA",
  "https://www.youtube.com/embed/mIxWIl8cRgo",
  "https://www.youtube.com/embed/t3CXrUacKqg",
  "https://www.youtube.com/embed/0sjQCvQEmGM",
  "https://www.youtube.com/embed/9MtZ23yaPPs",
  "https://www.youtube.com/embed/VT9lVo9Yvyk",
  "https://www.youtube.com/embed/vjFKB0SFSMI",
];

export const objectives = [
  { text: ["Promoting physical", "well-being"] },
  { text: ["Talent identification and", "Development"] },
  { text: ["Gender equality and", "Inclusion"] },
  { text: ["Health and Social", "Awareness Campaigns"] },
  {
    text: [
      "Children and youth",
      "empowerment through",
      "education and sports",
    ],
  },
  { text: ["Environmental", "Stewardship through", "Sports"] },
  { text: ["Community Development"] },
  { text: ["Wildlife Conservation and", "Awareness"] },
];

export const whatWeDoItems = [
  {
    img: "/assets/ubuntu_1.jpeg",
    link: "/what-we-do/ubuntu",
    text: "Ubuntu Festival",
    period: "Anually",
    description: "The Ubuntu III Sports Festival \
    of Culture 2025 is a weeklong event that aims \
    to promote unity, physical well-being, cultural\
    awareness, and youth empowerment through sports \
    and traditional games.",
  },
  {
    img: "/assets/football_1.jpeg",
    link: "/what-we-do/football",
    text: "TheBestBareFootLeague in the World ",
    period: "2023 - Today",
    description: "The Best Barefoot League celebrates \
    raw talent and resilience, bringing players together \
    to compete without shoes in an authentic, grassroots \
    football experience. It unites communities globally, \
    emphasizing passion over luxury."

  },
  {
    img: "/assets/tree_1.jpeg",
    link: "/what-we-do/treetwingo",
    text: "Tree Twin Go",
    period: "Anually",
    description: "The Ubuntu III Sports Festival of \
    Culture 2025 is a weeklong event that aims to \
    promote unity, physical well-being, cultural awareness, \
    and youth empowerment through sports and traditional games. "
  },
  {
    img: "/assets/SPSP.jpg",
    link: "/what-we-do/spsp",
    text: "Satellite Primary Schools Programme",
    period: "2021 - 2023",
    description: "SPSP is an initiative that empowers \
    youth through sports and environmental conservation, \
    promoting physical activity, education, and \
    sustainable practices across Uganda.",
  },
];

