import Image from 'next/image'
import React from 'react'

export const Navbar:React.FC = () => {
  return (
    <nav className='xl:flex xl:items-center xl:justify-between xl:py-9 xl:px-16'>
        <Image src={'/img/light.png'} width={150} height={75} alt='logo' />
        <div className='xl:flex xl:items-center xl:justify-center xl:gap-x-4 xl:px-6 xl:py-3'>
          <a href="https://radity.com/" className={`text-ByzantineBlue xl:font-bold xl:text-xl`}>Back to radity.com</a>
          <a href="https://radity.com/" className={`rounded-full bg-NeonAqua xl:w-9 xl:h-9 flex items-center justify-center`}>
            <Image src={"/svg/rightArrow.svg"} className='xl:h-9 xl:w-9' width={36} height={36} alt='rightArrow' />
          </a>
        </div>
    </nav>
  )
}

