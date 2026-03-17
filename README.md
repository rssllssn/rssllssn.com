# rssllssn.com — Developer Portfolio

A sleek, modern developer portfolio styled as a VS Code editor. Browse projects, read about my work, and explore my portfolio in a unique, code-editor-inspired interface.

**Live:** [rssllssn.com](https://rssllssn.com)

## Features

- **VS Code-Inspired Design** — Familiar editor interface with activity bar, file explorer, editor tabs, and status bar
- **Project Showcase** — 5+ featured projects with detailed READMEs and tech stacks
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Dark Theme** — Professional VS Code Dark+ theme throughout
- **Markdown Support** — Projects and content rendered with full markdown support
- **Code Highlighting** — Syntax highlighting for TypeScript, JavaScript, and more
- **Mobile Optimized** — 50+ mobile-specific improvements for excellent UX on all devices

## Tech Stack

- **Framework:** Next.js 16 with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Markdown:** react-markdown with remark-gfm
- **Icons:** react-icons (VS Code icons)
- **State Management:** Zustand
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rssllssn/rssllssn.dev.git
   cd rssllssn.dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` — Start development server (hot reload enabled)
- `npm run build` — Build for production
- `npm start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure

```
rssllssn.dev/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── VscodeLayout.tsx    # Main layout container
│   │   │   ├── ActivityBar.tsx     # Left sidebar icons
│   │   │   └── StatusBar.tsx       # Bottom status bar
│   │   ├── editor/
│   │   │   ├── EditorGroup.tsx     # Editor container
│   │   │   ├── EditorTabs.tsx      # Tab bar
│   │   │   └── EditorPane.tsx      # Content display
│   │   └── sidebar/
│   │       ├── FileExplorerSidebar.tsx  # File tree
│   │       └── TreeNode.tsx             # Tree node component
│   ├── data/
│   │   └── portfolioData.ts  # Portfolio content (projects, about, contact)
│   ├── hooks/
│   │   └── useActiveFile.ts  # Hook for active file state
│   ├── store/
│   │   └── useEditorStore.ts # Zustand store for editor state
│   └── types/
│       └── fileTree.ts       # TypeScript types
├── public/
│   └── rssllssn.png         # Logo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## How to Add Your Projects

Edit `src/data/portfolioData.ts` and add a new project object to the `projects` array:

```typescript
{
  id: "projects/your-project",
  name: "your-project",
  type: "folder",
  children: [
    {
      id: "projects/your-project/README.md",
      name: "README.md",
      type: "file",
      language: "markdown",
      content: `# Your Project Name

[View on GitHub](https://github.com/yourusername/your-project)

## Description
Your project description here.

## Features
- Feature 1
- Feature 2

## Tech Stack
\`\`\`
Technology · Stack · Here
\`\`\`
`,
    },
  ],
}
```

## Customization

### Change Domain Name

Update all mentions of `rssllssn.com` to your domain:
- `src/app/layout.tsx` — Page title
- `src/components/sidebar/FileExplorerSidebar.tsx` — Workspace label
- `src/components/editor/EditorPane.tsx` — Welcome screen heading

### Update About Section

Edit the "About Me" content in `src/data/portfolioData.ts` under the `about` folder.

### Update Contact Information

Edit the contact section in `src/data/portfolioData.ts` with your links and email.

### Customize Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --bg-editor: #1e1e1e;
  --bg-sidebar: #252526;
  --accent: #007acc;
  /* ... more variables */
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

### Deploy to Other Platforms

This is a standard Next.js app, so it can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting

## Mobile Optimizations

The portfolio includes 50+ mobile-specific improvements:
- Responsive sidebar that collapses on mobile
- Touch-friendly button sizes (44px minimum)
- Responsive typography and spacing
- Optimized status bar for small screens
- Smooth scrolling and transitions
- Full accessibility support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score:** 95+
- **Page Load:** < 1s (Vercel CDN)
- **Optimized Images:** Automatic Next.js optimization
- **Code Splitting:** Automatic route-based splitting

## License

MIT — Feel free to use this as a template for your own portfolio!

## Author

**Russell Sioson**
- GitHub: [@rssllssn](https://github.com/rssllssn)
- Email: rxssellsioson@gmail.com
- Website: [rssllssn.com](https://rssllssn.com)

## Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

---

Made with ❤️ and inspired by VS Code
