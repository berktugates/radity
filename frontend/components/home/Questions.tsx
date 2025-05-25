'use client'
import React, { useState } from "react";
import {
  firstSection,
  secondSection,
  thirdSection,
} from "../../constants/Questions";
import { QuestionBox } from "./QuestionBox";
import { HorizontalQuestionBox } from "./HorizontalQuestionBox";
import Image from "next/image";
import { useToggle } from "@/hooks/useToggle";

export const Questions: React.FC = () => {
  const {toggleCard,toggleSection,selectedQuestionCards,openSectionIds} = useToggle();

  return (
    <>
      <div className="flex flex-col xl:gap-y-8 xl:pr-6 xl:pb-16">
        {/* first section */}
        <div className="bg-white flex flex-col">
          <div className="flex items-center justify-between bg-ByzantineBlue/10 xl:w-[819px] xl:px-6 xl:py-9">
            <h2 className="text-ByzantineBlue font-bold xl:text-2xl xl:leading-[31.2px]">
              Design and Development Essentials
            </h2>
            <Image onClick={() => toggleCard("first")}  src={'/svg/ChevronRight.svg'} className={`xl:w-9 transition-transform ${selectedQuestionCards.includes('first') ? '-rotate-90' : ''}`} width={36} height={36} alt="chevron-right" />
          </div>
          {selectedQuestionCards.includes('first') && (
            <>
              {firstSection.slice(0,2).map((section) => (
                <div key={section.id} className="xl:px-[35px] xl:pb-8 border">
                  <div 
                    className="flex items-center justify-between cursor-pointer" 
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center xl:py-8 xl:gap-x-2">
                      <h3 className="xl:text-3xl text-ByzantineBlue/20">{section.id}</h3>
                      <h3 className="xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">{section.title}</h3>
                    </div>
                    <Image width={36} height={36} alt="chevron-right"  src={'/svg/ChevronRight.svg'} className={`xl:w-9 xl:h-9 transition-transform ${openSectionIds.includes(section.id) ? '-rotate-90' : ''}`} />
                  </div>
                  <div id="content" className="flex xl:gap-x-4"> 
                    {openSectionIds.includes(section.id) && <QuestionBox section={section} />}
                  </div>
                </div>
              ))}
              <div id="users-acc">
                {firstSection.slice(2,3).map((section) => (
                  <div key={section.id} className="xl:px-[35px] xl:pb-8 border">
                    <div 
                      className="flex items-center justify-between cursor-pointer" 
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center xl:py-8 xl:gap-x-2">
                        <h3 className="xl:text-3xl text-ByzantineBlue/20">{section.id}</h3>
                        <h3 className="xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">{section.title}</h3>
                      </div>
                      <Image width={36} height={36} alt="chevron-right"  src={'/svg/ChevronRight.svg'} className={`xl:w-9 xl:h-9 transition-transform ${openSectionIds.includes(section.id) ? '-rotate-90' : ''}`} />
                    </div>
                    <div id="content" className="flex flex-col xl:gap-y-4"> 
                      {openSectionIds.includes(section.id) && <HorizontalQuestionBox section={section} />}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* second Section */}
        <div className="bg-white flex flex-col">
          <div className="flex items-center justify-between bg-ByzantineBlue/10 xl:px-6 xl:py-9">
            <h2 className="text-ByzantineBlue font-bold xl:text-2xl xl:leading-[31.2px]">
              Content and Interaction
            </h2>
            <Image onClick={() => toggleCard("second")}  src={'/svg/ChevronRight.svg'} className={`xl:w-9 transition-transform ${selectedQuestionCards.includes('second') ? '-rotate-90' : ''}`} width={36} height={36} alt="chevron-right" />
          </div>
          {selectedQuestionCards.includes('second') && (
            <>
              {secondSection.map((section) => (
                <div key={section.id} className="xl:px-[35px] xl:pb-8 border"> 
                  <div 
                    className="flex items-center justify-between cursor-pointer" 
                    onClick={() => toggleSection(section.id)} 
                  >
                    <div className="flex items-center xl:py-8 xl:gap-x-2"> 
                      <h3 className="xl:text-3xl text-ByzantineBlue/20">{section.id}</h3>
                      <h3 className="xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">{section.title}</h3>
                    </div>
                    <Image width={36} height={36} alt="chevron-right"  src={'/svg/ChevronRight.svg'} className={`xl:w-9 xl:h-9 transition-transform ${openSectionIds.includes(section.id) ? '-rotate-90' : ''}`} />
                  </div>
                  <div id="content" className="flex flex-col xl:gap-y-4"> 
                    {openSectionIds.includes(section.id) && <HorizontalQuestionBox section={section} />}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* third Section */}
        <div className="bg-white flex flex-col">
          <div className="flex items-center justify-between bg-ByzantineBlue/10 xl:px-6 xl:py-9">
            <h2 className="text-ByzantineBlue font-bold xl:text-2xl xl:leading-[31.2px]">
              Management and Analytics
            </h2>
            <Image onClick={() => toggleCard("third")}  src={'/svg/ChevronRight.svg'} className={`xl:w-9 transition-transform ${selectedQuestionCards.includes('third') ? '-rotate-90' : ''}`} width={36} height={36} alt="chevron-right" />
          </div>
          {selectedQuestionCards.includes('third') && (
            <>
              {thirdSection.slice(0,2).map((section) => (
                <div key={section.id} className="xl:px-[35px] xl:pb-8 border">
                  <div 
                    className="flex items-center justify-between cursor-pointer" 
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center xl:py-8 xl:gap-x-2"> 
                      <h3 className="xl:text-3xl text-ByzantineBlue/20">{section.id}</h3>
                      <h3 className="xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">{section.title}</h3>
                    </div>
                    <Image width={36} height={36} alt="chevron-right"  src={'/svg/ChevronRight.svg'} className={`xl:w-9 xl:h-9 transition-transform ${openSectionIds.includes(section.id) ? '-rotate-90' : ''}`} />
                  </div>
                  <div id="content" className="flex flex-col xl:gap-y-4"> 
                    {openSectionIds.includes(section.id) && <HorizontalQuestionBox section={section} />}
                  </div>
                </div>
              ))}
              {thirdSection.slice(2,4).map((section) => (
                <div key={section.id} className="xl:px-[35px] xl:pb-8 border"> 
                  <div 
                    className="flex items-center justify-between cursor-pointer" 
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center xl:py-8 xl:gap-x-2"> 
                      <h3 className="xl:text-3xl text-ByzantineBlue/20">{section.id}</h3>
                      <h3 className="xl:text-3xl xl:leading-9 text-OxfordBlue font-medium">{section.title}</h3>
                    </div>
                    <Image width={36} height={36} alt="chevron-right"  src={'/svg/ChevronRight.svg'} className={`xl:w-9 xl:h-9 transition-transform ${openSectionIds.includes(section.id) ? '-rotate-90' : ''}`} />
                  </div>
                  <div id="content" className="flex xl:gap-x-4"> 
                    {openSectionIds.includes(section.id) && <QuestionBox section={section} />}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
