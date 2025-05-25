import React from 'react'

export const EstimateListItem:React.FC<{title:string}> = ({title}) => {
  return (
    <div>
        <h1 className='xl:text-sm text-PrimaryNavyOxford/60 xl:leading-[19.6px]'>{title}</h1>
        {/* <div>
                burada array içinde seçili olanlar listelenecek. Eğer hiç yoksa soru işareti
        </div> */}
    </div>
  )
}
