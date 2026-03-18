import { FileTreeNode } from "@/types/fileTree";

export const sitefari: FileTreeNode = {
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

A collection of modern, full-stack web applications built with cutting-edge technologies.

[View on GitHub](https://github.com/rssllssn/sitefari)

## Projects

### sitefari1

A Next.js + Supabase starter kit featuring modern authentication, database management, and a polished UI with shadcn/ui components.

## Features

- **Next.js 15 with React 19** — Latest framework with App Router
- **Supabase Backend** — Authentication and database management
- **Cookie-based Auth** — Secure authentication with supabase-ssr
- **shadcn/ui Components** — Pre-built, customizable UI components
- **Tailwind CSS** — Utility-first styling
- **TypeScript** — Full type safety
- **Lucide Icons** — Modern icon library

## Tech Stack

\`\`\`
Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn/ui · Supabase · Lucide React
\`\`\`
`,
    },
  ],
};
