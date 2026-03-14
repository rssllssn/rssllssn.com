"use client";

import React from "react";
import { FileTreeNode } from "@/types/fileTree";
import TreeNode from "./TreeNode";
import { VscEllipsis } from "react-icons/vsc";

interface FileExplorerSidebarProps {
  data: FileTreeNode[];
}

export default function FileExplorerSidebar({ data }: FileExplorerSidebarProps) {
  return (
    <div className="flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border)] overflow-hidden select-none h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-[11px] font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
        <span>Explorer</span>
        <button className="text-[var(--text-secondary)] hover:text-[var(--text-white)] transition-colors cursor-pointer">
          <VscEllipsis size={16} />
        </button>
      </div>

      {/* Workspace label */}
      <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)]">
        rssllssn.dev
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-1">
        {data.map((node) => (
          <TreeNode key={node.id} node={node} depth={0} />
        ))}
      </div>
    </div>
  );
}
