import { FileTreeNode } from "@/types/fileTree";

export const cryptartistStudio: FileTreeNode = {
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
};
