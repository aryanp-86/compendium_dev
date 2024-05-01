"use client";
import { TextGenerateEffect } from "@/app/ui/textGenerate";

const words = `Welcome to the latest edition of Bits and Bytes, where we delve into computing technology, literature, and digital art. As the Head of Computer Engineering, I'm excited to present our team's curated stories, insights, and achievements.

In this issue, we showcase the department's perspective on key topics with thought-provoking articles, interviews, and visuals. Our commitment to quality education and innovation remains steadfast as we adapt to industry changes.

We appreciate our team's dedication and creativity in crafting each piece. Whether you're an academic, professional, enthusiast, or student, we hope you find inspiration in our department's contributions.

Thank you for being part of our community. Let's continue this journey together, exploring new horizons and enriching experiences.
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
