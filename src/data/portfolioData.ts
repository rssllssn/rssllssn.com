import { FileTreeNode } from "@/types/fileTree";
import { about } from "./sections/about";
import { contact } from "./sections/contact";
import { apexTrackerF1 } from "./projects/apexTrackerF1";
import { birchCreekBuilding } from "./projects/birchCreekBuilding";
import { cryptartistStudio } from "./projects/cryptartistStudio";
import { sitefari } from "./projects/sitefari";
import { taglishTranslator } from "./projects/taglishTranslator";

const projectsFolder: FileTreeNode = {
  id: "projects",
  name: "projects",
  type: "folder",
  children: [apexTrackerF1, birchCreekBuilding, cryptartistStudio, sitefari, taglishTranslator],
};

export const portfolioData: FileTreeNode[] = [about, projectsFolder, contact];
