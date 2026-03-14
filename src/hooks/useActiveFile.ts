import { useEditorStore } from "@/store/useEditorStore";
import { FileTab } from "@/types/fileTree";

/**
 * Convenience hook that returns the full FileTab for the currently active tab,
 * or null if no tab is active.
 */
export function useActiveFile(): FileTab | null {
  const activeTabId = useEditorStore((s) => s.activeTabId);
  const openTabs = useEditorStore((s) => s.openTabs);

  if (!activeTabId) return null;
  return openTabs.find((tab) => tab.id === activeTabId) ?? null;
}
