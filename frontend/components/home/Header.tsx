import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="lg:w-full lg:flex lg:items-center lg:pt-14 lg:pb-24 lg:px-16">
      <div id="header-texts" className="lg:flex lg:flex-col lg:gap-y-8">
        <h1 className="lg:text-5xl lg:leading-[57.6px] lg:font-extrabold">
          Navigate Your App&apos;s Development Journey
        </h1>
        <p className="lg:text-xl lg:leading-[1.4]">
          Our expertise-backed Project Estimation Tool assists in calculating
          projected development time and budget. Choose options below that best
          characterize your app, outlining the features you need for a precise
          estimation based on our extensive software product experience.
        </p>
      </div>
      <Image
        src={"/img/Header.png"}
        width={1440}
        height={750}
        alt="header"
        className="lg:w-[649px] lg:h-[598px]"
      />
    </div>
  );
};
