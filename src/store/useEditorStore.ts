import { create } from "zustand";
import { FileTab, FileTreeNode } from "@/types/fileTree";

interface EditorState {
  /** Ordered list of open tabs */
  openTabs: FileTab[];
  /** ID of the currently active tab, or null if none */
  activeTabId: string | null;

  /** Open a file: adds to tabs if not already open, then activates it */
  openFile: (node: FileTreeNode) => void;
  /** Close a tab by id. If it was active, activate the nearest remaining tab */
  closeTab: (id: string) => void;
  /** Switch the active tab */
  setActiveTab: (id: string) => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  openTabs: [],
  activeTabId: null,

  openFile: (node) => {
    // Only files can be opened
    if (node.type !== "file") return;

    const { openTabs } = get();
    const alreadyOpen = openTabs.find((tab) => tab.id === node.id);

    if (alreadyOpen) {
      // Just activate it
      set({ activeTabId: node.id });
    } else {
      // Create a new tab and activate
      const newTab: FileTab = {
        id: node.id,
        name: node.name,
        content: node.content ?? "",
        language: node.language ?? "plaintext",
      };
      set({
        openTabs: [...openTabs, newTab],
        activeTabId: node.id,
      });
    }
  },

  closeTab: (id) => {
    const { openTabs, activeTabId } = get();
    const idx = openTabs.findIndex((tab) => tab.id === id);
    if (idx === -1) return;

    const nextTabs = openTabs.filter((tab) => tab.id !== id);

    let nextActiveId = activeTabId;
    if (activeTabId === id) {
      if (nextTabs.length === 0) {
        nextActiveId = null;
      } else if (idx >= nextTabs.length) {
        // Closed the last tab — activate the new last one
        nextActiveId = nextTabs[nextTabs.length - 1].id;
      } else {
        // Activate the tab that slid into the same index
        nextActiveId = nextTabs[idx].id;
      }
    }

    set({ openTabs: nextTabs, activeTabId: nextActiveId });
  },

  setActiveTab: (id) => {
    set({ activeTabId: id });
  },
}));
