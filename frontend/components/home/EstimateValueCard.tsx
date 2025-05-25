import React from "react";

interface IEstimateValueCard{
    title:string,
    value:number
}

export const EstimateValueCard: React.FC<IEstimateValueCard> = ({title,value}) => {
  return (
    <div id="values-card" className="flex flex-col lg:gap-y-1 lg:justify-center md:min-h-[80px] md:justify-between lg:min-h-fit xl:justify-start xl:gap-y-1  xl:min-w-[190.5px]">
      <h1
        className={`text-lg md:text-lg lg:text-base text-center ${title === 'Total man/hours' || title === 'Budget' ? 'xl:leading-[25.6px] font-bold text-OxfordBlue' : 'xl:leading-[22.4px] text-PrimaryNavyOxford/60'}`}
      >
        {title}
      </h1>
      <h1
        className={`text-center  font-bold text-OxfordBlue ${title === 'Total man/hours'|| title === 'Budget' ? 'text-2xl md:text-2xl lg:text-2xl xl:text-[32px] xl:leading-9' : 'text-lg md:text-xl lg:text-xl xl:text-2xl xl:leading-[31.2px]'}`}
      >
        {title === 'Budget' ? '$':''}{value}
      </h1>
    </div>
  );
};
