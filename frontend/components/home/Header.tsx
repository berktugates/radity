import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#1D4ED8] via-[#2A72D5] to-[#5DFDCB]  w-full flex flex-col md:flex-row md:items-center px-8 pt-6 pb-6 md:px-12 md:pt-10 md:pb-12 lg:pt-14 lg:pb-24 lg:px-16">
      <div id="header-texts" className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
        <h1 className="text-white text-3xl md:text-4xl md:leading-[42.6px] lg:text-5xl lg:leading-[57.6px] font-extrabold">
          Navigate Your App&apos;s Development Journey
        </h1>
        <p className="text-white text-base text-lg md:text-xl  lg:text-xl lg:leading-[1.4]">
          Our expertise-backed Project Estimation Tool assists in calculating
          projected development time and budget. Choose options below that best
          characterize your app, outlining the features you need for a precise
          estimation based on our extensive software product experience.
        </p>
      </div>
      <Image
        src={"/img/banner.png"}
        width={1440}
        height={750}
        alt="header"
        className="w-[449px] lg:w-[649px] lg:h-[598px]"
      />
    </div>
  );
};
