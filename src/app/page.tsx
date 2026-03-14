"use client";

import VscodeLayout from "@/components/layout/VscodeLayout";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  return <VscodeLayout data={portfolioData} />;
}
