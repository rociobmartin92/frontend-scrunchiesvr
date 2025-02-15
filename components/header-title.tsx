import React from 'react'

export const HeaderTitle = ({title} : {title: string}) => {
  return (
    <h3 className="text-2xl sm:pb-8 ml-5">{title}</h3>
  )
}

export default HeaderTitle
