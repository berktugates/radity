import React from "react";

interface IEstimateValueCard{
    title:string,
    value:number
}

export const EstimateValueCard: React.FC<IEstimateValueCard> = ({title,value}) => {
  return (
    <div id="values-card" className="flex flex-col lg:gap-y-1 lg:min-w-[190.5px]">
      <h1
        className={`lg:text-base text-center ${title === 'Total man/hours' || title === 'Budget' ? 'lg:leading-[25.6px] font-bold text-OxfordBlue' : 'lg:leading-[22.4px] text-PrimaryNavyOxford/60'}`}
      >
        {title}
      </h1>
      <h1
        className={`text-center font-bold text-OxfordBlue ${title === 'Total man/hours'|| 'Budget' ? 'lg:text-[32px] lg:leading-9' : 'lg:text-2xl lg:leading-[31.2px]'}`}
      >
        {title === 'Budget' ? '$':''}{value}
      </h1>
    </div>
  );
};
