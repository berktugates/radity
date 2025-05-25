"use client";
import React, { useState } from "react";
import { EstimateListItem } from "./EstimateListItem";
import { EstimateValueCard } from "./EstimateValueCard";
import Image from "next/image";
import { getEstimate } from "@/lib/api";

export const EstimateCard: React.FC = () => {
  const [hours, setHours] = useState(40);
  const [budget, setBudget] = useState(0);

  const handleEstimate = async()=>{
    try{
      const data = await getEstimate(240,hours);
      setBudget(data.budget);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="shadow-[0_12px_40px_rgba(34,34,39,0.08)] border border-Grayscale/100 lg:w-[309px] xl:max-h-[1024px] xl:w-[509px] mb-6 lg:mb-5 xl:mb-[25px]">
      <div
        id="estimate-counter-section"
        className="flex flex-col items-center gap-y-4 md:gap-y-0 xl:flex-row lg:flex-col lg:gap-y-4 xl:gap-y-0 md:flex-row md:items-center md:justify-between p-4 md:p-8 lg:px-3 lg:pt-6 lg:pb-5 xl:px-12 xl:pt-10 xl:pb-7"
      >
        <h1 className=" xl:min-w-[159px] xl:leading-[19.6px] md:text-xl lg:text-lg xl:text-sm text-left flex flex-wrap text-lg">
          Average hourly rate <br /> in USD per team member
        </h1>
        <div id="counter" className="flex items-center lg:justify-center lg:w-[184px] xl:justify-start xl:w-[254px]">
          <div
            id="minus"
            onClick={() => {
              if (hours === 0) {
                setHours(0);
              } else {
                setHours((prev) => prev - 5);
              }
            }}
            className="border border-ByzantineBlue/20 flex items-center justify-center  h-[44px] w-[44px] md:h-[54px] md:w-[54px] lg:px-3 lg:py-2 lg:h-[54px] xl:h-[54px] xl:px-[13px] xl:py-[26px] cursor-pointer"
          >
            <Image
              src={"/svg/Minus.svg"}
              className="lg:w-2 lg:h-2 xl:w-4 xl:h-4"
              width={16}
              height={16}
              alt="minus"
            />
          </div>
          <div
            id="estimate-hour-value"
            className="flex items-center h-[44px] px-3  md:h-[54px] md:px-3 lg:h-[54px] lg:px-1 xl:px-4 xl:gap-x-1 xl:w-[150px] border-y border-ByzantineBlue/20"
          >
            <h1 className="font-bold text-3xl  xl:w-[72px] text-ByzantineBlue text-right">
              {hours}
            </h1>
            <h1 className="text-sm xl:leading-[19.6px] lg:text-sm text-PrimaryNavyOxford/60">
              $/hour
            </h1>
          </div>
          <div
            id="plus"
            onClick={() => setHours((prev) => prev + 5)}
            className="border border-ByzantineBlue/20 flex items-center justify-center h-[44px] w-[44px] md:w-[54px] md:h-[54px] lg:px-3 lg:py-2 xl:w-[50px] lg:h-[54px] xl:px-[15px] xl:py-[15px] cursor-pointer"
          >
            <Image
              src={"/svg/Plus.svg"}
              className="lg:w-2 lg:h-2 xl:w-4 xl:h-4"
              width={16}
              height={16}
              alt="plus"
            />
          </div>
        </div>
      </div>
      <div
        id="estimates-list-section"
        className="flex flex-col p-4 gap-y-4 md:px-8 md:py-5 md:gap-y-4 lg:gap-y-4 lg:py-7 lg:px-3 xl:gap-y-6 border-y border-Grayscale xl:py-7 xl:px-12"
      >
        <h1 className="font-bold text-3xl md:text-3xl lg:text-2xl xl:text-3xl">Your Estimate</h1>
        <div className="flex flex-col gap-y-2 md:gap-y-2 lg:gap-y-2 xl:gap-y-2">
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
        className="flex flex-col pb-5 xl:pb-7 px-4 lg:px-8 lg:py-7 lg:gap-y-4 xl:px-12 xl:py-7 xl:gap-y-6"
      >
        <div
          id="values"
          className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 py-5 gap-y-4 md:gap-y-0 md:gap-x-4 md:px-8 md:py-5 lg:px-0 lg:py-0 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3 xl:grid-cols-2 xl:gap-x-8 xl:gap-y-6"
        >
          <EstimateValueCard title={"Designer person-hours"} value={0} />
          <EstimateValueCard title={"Developer person-hours"} value={240} />
          <EstimateValueCard title={"Total man/hours"} value={240} />
          <EstimateValueCard title={"Budget"} value={budget} />
        </div>
        <div id="button-section" className="w-full">
          <button onClick={()=> handleEstimate()} className="bg-EstimateButton p-2 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-6 xl:py-4 rounded-[4px] w-full">
            <h1 className="font-bold text-white lg:text-lg xl:text-xl xl:leading-[26px]">
              Get your estimate
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};
