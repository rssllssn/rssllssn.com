"use client";

import React, { useState } from "react";
import { VscFiles, VscSearch } from "react-icons/vsc";
import { VscGithub } from "react-icons/vsc";

export type SidebarPanel = "explorer" | "search" | null;

interface ActivityBarProps {
  activePanel: SidebarPanel;
  onPanelChange: (panel: SidebarPanel) => void;
}

const items = [
  { id: "explorer" as const, icon: VscFiles, label: "Explorer" },
  { id: "search" as const, icon: VscSearch, label: "Search" },
];

export default function ActivityBar({
  activePanel,
  onPanelChange,
}: ActivityBarProps) {
  return (
    <div className="flex flex-col items-center bg-[var(--bg-activitybar)] border-r border-[var(--border)] select-none">
      {/* Top icons */}
      <div className="flex flex-col items-center w-full flex-1">
        {items.map(({ id, icon: Icon, label }) => {
          const isActive = activePanel === id;
          return (
            <button
              key={id}
              title={label}
              onClick={() => onPanelChange(isActive ? null : id)}
              className={`
                relative flex items-center justify-center w-full h-12
                text-[var(--text-secondary)] hover:text-[var(--text-white)]
                transition-colors duration-150 cursor-pointer
                ${isActive ? "text-[var(--text-white)]" : ""}
              `}
            >
              {/* Active indicator bar */}
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--text-white)]" />
              )}
              <Icon size={24} />
            </button>
          );
        })}
      </div>

      {/* Bottom icon — GitHub */}
      <div className="flex flex-col items-center w-full pb-2">
        <a
          href="https://github.com/rssllssn"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="flex items-center justify-center w-full h-12 text-[var(--text-secondary)] hover:text-[var(--text-white)] transition-colors duration-150"
        >
          <VscGithub size={24} />
        </a>
      </div>
    </div>
  );
}
