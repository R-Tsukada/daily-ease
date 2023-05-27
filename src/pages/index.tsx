import React from 'react'
import Link from 'next/link'
import WelcomeImage from '../../public/undraw_medicine_b-1-ol.svg'
import AccountCreateButton from '../presentational/atoms/AccountCreateButton'

const Home = () => (
  <div className='flex flex-col items-center min-h-screen'>
    <div className='mt-10'>
      <WelcomeImage
        widths={360}
        height={240}
      />
    </div>
    <h3 className='text-xl text-[#6066D0] font-[Poppins] mt-5 mb-3'>WELCOME</h3>
    <p className='text-center font-[Poppins] w-72'>メンタルの状態をモニタリングし、充実感のある毎日を過ごしましょう</p>
    <div className='mt-10'>
      <Link
        href='/TopPage'
        className='hover:enabled'
      >
        <AccountCreateButton>
          はじめてみる
        </AccountCreateButton>
      </Link>
    </div>
  </div>
)

export default Home
