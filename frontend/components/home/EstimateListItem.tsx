import React from 'react'

export const EstimateListItem:React.FC<{title:string}> = ({title}) => {
  const renderContent = (title:string) => {
    switch (title) {
      case 'Platforms':
        return <p className='rounded-[4px] bg-NeonAqua/15 text-ByzantineBlue font-bold xl:text-sm xl:ledaing-[19.6] px-2 py-1  lg:px-1 lg:py-0.5 xl:px-2 xl:py-1'>
        Platforms
  </p>
      case 'App size':
        return <p className='rounded-[4px] bg-NeonAqua/15 text-ByzantineBlue font-bold xl:text-sm xl:ledaing-[19.6] px-2 py-1  lg:px-1 lg:py-0.5 xl:px-2 xl:py-1'>
        Medium
  </p>
      default:
        return <p className='rounded-[4px] bg-white border border-[#F8F8F9] text-[#AEADB7] font-bold xl:text-sm xl:leading-[19.6px] px-2 py-1  lg:px-1 lg:py-0.5 xl:px-2 xl:py-1'>
        ?
      </p>
    }
  };
  return (
    <div className='flex items-center gap-x-3'>
        <h1 className='xl:text-sm text-PrimaryNavyOxford/60 xl:leading-[19.6px]'>{title}</h1>    
        {renderContent(title)}
    </div>
  )
}