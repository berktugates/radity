"use client";
import React from "react";
import { FirstQuestionSection } from "./FirstQuestionSection";
import { SecondQuestionSection } from "./SecondQuestionSection";
import { ThirdQuestionSection } from "./ThirdQuestionSection";

export const Questions: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8  xl:pr-6 xl:pb-16">
        <FirstQuestionSection />
        <SecondQuestionSection />
        <ThirdQuestionSection />
      </div>
    </>
  );
};
