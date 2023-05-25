import React from 'react'
import Link from 'next/link'

const Navbar = () => (
  <div className='flex justify-between bg-[#6066D0]'>
    <div className='text-2xl md:text-3xl font-semibold tracking-tight md:tracking-tighter leading-tight mx-auto py-2'>
      <Link href='/' className='hover:underline'>
        <span className='text-white mr-1 font-[Poppins]'>Daily</span><span className='text-orange-400 font-[Poppins]'>Ease</span>
      </Link>
    </div>
  </div>
)

export default Navbar
