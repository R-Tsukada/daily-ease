import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className='flex justify-between bg-blue-700'>
    <div className='text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 pl-4'>
      <Link href='/' className='hover:underline'>
        <span className='text-white mr-1'>Daily</span><span className='text-orange-400'>Ease</span>
      </Link>
    </div>
  </div>
)

export default Header
