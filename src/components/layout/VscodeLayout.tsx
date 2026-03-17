"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sidebarVisible = activePanel !== null && (isMobile ? sidebarOpen : true);

  const handlePanelChange = (panel: SidebarPanel) => {
    setActivePanel(panel);
    if (isMobile) {
      setSidebarOpen(panel !== null);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden bg-[var(--bg-editor)] text-[var(--text-primary)]">
      {/* Main area: Activity Bar + Sidebar + Editor */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Activity Bar */}
        <div className="w-12 shrink-0 md:w-12 flex-shrink-0">
          <ActivityBar activePanel={activePanel} onPanelChange={handlePanelChange} />
        </div>

        {/* Sidebar */}
        {sidebarVisible && (
          <>
            {/* Mobile overlay */}
            {isMobile && (
              <div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={closeSidebar}
              />
            )}
            {/* Sidebar panel */}
            <div
              className={`
                shrink-0 border-r border-[var(--border)] transition-all duration-200 
                overflow-y-auto overflow-x-hidden
                ${isMobile ? "fixed left-12 top-0 bottom-0 w-56 z-50 md:relative md:left-0 md:w-60" : "w-60"}
              `}
            >
              {activePanel === "explorer" && (
                <FileExplorerSidebar data={data} onFileSelect={isMobile ? closeSidebar : undefined} />
              )}
              {activePanel === "search" && (
                <div className="flex items-center justify-center h-full text-[var(--text-secondary)] text-sm select-none">
                  Search (coming soon)
                </div>
              )}
            </div>
          </>
        )}

        {/* Editor */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <EditorGroup />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}
