"use client";

import React, { useState } from "react";
import { FileTreeNode } from "@/types/fileTree";
import { useEditorStore } from "@/store/useEditorStore";
import {
  VscChevronRight,
  VscChevronDown,
  VscFolder,
  VscFolderOpened,
  VscFile,
  VscMarkdown,
  VscCode,
} from "react-icons/vsc";

interface TreeNodeProps {
  node: FileTreeNode;
  depth: number;
}

export default function TreeNode({ node, depth }: TreeNodeProps) {
  const [expanded, setExpanded] = useState(depth === 0);
  const openFile = useEditorStore((s) => s.openFile);
  const activeTabId = useEditorStore((s) => s.activeTabId);

  const isFolder = node.type === "folder";
  const isActive = node.id === activeTabId;

  const handleClick = () => {
    if (isFolder) {
      setExpanded((prev) => !prev);
    } else {
      openFile(node);
    }
  };

  const FileIcon = getFileIcon(node);

  return (
    <div>
      <button
        onClick={handleClick}
        className={`
          flex items-center w-full gap-1 px-1 py-[2px] text-sm
          hover:bg-[var(--bg-list-hover)] cursor-pointer
          transition-colors duration-100 text-left whitespace-nowrap
          ${isActive ? "bg-[var(--bg-list-active)] text-[var(--text-white)]" : "text-[var(--text-primary)]"}
        `}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {/* Chevron (only for folders) */}
        {isFolder ? (
          expanded ? (
            <VscChevronDown size={16} className="shrink-0" />
          ) : (
            <VscChevronRight size={16} className="shrink-0" />
          )
        ) : (
          <span className="w-4 shrink-0" /> /* spacer for alignment */
        )}

        {/* Icon */}
        <FileIcon
          size={16}
          className={`shrink-0 ${isFolder ? "text-[var(--icon-folder)]" : "text-[var(--text-secondary)]"}`}
        />

        {/* Name */}
        <span className="truncate">{node.name}</span>
      </button>

      {/* Children */}
      {isFolder && expanded && node.children && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function getFileIcon(node: FileTreeNode) {
  if (node.type === "folder") {
    return VscFolderOpened;
  }
  switch (node.language) {
    case "markdown":
      return VscMarkdown;
    case "typescript":
    case "javascript":
      return VscCode;
    default:
      return VscFile;
  }
}
