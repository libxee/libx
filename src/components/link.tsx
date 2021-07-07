import React, { FC } from 'react'

interface IlinkProps {
  children: React.ReactChild
  href: string
}

const Link: FC<IlinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      style={{ boxShadow: 'none', marginRight: '10px', textDecoration:'underline' }}
    >
      {children}
    </a>
  )
}

export default Link
