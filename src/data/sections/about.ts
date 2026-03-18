import { FileTreeNode } from "@/types/fileTree";

export const about: FileTreeNode = {
  id: "about",
  name: "about",
  type: "folder",
  children: [
    {
      id: "about/README.md",
      name: "README.md",
      type: "file",
      language: "markdown",
      content: `# About Me

Hi, I'm **Russell** — a full-stack developer passionate about building creative, user-focused web applications and tools.

## What I Do

I specialize in building modern web applications with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS**. I'm experienced with both frontend and backend development, and I love working on projects that combine design, functionality, and innovation.

## Featured Projects

- **Apex Tracker F1** — Formula 1 race tracker with live data and driver standings
- **Taglish Translator** — Trilingual translation app with speech-to-text and AI-powered Taglish
- **CryptArtist Studio** — Creative suite with 11 integrated programs (contributed to VibeCodeWorker, DictatePic, and Tax Help)
- **Sitefari** — Ongoing creative project in active development
- **Birch Creek Building** — WordPress-based professional website

## Tech Stack

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Vanilla JavaScript
- **Backend:** Node.js, Vercel Serverless, Rust
- **APIs & Tools:** OpenAI, OpenRouter, Ergast F1 API, FFmpeg, Tauri
- **Other:** WordPress, HTML5, CSS3, Web Speech API

## Interests

- 🚀 Web performance & accessibility
- 🎨 UI/UX design and modern interfaces
- 🤖 AI integration in creative tools
- 🛠️ Developer tooling and automation
- 📱 Responsive, mobile-first design

---

*This portfolio is built to look and feel like VS Code — because that's where I spend most of my time.*
`,
    },
  ],
};
