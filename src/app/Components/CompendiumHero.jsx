"use client";
import React from "react";
import { SparklesCore } from "@/app/ui/sparkles";

export function CompendiumHero() {
  return (
    <div className="h-screen w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 bebas-font tracking-wider">
        Bits and Bytes
      </h1>
      <div className="w-[60rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[8px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4" />

        {/* Core component */}
        <div className="rounded-full mt-2 h-24 px-8">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleDensity={1500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
