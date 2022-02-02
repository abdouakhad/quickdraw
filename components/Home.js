import React from 'react'
import Image from 'next/image'
export default function HomePage() {
  return (
    <div className='home text-black min-h-screen py-20'>
      <div className='  '>
        <div className='flex justify-center items-center relative'>
          <Image
            src='/img.png'
            alt='NFT'
            width='500'
            height='300'
            objectFit='contain'
          />
        </div>
        <p className='text-bleu text-center mt-2'>
          Your first and last NFT tool
        </p>
        <p className='my-5 text-center text-white md:w-5/12 sm:w-8/12 w-full m-auto'>
          The Fastest and First to every project on OpenSea & IMX. Coinbase
          coming soon
        </p>
        <div className='flex justify-center items-center mb-4'>
          <button className=' border-4 border-dotted border-vert p-2 text-vert'>
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
}
