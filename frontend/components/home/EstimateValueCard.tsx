import React from "react";

interface IEstimateValueCard{
    title:string,
    value:number
}

export const EstimateValueCard: React.FC<IEstimateValueCard> = ({title,value}) => {
  return (
    <div id="values-card" className="flex flex-col xl:gap-y-1 xl:min-w-[190.5px]">
      <h1
        className={`xl:text-base text-center ${title === 'Total man/hours' || title === 'Budget' ? 'xl:leading-[25.6px] font-bold text-OxfordBlue' : 'xl:leading-[22.4px] text-PrimaryNavyOxford/60'}`}
      >
        {title}
      </h1>
      <h1
        className={`text-center font-bold text-OxfordBlue ${title === 'Total man/hours'|| 'Budget' ? 'xl:text-[32px] xl:leading-9' : 'xl:text-2xl xl:leading-[31.2px]'}`}
      >
        {title === 'Budget' ? '$':''}{value}
      </h1>
    </div>
  );
};
