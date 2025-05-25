'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

interface QuestionBoxProps {
  section: {
    id: string;
    title: string;
    options: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({ section }) => {
  const [selectedQuestionBox,setSelectedQuestionBox] = useState<string>("");
  return (
    <>
      {section.options.map((option, index) => (
        <div
        onClick={()=>setSelectedQuestionBox(option.title)}
          key={index}
          className={`rounded-[4px] bg-white lg:w-10  xl:h-[236px] xl:w-[239px] ${selectedQuestionBox ===option.title ? "border-NeonAqua border-4" : "border border-Grayscale"}`}
        >
          <div className="xl:px-6 xl:pt-6 xl:pb-4 flex items-center justify-between w-full">
            <Image
              src={option.icon}
              width={60}
              height={60}
              className="xl:w-[60px] xl:h-[60px]"
              alt={option.title}
            />
            {selectedQuestionBox===option.title ? <Image src={"/svg/platform/SelectedChoice.svg"} className="xl:w-12 xl:h-12" width={48} height={48} alt="choice" /> : <Checkbox />}
          </div>
          <div className="xl:px-6 xl:pt-4 xl:pb-7">
            <h4 className="font-bold xl:text-2xl xl:leading-[31.2px]">
              {option.title}
            </h4>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </div>
      ))}
      </>
  );
};
