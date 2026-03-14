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
    <div className="flex items-center justify-between px-2 bg-[var(--bg-statusbar)] text-[var(--text-white)] text-xs select-none h-[22px] min-h-[22px]">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Git branch */}
        <span className="flex items-center gap-1">
          <VscSourceControl size={14} />
          <span>main</span>
        </span>

        {/* Errors & Warnings */}
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-0.5">
            <VscError size={14} />
            <span>0</span>
          </span>
          <span className="flex items-center gap-0.5">
            <VscWarning size={14} />
            <span>0</span>
          </span>
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>{languageLabel}</span>
        <VscBell size={14} />
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
