import React from 'react'
import { Questions } from './Questions'
import { EstimateCard } from './EstimateCard'

export const EstimateQuestionWrapper:React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center bg-white mt-6 lg:pl-8 lg:pt-12 lg:gap-x-4 xl:pl-16 xl:pt-16 xl:gap-x-6'>
        <Questions />
        <EstimateCard />
    </div>
  )
}