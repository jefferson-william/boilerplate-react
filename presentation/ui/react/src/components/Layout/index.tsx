import React, { HTMLAttributes } from 'react'

export const Layout: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={`layout ${className}`}>{children}</div>
}
