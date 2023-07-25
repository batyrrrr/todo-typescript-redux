import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}


const Input = (props: InputProps) => {
  return (
    <input className='py-2 w-full outline-none px-2' {...props} />
  )
}

export default Input