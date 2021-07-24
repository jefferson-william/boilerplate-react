import React, { HTMLAttributes } from 'react'

const Button: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <div className={`button ${className}`}>
      <button type="button">{children || 'BUTTON'}</button>
    </div>
  )
}

export default Button
