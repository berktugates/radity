"use client";
import React, { useState } from "react";
import { PlatformCard } from "./PlatformCard";

export const SelectPlatform: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handleSelect = (title: string) => {
    setSelectedPlatform(title);
  };

  return (
    <div
      id="select-platform"
      className="bg-SelectPlatformBg xl:px-16 xl:pt-16 xl:pb-24"
    >
      <div id="header-section" className="xl:py-8 xl:pr-8">
        <h1 className="text-OxfordBlue xl:text-3xl xl:font-semibold xl:leading-[36px]">
          What platforms do you need?
        </h1>
      </div>
      <div
        id="platforms"
        className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 gap-x-4"
      >
        <PlatformCard
          title="Web app"
          description="A web app"
          selected={selectedPlatform === "Web app"}
          onClick={() => handleSelect("Web app")}
        />
        <PlatformCard
          title="Apple"
          description="An iPhone/iPad app"
          selected={selectedPlatform === "Apple"}
          onClick={() => handleSelect("Apple")}
        />
        <PlatformCard
          title="Android"
          description="An Android Phone/Tablet app"
          selected={selectedPlatform === "Android"}
          onClick={() => handleSelect("Android")}
        />
        <PlatformCard
          title="Mobile"
          description="An iOS and an Android App"
          selected={selectedPlatform === "Mobile"}
          onClick={() => handleSelect("Mobile")}
        />
      </div>
    </div>
  );
};
