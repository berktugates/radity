import Image from 'next/image'
import React from 'react'

export const Navbar:React.FC = () => {
  return (
    <nav className='flex items-center justify-between py-3 px-4 md:py-5 md:px-8 lg:py-7 lg:px-12 xl:py-9 xl:px-16'>
        <Image src={'/img/light.png'} width={150} height={75} alt='logo' />
        <div className='flex items-center justify-center md:gap-x-4 lg:gap-x-4 lg:px-2 lg:py-1.5 xl:px-6 xl:py-3'>
          <a href="https://radity.com/" className={`text-ByzantineBlue hidden md:block md:text-xl font-bold xl:text-xl`}>Back to radity.com</a>
          <a href="https://radity.com/" className={`rounded-full bg-NeonAqua xl:w-9 xl:h-9 flex items-center justify-center`}>
            <Image src={"/svg/rightArrow.svg"} className='xl:h-9 xl:w-9' width={36} height={36} alt='rightArrow' />
          </a>
        </div>
    </nav>
  )
}

