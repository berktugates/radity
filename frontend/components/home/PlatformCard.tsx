import Image from 'next/image'
import React from 'react'

interface IPlatformCard{
    title:string,
    description:string
}

export const PlatformCard:React.FC<IPlatformCard> = ({title,description}) => {
  return (
    <div className='bg-ByzantineBlue border-4 border-NeonAqua lg:p-9'>
        <div className='flex justify-between mb-3'>
            <Image src={'/img/web.png'} className='lg:w-20 lg:h-20' width={80} height={80} alt='web-platform' />
            <Image src={'/img/Choice.png'} className='lg:w-12 lg:h-12' width={48} height={48} alt='chocie-selected' />
        </div>
        <div>
            <h1 className='font-bold lg:text-2xl'>{title}</h1>
            <p className='lg:text-base'>{description}</p>
        </div>
    </div>
  )
}
