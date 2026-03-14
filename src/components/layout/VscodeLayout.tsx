"use client";

import React, { useState } from "react";
import ActivityBar, { SidebarPanel } from "./ActivityBar";
import StatusBar from "./StatusBar";
import FileExplorerSidebar from "../sidebar/FileExplorerSidebar";
import EditorGroup from "../editor/EditorGroup";
import { FileTreeNode } from "@/types/fileTree";

interface VscodeLayoutProps {
  data: FileTreeNode[];
}

export default function VscodeLayout({ data }: VscodeLayoutProps) {
  const [activePanel, setActivePanel] = useState<SidebarPanel>("explorer");

  const sidebarVisible = activePanel !== null;

  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden bg-[var(--bg-editor)] text-[var(--text-primary)]">
      {/* Main area: Activity Bar + Sidebar + Editor */}
      <div className="flex flex-1 min-h-0">
        {/* Activity Bar */}
        <div className="w-12 shrink-0">
          <ActivityBar activePanel={activePanel} onPanelChange={setActivePanel} />
        </div>

        {/* Sidebar */}
        {sidebarVisible && (
          <div
            className="shrink-0 border-r border-[var(--border)] transition-all duration-200"
            style={{ width: 240 }}
          >
            {activePanel === "explorer" && <FileExplorerSidebar data={data} />}
            {activePanel === "search" && (
              <div className="flex items-center justify-center h-full text-[var(--text-secondary)] text-sm select-none">
                Search (coming soon)
              </div>
            )}
          </div>
        )}

        {/* Editor */}
        <div className="flex-1 min-w-0">
          <EditorGroup />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}
