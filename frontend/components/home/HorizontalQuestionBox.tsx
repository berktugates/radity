'use client'
import Image from 'next/image';
import React, { useState } from 'react'

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

export const HorizontalQuestionBox:React.FC<QuestionBoxProps> = ({section}) => {
  const [selectedHorizontalQuestionNames, setSelectedHorizontalQuestionNames] = useState<string[]>([])
  const handleSelection = (title: string) => {
    setSelectedHorizontalQuestionNames(prev => {
      if (prev.includes(title)) {
        return prev.filter(item => item !== title);
      } else {
        return [...prev, title];
      }
    });
  };
  return (
    <>
        {section.options.map((option,index)=>(
            <div key={index} onClick={() => handleSelection(option.title)} className={`flex items-center xl:h-[108px] ${selectedHorizontalQuestionNames.includes(option.title) ? 'border-NeonAqua border-[3px] bg-NeonAqua/10' : 'border border-Grayscale bg-white'}`}>
                <div className='h-full border-r border-Grayscale flex items-center justify-center xl:p-[25px]'>
                    <Image src={option.icon} className='xl:w-[60px] xl:h-[60px]' width={60} height={60} alt='icon' />
                </div>
                <div className='flex items-center justify-between w-full xl:p-6'>
                    <div className='flex flex-col xl:gap-y-1'>
                        <h1 className='xl:text-2xl text-OxfordBlue xl:leading-[31.2px]'>{option.title}</h1>
                        <h1 className={`xl:text-base xl:leading-[22.4px] text-PrimaryNavyOxford/60`}>{option.description}</h1>
                    </div>
                    {selectedHorizontalQuestionNames.includes(option.title) ? (
                      <Image 
                        src="/svg/platform/SelectedChoice.svg" 
                        className="xl:w-12 xl:h-12" 
                        width={48} 
                        height={48} 
                        alt="choice" 
                      />
                    ) : (
                      <div className="xl:w-12 xl:h-12 border border-Grayscale rounded-full" />
                    )}
                </div>
             
            </div>
        ))}
    </>
    
  )
}
