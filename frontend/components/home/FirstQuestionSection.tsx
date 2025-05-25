import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import React, { useEffect } from "react";
import { QuestionBox } from "./QuestionBox";
import { HorizontalQuestionBox } from "./HorizontalQuestionBox";
import { firstSection } from "@/constants/Questions";
import { usePlatform } from "@/context/PlatformContext";

export const FirstQuestionSection: React.FC = () => {
  const { toggleCard, toggleSection, selectedQuestionCards, openSectionIds } =
    useToggle();
    const{isSelectedPlatform} =  usePlatform();

    useEffect(() => {
      if (isSelectedPlatform) {
        if (!selectedQuestionCards.includes("first")) {
          toggleCard("first");
        }
        if (!openSectionIds.includes(firstSection[0].id)) {
          toggleSection(firstSection[0].id);
        }
      }
    }, [isSelectedPlatform]);
    
  return (
    <div className="bg-white flex flex-col">
      <div className="flex items-center justify-between bg-ByzantineBlue/10 p-4 md:px-8 md:py-4 lg:w-[619px] lg:px-4 lg:py-7 xl:w-[819px] xl:px-6 xl:py-9">
        <h2 className="text-ByzantineBlue font-bold xl:text-2xl xl:leading-[31.2px]">
          Design and Development Essentials
        </h2>
        <Image
          onClick={() => toggleCard("first")}
          src={"/svg/ChevronRight.svg"}
          className={`xl:w-9 transition-transform ${
            selectedQuestionCards.includes("first") ? "-rotate-90" : ""
          }`}
          width={36}
          height={36}
          alt="chevron-right"
        />
      </div>
      {selectedQuestionCards.includes("first") && (
        <>
          <div className="flex flex-col xl:gap-y-6 xl:mt-10">
            {firstSection.slice(0, 3).map((section, order) => (
              <div
                key={section.id}
                className={`border ${
                  openSectionIds.includes(section.id)
                    ? "lg:px-[32px] lg:pb-6 xl:px-[32px] xl:pb-8"
                    : "xl:px-6 xl:py-8"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer px-4 md:px-7 lg:px-4  xl:px-0"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center py-4 md:py-6 gap-x-2 xl:py-8">
                    <h3 className="lg:text-xl xl:text-3xl text-ByzantineBlue/20">
                      {section.id}
                    </h3>
                    <h3 className="lg:text-xl xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">
                      {section.title}
                    </h3>
                  </div>
                  <Image
                    width={36}
                    height={36}
                    alt="chevron-right"
                    src={"/svg/ChevronRight.svg"}
                    className={`xl:w-9 xl:h-9 transition-transform ${
                      openSectionIds.includes(section.id) ? "-rotate-90" : ""
                    }`}
                  />
                </div>
                <div
                  id="content"
                  className={order === 2 ? "flex flex-col" : "flex xl:gap-x-4"}
                >
                  {openSectionIds.includes(section.id) &&
                    (order === 2 ? (
                      <div className="flex flex-col xl:gap-y-4">
                        <HorizontalQuestionBox section={section} />
                      </div>
                    ) : (
                      <QuestionBox section={section} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
