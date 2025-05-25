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
      className="bg-SelectPlatformBg px-4 pt-4 pb-12 md:px-8 md:pt-8 md:pb-16 lg:px-12 lg:pt-12 lg:pb-20 xl:px-16 xl:pt-16 xl:pb-24"
    >
      <div id="header-section" className="py-2 pr-4 md:py-4 md:pr-6 lg:py-6 lg:pr-8 xl:py-8 xl:pr-8">
        <h1 className="text-OxfordBlue font-semibold text-2xl xl:text-3xl xl:leading-[36px]">
          What platforms do you need?
        </h1>
      </div>
      <div
        id="platforms"
        className="grid sm:grid-cols-4 gap-y-4 md:grid-cols-2 md:gap-x-4 md:gap-y-4 xl:gap-y-0 xl:grid-cols-4 "
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
