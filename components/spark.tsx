"use client";
import React from "react";

import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[10rem] w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-5xl lg:text-7xl font-bold text-center  relative z-20">
        Biz Kimiz
      </h1>
      <div className="w-[40rem] h-24 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          className="w-full h-full"
          maxSize={1}
          minSize={0.4}
          particleColor="#f97316"
          particleDensity={1200}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_150px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
