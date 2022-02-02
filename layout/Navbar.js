import Link from 'next/link'

import { useState, useEffect } from 'react'
export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 30)
    })
  }, [])

  return (
    <>
      <div className='absolute z-30 top-0 left-0 w-full'>
        <nav className='flex items-center flex-wrap bg-marron text-white py-3 lg:px-20 md:px-12 sm:px-8 px-4 font-myFont'>
          <Link href='/'>
            <a className='inline-flex items-center py-2 mr-4 '>
              <span className='text-xl  font-bold  tracking-wide text-vert'>
                Quickdraw
              </span>
            </a>
          </Link>
          <button
            className='bg-vert inline-flex p-3 hover:bg-black rounded lg:hidden text-marron ml-auto hover:text-marron outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col gap-10 lg:h-auto '>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                  Home
                </a>
              </Link>
              <Link href='#about'>
                <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                  Features
                </a>
              </Link>
              <Link href='#resume'>
                <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                  Pricing
                </a>
              </Link>
              <Link href='#services'>
                <a className='lg:inline-flex lg:w-auto w-full  py-0  items-center justify-center  font-light transition duration-500 ease-in-out hover:text-base transform sm:hover:-translate-y-1 sm:hover:translate-x-0 hover:translate-x-8 hover:scale-110 ...'>
                  FaQ
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
