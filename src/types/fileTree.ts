export interface FileTreeNode {
  /** Unique identifier for the node (used as tab key) */
  id: string;
  /** Display name (e.g. "README.md") */
  name: string;
  /** Whether this is a folder or a file */
  type: "folder" | "file";
  /** Nested children (only for folders) */
  children?: FileTreeNode[];
  /** Displayable content for files */
  content?: string;
  /** Language identifier for syntax rendering (e.g. "markdown", "typescript") */
  language?: string;
}

export interface FileTab {
  /** Same id as the FileTreeNode */
  id: string;
  /** Display name shown in the tab */
  name: string;
  /** The file content to render */
  content: string;
  /** Language for the renderer */
  language: string;
}
