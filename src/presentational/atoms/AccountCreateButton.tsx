import React from 'react'

interface ButtonProps {
  children: string
}

const AccountCreateButton: React.FC<ButtonProps> = ({ children }) => <button type='button' className='bg-[#FCA82F] hover:bg-gray-100 text-white py-2 border border-none border-gray-400 rounded shadow w-60 px-auto my-2'>{children}</button>

export default AccountCreateButton
