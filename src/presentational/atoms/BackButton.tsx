import React from 'react'

interface ButtonProps {
  children: string
}

const BackButton: React.FC<ButtonProps> = ({ children }) => <button type='button' className='bg-blue-700 hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow w-48 px-auto my-2'>{children}</button>

export default BackButton
