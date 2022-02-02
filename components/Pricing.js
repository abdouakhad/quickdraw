import React from 'react'
import Image from 'next/image'
const Pricing = () => {
  return (
    <div className='feature min-h-screen'>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-vert mb-10'>Pricing</p>
      </div>
      <div className='flex justify-center items-center relative '>
        <Image
          src='/pricing.png'
          alt='NFT'
          width='300'
          height='300'
          objectFit='contain'
        />
      </div>
      <p className='text-center text-vert mt-8'>
        Pricing: 0.1ETH/month ALWAYS in stock.
      </p>
    </div>
  )
}

export default Pricing
