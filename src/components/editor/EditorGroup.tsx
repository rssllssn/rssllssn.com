"use client";

import React from "react";
import EditorTabs from "./EditorTabs";
import EditorPane from "./EditorPane";

export default function EditorGroup() {
  return (
    <div className="flex flex-col min-w-0 min-h-0 overflow-hidden bg-[var(--bg-editor)]">
      <EditorTabs />
      <EditorPane />
    </div>
  );
}
