import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white'>
        <div className=' bg-cyan-700 w-full h-2'></div>
        <div className='bg-red-500 h-20 flex items-center justify-between px-5'>
          <div className='flex gap-7'>
          <h1 className='font-bold text-2xl '>Kalvium</h1>
          <ul className='flex antialiased items-center gap-3 text-[#99f6e4]'>
            <li>About Us</li>
            <li>Contacts</li>
            <li>Courses</li>
          </ul>
          </div>
          <button className='btn border-2 px-6 py-2 rounded-md'>Login</button>
        </div>
    </div>
  )
}

export default Navbar