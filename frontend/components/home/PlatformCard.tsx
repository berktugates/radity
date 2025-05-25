import { getImagePath } from "@/utils/imagePath";
import Image from "next/image";
import React from "react";

interface IPlatformCard {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const PlatformCard: React.FC<IPlatformCard> = ({
  title,
  description,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={()=>{
        onClick()
      }}
      className={`xl:min-w-[316px] xl:min-h-[219px] p-5 md:p-5 lg:p-7 xl:p-9 ${
        selected
          ? "bg-ByzantineBlue border-4 border-NeonAqua"
          : "bg-white border border-Grayscale"
      }`}
    >
      <div className="flex justify-between xl:w-[244px] xl:mb-3">
        <Image
          src={getImagePath(title)}
          className="xl:w-20 xl:h-20"
          width={80}
          height={80}
          alt="web-platform"
        />
        <Image
          src={
            selected
              ? "/svg/platform/SelectedChoice.svg"
              : "/svg/platform/NotSelectedChoice.svg"
          }
          className="xl:w-12 xl:h-12"
          width={48}
          height={48}
          alt="choice-selected"
        />
      </div>
      <div>
        <h1
          className={`font-bold xl:text-2xl ${
            selected ? "text-white" : "text-OxfordBlue"
          }`}
        >
          {title}
        </h1>
        <p
          className={`xl:text-base ${
            selected ? "text-Seasalt" : "text-PrimaryNavyOxford/60"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
