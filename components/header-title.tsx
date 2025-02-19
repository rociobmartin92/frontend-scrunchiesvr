import { cn } from '@/lib/utils'
import React from 'react'

export const HeaderTitle = ({title, className} : {title: string, className?: any}) => {

console.log("className", className)
  return (
    <h3 className={cn("text-2xl my-7 sm:my-0 ml-5", className)}>{title}</h3>
  )
}

export default HeaderTitle
