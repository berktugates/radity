import { Colors } from '@/constants/Colors'
import Image from 'next/image'
import React from 'react'
import {ArrowRight} from 'lucide-react'

export const Navbar:React.FC = () => {
  return (
    <nav className='lg:flex lg:items-center lg:justify-between lg:py-9 lg:px-16'>
        <Image src={'/img/light.png'} width={150} height={75} alt='logo' />
        <div className='lg:flex lg:items-center lg:justify-center lg:gap-x-4 lg:px-6 lg:py-3'>
          <a href="https://radity.com/" className={`text-ByzantineBlue lg:font-bold lg:text-xl`}>Back to radity.com</a>
          <a href="https://radity.com/" className={`rounded-full bg-NeonAqua lg:w-9 lg:h-9 flex items-center justify-center`}>
            <ArrowRight color={Colors.ByzantineBlue} />
          </a>
        </div>
    </nav>
  )
}

