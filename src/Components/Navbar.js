import React from 'react'

const Navbar = () => {
  return (
    <div className='py-3 bg-white flex flex-col gap-3'>
      <div className='font-oliver flex justify-center font-bold text-3xl'>BeautyBliss</div>
      <div className='flex justify-evenly w-full text-xs text-gray-500 h-5'>
        <p className='cursor-pointer hover:border-b-2 border-pink-500 hover:text-black'>Fragrances</p>
        <p className='cursor-pointer hover:border-b-2 border-pink-500 hover:text-black'>Makeup</p>
        <p className='cursor-pointer hover:border-b-2 border-pink-500 hover:text-black'>Lips</p>
        <p className='cursor-pointer hover:border-b-2 border-pink-500 hover:text-black'>Eyes</p>
        <p className='cursor-pointer hover:border-b-2 border-pink-500 hover:text-black'>Skin</p>
      </div>
    </div>
  )
}

export default Navbar