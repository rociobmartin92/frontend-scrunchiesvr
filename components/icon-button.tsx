import { cn } from '@/lib/utils';
import React from 'react'


interface IconButtonProps {
    className?: string
    onClick: () => void,
    icon: React.ReactElement
}

const IconButton = (props: IconButtonProps) => {
const {onClick, className, icon} = props;

  return (
    <div>
        <button
       onClick={onClick}
        className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}
        > 
        {icon}
        </button>
    </div>
  )
}

export default IconButton