import React from 'react'
import { PlatformCard } from './PlatformCard'

export const SelectPlatform = () => {
  return (
    <div id='select-platform' className='lg:px-16 lg:pt-16 lg:pb-24'>
        <div id='header-section' className='lg:py-8 lg:pr-8'>
            <h1 className='text-OxfordBlue lg:text-3xl lg:font-semibold lg:leading-[36px]'>What platforms do you need?</h1>
        </div>
        <div id='platforms' className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4'>
            <PlatformCard title='Web' description='A web app' />
            <PlatformCard title='Web' description='A web app' />
            <PlatformCard title='Web' description='A web app' />
            <PlatformCard title='Web' description='A web app' />
        </div>
    </div>
  )
}
