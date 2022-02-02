import React from 'react'
import Image from 'next/image'
import Button from '../containers/Button'
const Pricing = () => {
  return (
    <div className='faq min-h-screen'>
      <div className='flex justify-center items-center flex-col'>
        <p className='text-vert mb-10'>Faq</p>
      </div>
      <div className=' w-8/12 m-auto '>
        <div className='mt-8'>
          {' '}
          <Button />
        </div>
        <div className='mt-8'>
          {' '}
          <Button />
        </div>
        <div className='mt-8'>
          {' '}
          <Button />
        </div>
        <div className='mt-8'>
          {' '}
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Pricing
