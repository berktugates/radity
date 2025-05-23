import React from "react";
import { Minus, Plus } from "lucide-react";
import { Colors } from "@/constants/Colors";
import { EstimateListItem } from "./EstimateListItem";
import { EstimateValueCard } from "./EstimateValueCard";

export const EstimateCard: React.FC = () => {
  return (
    <div className="border border-gray-100">
      <div id="estimate-counter-section" className="flex lg:px-12 lg:pt-10 lg:pb-7">
        <h1 className="lg:w-[159px]">Average hourly rate in USD per team member</h1>
        <div id="counter">
          <div id="minus" className="border border-ByzantineBlue/20">
            <Minus className="lg:w-0.5 lg:h-4" color={Colors.ByzantineBlue} />
          </div>
          <div id="estimate-hour-value" className="flex lg:px-4 lg:gap-x-1">
            <h1 className="font-bold lg:text-3xl text-ByzantineBlue text-right">
              40
            </h1>
            <h1 className="lg:leading-[19.6px] lg:text-sm text-PrimaryNavyOxford/60">
              $/hour
            </h1>
          </div>
          <div id="plus">
            <Plus className="lg:w-4 lg:h-4" color={Colors.ByzantineBlue} />
          </div>
        </div>
      </div>
      <div
        id="estimates-list-section"
        className="flex flex-col lg:gap-y-6 border-y border-Grayscale lg:py-7 lg:px-12"
      >
        <h1 className="font-bold lg:text-3xl">Your Estimate</h1>
        <div className="flex flex-col lg:gap-y-2">
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
        className="flex flex-col lg:px-12 lg:py-7 lg:gap-y-6"
      >
        <div id="values" className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
            <EstimateValueCard title={'Designer person-hours'} value={0} />
            <EstimateValueCard title={'Developer person-hours'} value={0} />
            <EstimateValueCard title={'Total man/hours'} value={0} />
            <EstimateValueCard title={'Budget'} value={0} />
        </div>
        <div id="button-section" className="w-full">
          <button className="bg-EstimateButton lg:px-6 lg:py-4 rounded-[4px] w-full">
            <h1 className="font-bold text-white lg:text-xl lg:leading-[26px]">
              Get your estimate
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};
