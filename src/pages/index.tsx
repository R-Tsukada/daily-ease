import React from 'react'
import Link from 'next/link'
import PageSelect from '../container/templates/PageSelect'

const Home = () =>
  (
    <div className='flex justify-center min-h-screen'>
      <div className='mt-5'>
        <h2 className='text-2xl font-bold text-center mb-4'>Daily Ease</h2>
        <Link href='/Questions'><span className='hover:enabled'><PageSelect /></span></Link>
      </div>
    </div>
  )

export default Home
