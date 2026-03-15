import { IconType } from 'react-icons'
import React from 'react'

interface CardInfoProps {
  icon: IconType
  text: string
  value: number | string
  iconSize?: string
}

export const Card_InfoMain = ({ icon: Icon, text, value, iconSize }: CardInfoProps) => {
  const iconClassName = iconSize
    ? `${iconSize} dark:text-purple-secundary text-orange-tertiary`
    : 'md:text-6xl text-4xl dark:text-purple-secundary text-orange-tertiary';

  return (
    <div className='flex flex-col justify-between'>
      <div className="flex items-center gap-6 font-bold h-15">
        <span className="md:text-3xl text-2xl text-black dark:text-gray-50">{value}</span>
        <Icon className={iconClassName}/>
      </div>

      <p className="dark:text-gray-100 text-gray-900 font-semibold md:text-base text-xs">
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
