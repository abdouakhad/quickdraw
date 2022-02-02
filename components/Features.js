import React from 'react'
import Image from 'next/image'
const Features = () => {
  return (
    <div className='feature min-h-screen'>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-vert mb-20'>Features</p>
      </div>
      <div className='grid grid-cols-3 justify-center items-center'>
        <Image
          src='/monitor.png'
          alt='NFT'
          width='500'
          height='300'
          objectFit='contain'
        />
        <Image
          src='/sniper.png'
          alt='NFT'
          width='500'
          height='300'
          objectFit='contain'
        />
        <Image
          src='/star.png'
          alt='NFT'
          width='500'
          height='300'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default Features
