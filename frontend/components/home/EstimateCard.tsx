"use client";
import React, { useState } from "react";
import { EstimateListItem } from "./EstimateListItem";
import { EstimateValueCard } from "./EstimateValueCard";
import Image from "next/image";

export const EstimateCard: React.FC = () => {
  const [hours, setHours] = useState(40);
  return (
    <div className="shadow-[0_12px_40px_rgba(34,34,39,0.08)] border border-gray-100 xl:w-[509px] xl:h-[1024px] xl:mb-[25px]">
      <div
        id="estimate-counter-section"
        className="flex xl:px-12 xl:pt-10 xl:pb-7"
      >
        <h1 className="xl:min-w-[159px] xl:leading-[19.6px] xl:text-sm text-left flex flex-wrap">
          Average hourly rate <br /> in USD per team member
        </h1>
        <div id="counter" className="flex items-center xl:w-[254px]">
          <div
            id="minus"
            onClick={() => {
              if (hours === 0) {
                setHours(0);
              } else {
                setHours((prev) => prev - 5);
              }
            }}
            className="border border-ByzantineBlue/20 flex items-center justify-center xl:w-[54px] xl:h-[54px] xl:px-[13px] xl:py-[26px] cursor-pointer"
          >
            <Image
              src={"/svg/Minus.svg"}
              className="xl:w-4 xl:h-4"
              width={16}
              height={16}
              alt="minus"
            />
          </div>
          <div
            id="estimate-hour-value"
            className="flex items-center xl:w-[150px] xl:h-[54px] xl:px-4 xl:gap-x-1 border-y border-ByzantineBlue/20"
          >
            <h1 className="font-bold xl:text-3xl xl:w-[72px] text-ByzantineBlue text-right">
              {hours}
            </h1>
            <h1 className="xl:leading-[19.6px] xl:text-sm text-PrimaryNavyOxford/60">
              $/hour
            </h1>
          </div>
          <div
            id="plus"
            onClick={() => setHours((prev) => prev + 5)}
            className="border border-ByzantineBlue/20 flex items-center justify-center xl:w-[50px] xl:h-[54px] xl:px-[15px] xl:py-[15px] cursor-pointer"
          >
            <Image
              src={"/svg/Plus.svg"}
              className="xl:w-4 xl:h-4"
              width={16}
              height={16}
              alt="plus"
            />
          </div>
        </div>
      </div>
      <div
        id="estimates-list-section"
        className="flex flex-col xl:gap-y-6 border-y border-Grayscale xl:py-7 xl:px-12"
      >
        <h1 className="font-bold xl:text-3xl">Your Estimate</h1>
        <div className="flex flex-col xl:gap-y-2">
          <EstimateListItem title="Platforms" />
          <EstimateListItem title="App size" />
          <EstimateListItem title="UI Level" />
          <EstimateListItem title="Users & Accounts" />
          <EstimateListItem title="User Generated Content" />
          <EstimateListItem title="Mobile Specific Features" />
          <EstimateListItem title="Dates & Locations" />
          <EstimateListItem title="Social & Engagement" />
          <EstimateListItem title="Billing & eCommerce" />
          <EstimateListItem title="Admin, Feedback, Analytics" />
          <EstimateListItem title="External APIs and Integrations..." />
          <EstimateListItem title="Security Hours" />
          <EstimateListItem title="App Specific Development Hours" />
        </div>
      </div>
      <div
        id="estimate-calculation-section"
        className="flex flex-col xl:px-12 xl:py-7 xl:gap-y-6"
      >
        <div
          id="values"
          className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-6"
        >
          <EstimateValueCard title={"Designer person-hours"} value={0} />
          <EstimateValueCard title={"Developer person-hours"} value={240} />
          <EstimateValueCard title={"Total man/hours"} value={240} />
          <EstimateValueCard title={"Budget"} value={0} />
        </div>
        <div id="button-section" className="w-full">
          <button className="bg-EstimateButton xl:px-6 xl:py-4 rounded-[4px] w-full">
            <h1 className="font-bold text-white xl:text-xl xl:leading-[26px]">
              Get your estimate
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};
