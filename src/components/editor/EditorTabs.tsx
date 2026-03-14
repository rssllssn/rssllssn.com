"use client";

import React from "react";
import { useEditorStore } from "@/store/useEditorStore";
import { VscClose } from "react-icons/vsc";

export default function EditorTabs() {
  const openTabs = useEditorStore((s) => s.openTabs);
  const activeTabId = useEditorStore((s) => s.activeTabId);
  const setActiveTab = useEditorStore((s) => s.setActiveTab);
  const closeTab = useEditorStore((s) => s.closeTab);

  if (openTabs.length === 0) return null;

  return (
    <div className="flex items-stretch bg-[var(--bg-tab-inactive)] border-b border-[var(--border)] overflow-x-auto select-none min-h-[35px]">
      {openTabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              group flex items-center gap-2 px-3 text-sm cursor-pointer
              border-r border-[var(--border)] whitespace-nowrap
              transition-colors duration-100
              ${
                isActive
                  ? "bg-[var(--bg-editor)] text-[var(--text-white)] border-t-2 border-t-[var(--accent)]"
                  : "bg-[var(--bg-tab-inactive)] text-[var(--text-secondary)] hover:bg-[var(--bg-tab-hover)] border-t-2 border-t-transparent"
              }
            `}
          >
            <span className="py-2">{tab.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
              className={`
                p-0.5 rounded-sm transition-colors cursor-pointer
                ${isActive ? "text-[var(--text-secondary)] hover:text-[var(--text-white)] hover:bg-[rgba(255,255,255,0.1)]" : "text-transparent group-hover:text-[var(--text-secondary)] hover:text-[var(--text-white)] hover:bg-[rgba(255,255,255,0.1)]"}
              `}
              title="Close"
            >
              <VscClose size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
