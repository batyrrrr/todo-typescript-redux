import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  bgColor: string,
  children: React.ReactNode,

}
const Button = (props: ButtonProps) => {
  const { bgColor, children, ...restProps } = props

  return (
    <button
      {...restProps}
      style={{ backgroundColor: `${bgColor}` }}
      className='
    px-3 py-2 rounded-sm flex items-center
   '>
      {children}
    </button>
  )
}

export default Button