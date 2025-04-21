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

