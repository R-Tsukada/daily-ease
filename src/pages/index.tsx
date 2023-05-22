import React from 'react'
import Link from 'next/link'
import StressCheckPageSelect from '../container/templates/StressCheckPageSelect'
import EnrichmentCheckPageSelect from '../container/templates/EnrichmentCheckPageSelect'

const Home = () =>
  (
    <div className='flex justify-center min-h-screen'>
      <div className='mt-5'>
        <h2 className='text-3xl font-bold text-center my-2'>DailyEase</h2>
        <p className='text-xl text-center my-2'>自分の状態を把握して、充実感のある毎日を凄そう</p>
        <p className='text-xl text-center my-4'>気になる項目を選んでみよう👇</p>
        <div className='mt-10'>
          <Link href='/OlbiQuestions'><span className='hover:enabled'><StressCheckPageSelect /></span></Link>
          <Link href='/UwesQuestions'><span className='hover:enabled'><EnrichmentCheckPageSelect /></span></Link>
        </div>
      </div>
    </div>
  )

export default Home
