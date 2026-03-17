import { FileTreeNode } from "@/types/fileTree";

export const portfolioData: FileTreeNode[] = [
  {
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
- � Responsive, mobile-first design

---

*This portfolio is built to look and feel like VS Code — because that's where I spend most of my time.*
`,
      },
    ],
  },
  {
    id: "projects",
    name: "projects",
    type: "folder",
    children: [
      {
        id: "projects/apex-tracker-f1",
        name: "apex-tracker-f1",
        type: "folder",
        children: [
          {
            id: "projects/apex-tracker-f1/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# APEX TRACKER

A sleek, modern Formula 1 race tracker and dashboard. Browse race schedules, view detailed race results, and check driver standings — all powered by live F1 data.

[View on GitHub](https://github.com/rssllssn/apextrackerf1)

## Features

- **Race Schedule** — View the full season calendar with upcoming and completed race indicators
- **Race Results** — Click any completed race to see full results with driver photos and team logos
- **Driver Standings** — Live driver championship standings with headshots and team branding
- **Driver Profiles** — Browse detailed driver profiles with statistics and team information
- **Team Profiles** — Explore team information, current drivers, and constructor details
- **Season Selector** — Browse historical data for the 2023–2025 seasons or the current season
- **Smart Caching** — API responses cached in localStorage with configurable TTLs
- **Responsive Design** — Fully responsive across all devices

## Tech Stack

\`\`\`
HTML · CSS · Vanilla JavaScript · Ergast F1 API · OpenF1 API
\`\`\`

> **Disclaimer:** This is an unofficial project and is not affiliated with Formula 1, the FIA, or any related companies.
`,
          },
        ],
      },
      {
        id: "projects/birch-creek-building",
        name: "birch-creek-building",
        type: "folder",
        children: [
          {
            id: "projects/birch-creek-building/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# Birch Creek Building

A professional WordPress-based website for Birch Creek Building.

[View Website](https://www.birchcreekbuilding.com)

## Overview

Contributed to the development and maintenance of the Birch Creek Building website, a WordPress-powered platform showcasing building services and portfolio work.

## Tech Stack

\`\`\`
WordPress · PHP · MySQL
\`\`\`
`,
          },
        ],
      },
      {
        id: "projects/cryptartist-studio",
        name: "cryptartist-studio",
        type: "folder",
        children: [
          {
            id: "projects/cryptartist-studio/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# CryptArtist Studio

The Open Creative Suite — A comprehensive creative platform with eleven distinct programs sharing a unified dark theme, common project format (.CryptArt), and deep AI integration.

[View on GitHub](https://github.com/mattyjacks/CryptArtistStudio)

## Programs in the Suite

- **Media Mogul** — Video editor, image editor, and AI-powered media studio
- **VibeCodeWorker** — Personal vibe-coding IDE powered by your own API keys
- **DemoRecorder** — Screen recorder and live streamer for demos and gaming
- **GameStudio** — Combined media + code + Godot engine for game development
- **DictatePic** — GIMP-style image editor with AI generation and inpainting
- **CryptArt Commander** — Terminal-based command center for API and CLI control
- **DonatePersonalSeconds** — P2P compute resource sharing for distributed tasks
- **Luck Factory** — AI luck seed generator with guided meditation
- **Clone Tool** — Create .exe, .dmg, .deb installers from your config
- **Settings** — API key management, OpenRouter, appearance, and data
- **Suite Launcher** — Home screen to launch programs and open .CryptArt files

## Contributions

Worked on: Tax Help, VibeCodeWorker, and DictatePic features.

## Tech Stack

\`\`\`
React · TypeScript · Rust Backend · Tauri · OpenRouter AI · FFmpeg
\`\`\`
`,
          },
        ],
      },
      {
        id: "projects/sitefari",
        name: "sitefari",
        type: "folder",
        children: [
          {
            id: "projects/sitefari/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# Sitefari

An ongoing creative project in active development.

[View Website](https://sitefari.com)

## Overview

Sitefari is a continuously evolving project combining design, development, and creative innovation. Currently in active development with regular updates and improvements.
`,
          },
        ],
      },
      {
        id: "projects/taglish-translator",
        name: "taglish-translator",
        type: "folder",
        children: [
          {
            id: "projects/taglish-translator/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# Taglish Translate 🇵🇭

A beautiful, sleek, and responsive translation web application built to facilitate seamless translation between English, Tagalog, and Taglish.

[View Live](https://taglish-translate.vercel.app/) · [View on GitHub](https://github.com/rssllssn/Taglish-Translate)

## Features

- **Trilingual Translation** — Instantly translate between English, Tagalog, and Taglish
- **Taglish Vibes** — Select between "Casual" (colloquial slang) and "Formal" (professional) tones
- **Speech-to-Text** — Dictate text directly using the Web Speech API
- **Text-to-Speech** — Listen to translated text with built-in speaker button
- **Premium Interface** — Stunning glassmorphism dark-mode aesthetic
- **Rate Limited** — Built-in IP rate limiting (100 requests/hour) to prevent abuse
- **Copy to Clipboard** — One-click copying of translated text

## Tech Stack

\`\`\`
HTML5 · CSS3 · Vanilla JavaScript · Node.js · Vercel Serverless · OpenAI GPT-3.5
\`\`\`
`,
          },
        ],
      },
    ],
  },
  {
    id: "contact",
    name: "contact",
    type: "folder",
    children: [
      {
        id: "contact/README.md",
        name: "README.md",
        type: "file",
        language: "markdown",
        content: `# Contact

Let's connect! You can reach me through any of the following:

- **GitHub**: [github.com/rssllssn](https://github.com/rssllssn)
- **Email**: [rxssellsioson@gmail.com](mailto:rxssellsioson@gmail.com)

---

> *"Any sufficiently advanced technology is indistinguishable from magic."*
> — Arthur C. Clarke
`,
      },
    ],
  },
];
