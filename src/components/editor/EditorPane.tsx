"use client";

import React from "react";
import { useActiveFile } from "@/hooks/useActiveFile";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EditorPane() {
  const activeFile = useActiveFile();

  if (!activeFile) {
    return <WelcomeScreen />;
  }

  if (activeFile.language === "markdown") {
    return (
      <div className="flex-1 overflow-auto p-8 bg-[var(--bg-editor)]">
        <article className="prose prose-invert max-w-3xl mx-auto prose-headings:text-[var(--text-white)] prose-p:text-[var(--text-primary)] prose-strong:text-[var(--text-white)] prose-a:text-[var(--accent)] prose-code:text-[var(--syntax-string)] prose-code:bg-[rgba(255,255,255,0.06)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--bg-sidebar)] prose-pre:border prose-pre:border-[var(--border)] prose-blockquote:border-l-[var(--accent)] prose-li:text-[var(--text-primary)] prose-hr:border-[var(--border)]">
          <Markdown remarkPlugins={[remarkGfm]}>{activeFile.content}</Markdown>
        </article>
      </div>
    );
  }

  // Code file — render with line numbers
  const lines = activeFile.content.split("\n");
  const gutterWidth = String(lines.length).length;

  return (
    <div className="flex-1 overflow-auto bg-[var(--bg-editor)] font-mono text-sm">
      <div className="flex min-w-fit">
        {/* Line number gutter */}
        <div className="flex flex-col items-end pr-4 pl-4 py-4 text-[var(--text-line-number)] select-none bg-[var(--bg-editor)] sticky left-0">
          {lines.map((_, i) => (
            <span key={i} className="leading-6">
              {String(i + 1).padStart(gutterWidth, " ")}
            </span>
          ))}
        </div>

        {/* Code content */}
        <pre className="py-4 pr-8 flex-1">
          <code className="text-[var(--text-primary)] leading-6 block">
            {lines.map((line, i) => (
              <div key={i} className="hover:bg-[rgba(255,255,255,0.04)] leading-6">
                {highlightLine(line, activeFile.language)}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

/** Minimal syntax highlighting for demonstration */
function highlightLine(line: string, language: string): React.ReactNode {
  if (language !== "typescript" && language !== "javascript") {
    return line || "\n";
  }

  // Simple regex-based highlighting for TS/JS
  const tokens: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  const patterns: [RegExp, string][] = [
    // Comments
    [/^(\/\/.*)/, "var(--syntax-comment)"],
    // Strings (double-quoted, single-quoted, backtick)
    [/^("[^"]*"|'[^']*'|`[^`]*`)/, "var(--syntax-string)"],
    // Keywords
    [/^(import|export|from|const|let|var|function|async|await|return|if|else|new|typeof|interface|type)\b/, "var(--syntax-keyword)"],
    // Numbers
    [/^(\d+\.?\d*)/, "var(--syntax-number)"],
    // Function calls
    [/^([a-zA-Z_]\w*)\s*(?=\()/, "var(--syntax-function)"],
    // Punctuation
    [/^([{}()\[\];:,.<>=+\-*/!?&|@])/, "var(--text-secondary)"],
    // Regular identifiers
    [/^([a-zA-Z_]\w*)/, "var(--text-primary)"],
    // Whitespace
    [/^(\s+)/, ""],
  ];

  while (remaining.length > 0) {
    let matched = false;
    for (const [pattern, color] of patterns) {
      const match = remaining.match(pattern);
      if (match) {
        const text = match[0];
        if (color) {
          tokens.push(
            <span key={key++} style={{ color }}>
              {text}
            </span>
          );
        } else {
          tokens.push(<span key={key++}>{text}</span>);
        }
        remaining = remaining.slice(text.length);
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Consume one character to avoid infinite loop
      tokens.push(<span key={key++}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    }
  }

  return tokens.length > 0 ? tokens : "\n";
}

function WelcomeScreen() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[var(--bg-editor)] text-[var(--text-secondary)] select-none">
      <div className="text-center space-y-6">
        <img 
          src="/logo/rssllssn.png" 
          alt="rssllssn logo" 
          className="w-24 h-24 rounded-lg shadow-lg"
        />
        <h1 className="text-5xl font-light text-[var(--text-watermark)] tracking-tight">
          rssllssn.com
        </h1>
        <div className="space-y-2 text-sm">
          <p>
            <kbd className="px-2 py-0.5 rounded bg-[var(--bg-sidebar)] border border-[var(--border)] text-[var(--text-primary)] text-xs">
              ← Explorer
            </kbd>
            {" "}Open a file from the sidebar to get started
          </p>
        </div>
      </div>
    </div>
  );
}
