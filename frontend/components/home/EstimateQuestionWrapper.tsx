import React from 'react'
import { Questions } from './Questions'
import { EstimateCard } from './EstimateCard'

export const EstimateQuestionWrapper:React.FC = () => {
  return (
    <div className='flex justify-center bg-white xl:pl-16 xl:pt-16 xl:gap-x-6'>
        <Questions />
        <EstimateCard />
    </div>
  )
}