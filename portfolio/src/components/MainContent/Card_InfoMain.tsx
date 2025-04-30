import { IconType } from 'react-icons'
import React from 'react'

interface CardInfoProps {
  icon: IconType
  text: string
  value: number | string
  iconSize?: string
}

export const Card_InfoMain = ({ icon: Icon, text, value, iconSize }: CardInfoProps) => {
  return (
    <div className='flex flex-col justify-between '>
      <div className="flex items-center gap-6 font-bold h-15">
        <span className="text-3xl text-black dark:text-gray-50">{value}</span>
        <Icon className={`dark:text-purple-secundary text-orange-tertiary ${iconSize ?? 'text-6xl'}`} />
      </div>

      <p className="dark:text-gray-100 text-gray-900 font-semibold">
        {text.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}
