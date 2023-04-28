import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <div className='flex justify-between bg-[#6066D0]'>
    <div className='text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight my-2 pl-3'>
      <Link href='/' className='hover:underline'>
        <span className='text-white mr-1 font-[Poppins]'>Daily</span><span className='text-orange-400 font-[Poppins]'>Ease</span>
      </Link>
    </div>
  </div>
)

export default Navbar
