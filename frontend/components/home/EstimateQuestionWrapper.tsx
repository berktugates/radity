import React from 'react'
import { Questions } from './Questions'
import { EstimateCard } from './EstimateCard'

export const EstimateQuestionWrapper:React.FC = () => {
  return (
    <div className='flex lg:pl-16 lg:pt-16 lg:gap-x-6'>
        <Questions />
        <EstimateCard />
    </div>
  )
}