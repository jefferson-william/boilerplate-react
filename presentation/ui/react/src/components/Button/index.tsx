import React, { HTMLAttributes } from 'react'

export const Button: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <div className={`button ${className}`}>
      <button type="button">{children || 'BUTTON'}</button>
    </div>
  )
}
