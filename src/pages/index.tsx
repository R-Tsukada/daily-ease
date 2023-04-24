import React from 'react'
import Link from 'next/link'
import PageSelect from '../container/templates/PageSelect'

const Home = () =>
  (
    <div className='flex items-center justify-center min-h-screen'>
      <div>
        <h2 className='text-2xl font-bold text-center mb-4'>Daily Ease</h2>
        <Link href='/Questions'><PageSelect /></Link>
      </div>
    </div>
  )

export default Home
