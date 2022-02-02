import React from 'react'

// function that returns the year
function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  const year = getYear()
  return (
    <div className='grid grid-cols-2 text-vert mb-5 px-5'>
      <div>10:23:17</div>
      <div>TOS</div>
    </div>
  )
}

export default Footer
