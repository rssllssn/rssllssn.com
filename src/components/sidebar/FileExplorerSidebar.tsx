"use client";

import React from "react";
import { FileTreeNode } from "@/types/fileTree";
import TreeNode from "./TreeNode";
import { VscEllipsis } from "react-icons/vsc";

interface FileExplorerSidebarProps {
  data: FileTreeNode[];
  onFileSelect?: () => void;
}

export default function FileExplorerSidebar({ data, onFileSelect }: FileExplorerSidebarProps) {
  return (
    <div className="flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border)] overflow-hidden select-none h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2 text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-[var(--text-secondary)] min-h-[44px] md:min-h-auto">
        <span>Explorer</span>
        <button 
          className="text-[var(--text-secondary)] hover:text-[var(--text-white)] transition-colors cursor-pointer p-1 min-w-[32px] min-h-[32px] flex items-center justify-center"
          aria-label="Explorer options"
        >
          <VscEllipsis size={16} />
        </button>
      </div>

      {/* Workspace label */}
      <div className="px-2 md:px-3 py-1 md:py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[var(--text-primary)] min-h-[44px] md:min-h-auto flex items-center">
        rssllssn.com
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-1">
        {data.map((node) => (
          <TreeNode key={node.id} node={node} depth={0} onFileSelect={onFileSelect} />
        ))}
      </div>
    </div>
  );
}
