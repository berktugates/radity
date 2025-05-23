import React from 'react'
import {ChevronRight} from 'lucide-react'
import { Colors } from '@/constants/Colors'

export const QuestionCard:React.FC<{title:string}> = ({title}) => {
  return (
    <div className='lg:px-6 lg:py-9 bg-ByzantineBlue/10 flex items-center justify-between'>
        <h1 className='font-bold lg:text-2xl text-ByzantineBlue'>{title}</h1>
        <ChevronRight color={Colors.ByzantineBlue} />
    </div>
  )
}
