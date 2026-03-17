"use client";

import React from "react";
import { useActiveFile } from "@/hooks/useActiveFile";
import { VscSourceControl, VscError, VscWarning, VscBell } from "react-icons/vsc";

export default function StatusBar() {
  const activeFile = useActiveFile();

  const languageLabel = activeFile
    ? formatLanguage(activeFile.language)
    : "Plain Text";

  return (
    <div className="flex items-center justify-between px-2 md:px-3 bg-[var(--bg-statusbar)] text-[var(--text-white)] text-[10px] md:text-xs select-none h-[28px] md:h-[22px] min-h-[28px] md:min-h-[22px] gap-2 overflow-x-auto">
      {/* Left section */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        {/* Git branch */}
        <span className="flex items-center gap-1 hidden sm:flex">
          <VscSourceControl size={14} />
          <span>main</span>
        </span>

        {/* Errors & Warnings */}
        <span className="flex items-center gap-1 md:gap-2">
          <span className="flex items-center gap-0.5">
            <VscError size={14} />
            <span className="hidden sm:inline">0</span>
          </span>
          <span className="flex items-center gap-0.5">
            <VscWarning size={14} />
            <span className="hidden sm:inline">0</span>
          </span>
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-1 md:gap-3 ml-auto shrink-0">
        <span className="hidden md:inline">Ln 1, Col 1</span>
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden sm:inline">{languageLabel}</span>
        <button 
          className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors"
          aria-label="Notifications"
        >
          <VscBell size={14} />
        </button>
      </div>
    </div>
  );
}

function formatLanguage(lang: string): string {
  const map: Record<string, string> = {
    markdown: "Markdown",
    typescript: "TypeScript",
    javascript: "JavaScript",
    json: "JSON",
    css: "CSS",
    html: "HTML",
    plaintext: "Plain Text",
  };
  return map[lang] ?? lang;
}
