import React from 'react'

interface ButtonProps {
  children: string
}

const BackButton: React.FC<ButtonProps> = ({ children }) => <button type='button' className='bg-[#6066D0] hover:bg-gray-100 text-white py-2 border border-gray-400 rounded shadow w-60 px-auto my-2'>{children}</button>

export default BackButton
