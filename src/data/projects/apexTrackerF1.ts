import { FileTreeNode } from "@/types/fileTree";

export const apexTrackerF1: FileTreeNode = {
  id: "projects/apex-tracker-f1",
  name: "apex-tracker-f1",
  type: "folder",
  children: [
    {
      id: "projects/apex-tracker-f1/README.md",
      name: "README.md",
      type: "file",
      language: "markdown",
      content: `# APEX TRACKER

A sleek, modern Formula 1 race tracker and dashboard. Browse race schedules, view detailed race results, and check driver standings — all powered by live F1 data.

[View on GitHub](https://github.com/rssllssn/apextrackerf1)

## Features

- **Race Schedule** — View the full season calendar with upcoming and completed race indicators
- **Race Results** — Click any completed race to see full results with driver photos and team logos
- **Driver Standings** — Live driver championship standings with headshots and team branding
- **Driver Profiles** — Browse detailed driver profiles with statistics and team information
- **Team Profiles** — Explore team information, current drivers, and constructor details
- **Season Selector** — Browse historical data for the 2023–2025 seasons or the current season
- **Smart Caching** — API responses cached in localStorage with configurable TTLs
- **Responsive Design** — Fully responsive across all devices

## Tech Stack

\`\`\`
HTML · CSS · Vanilla JavaScript · Ergast F1 API · OpenF1 API
\`\`\`

> **Disclaimer:** This is an unofficial project and is not affiliated with Formula 1, the FIA, or any related companies.
`,
    },
  ],
};
