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

Hi, I'm **Russell** — a developer who loves building things for the web.

## Background

I'm passionate about crafting clean, performant, and user-friendly applications.
I work with **React**, **Next.js**, **TypeScript**, and **Tailwind CSS** on a daily basis.

## Interests

- 🚀 Web performance & accessibility
- 🎨 UI/UX design systems
- 🛠️ Developer tooling
- 📷 Photography

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
        id: "projects/project-alpha",
        name: "project-alpha",
        type: "folder",
        children: [
          {
            id: "projects/project-alpha/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# Project Alpha

A full-stack web application built with **Next.js** and **PostgreSQL**.

## Features

- Server-side rendering with incremental static regeneration
- JWT authentication with refresh tokens
- Real-time notifications via WebSockets

## Tech Stack

\`\`\`
Next.js · React · TypeScript · PostgreSQL · Prisma · Tailwind CSS
\`\`\`
`,
          },
          {
            id: "projects/project-alpha/index.ts",
            name: "index.ts",
            type: "file",
            language: "typescript",
            content: `import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await fetchProjects();

  return NextResponse.json({
    success: true,
    projects: data,
    timestamp: new Date().toISOString(),
  });
}

async function fetchProjects() {
  // In production this would query a database
  return [
    { id: 1, name: "Project Alpha", status: "active" },
    { id: 2, name: "Project Beta", status: "in-progress" },
  ];
}
`,
          },
        ],
      },
      {
        id: "projects/project-beta",
        name: "project-beta",
        type: "folder",
        children: [
          {
            id: "projects/project-beta/README.md",
            name: "README.md",
            type: "file",
            language: "markdown",
            content: `# Project Beta

A real-time dashboard for monitoring IoT sensor data.

## Features

- Live data streaming with Server-Sent Events
- Interactive charts with D3.js
- Configurable alert thresholds

## Tech Stack

\`\`\`
React · D3.js · Node.js · Express · InfluxDB
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
