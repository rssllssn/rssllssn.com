import { FileTreeNode } from "@/types/fileTree";

export const taglishTranslator: FileTreeNode = {
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
};
