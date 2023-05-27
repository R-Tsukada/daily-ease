import React from 'react'
import Link from 'next/link'
import StressCheckPageSelect from '../container/templates/StressCheckPageSelect'
import EnrichmentCheckPageSelect from '../container/templates/EnrichmentCheckPageSelect'
import TopImage from '../../public/undraw_specs_re_546x.svg'

const TopPage = () => (
  <div className='flex justify-center min-h-screen'>
    <div className='mt-5'>
      <div className='flex flex-row items-center border rounded-xl h-24 bg-teal-300'>
        <p className='flex-1 text-white text-center ml-2'>Let&apos;s Play</p>
        <TopImage
          className='flex-1'
          width={120}
          height={60}
        />
      </div>
      <div className='flex flex-col mt-10'>
        <div>
          <Link href='/OlbiQuestions'><span className='hover:enabled'><StressCheckPageSelect /></span></Link>
        </div>
        <div className='mt-3'>
          <Link href='/UwesQuestions'><span className='hover:enabled'><EnrichmentCheckPageSelect /></span></Link>
        </div>
      </div>
    </div>
  </div>
)

export default TopPage
