import { FileTreeNode } from "@/types/fileTree";

export const contact: FileTreeNode = {
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
};
