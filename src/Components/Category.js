import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='my-10 py-10 flex flex-col gap-5 justify-center items-center '>
        <h1 className='font-oliver font-bold text-2xl tracking-wider'>Scent-sational moments await</h1>
        <div className='flex mx-1 gap-1 md:w-2/3 '>
            <Link to='/Mist-And-Body?filter=Mist' className='flex-1 bg-black hover:opacity-70 z-10 opacity-100 cursor-pointer relative'>
                <img src="/Assets/mists.jpg" alt="Mists" className='object-fill h-full w-full z-0'/>
                <div to='/Mist-And-Body?filter=Mist' className='absolute font-bold left-5 bottom-5 bg-white px-3 py-1 rounded-sm hover:bg-pink-300'>Mists</div>
            </Link>
            <Link to='/Mist-And-Body?filter=Lotion' className='flex-1 bg-black hover:opacity-70 z-10 opacity-100 cursor-pointer relative'>
                <img src="/Assets/lotions.jpg" alt="Lotions" className='object-fill h-full w-full z-5'/>
                <div className='absolute font-bold left-5 bottom-5 bg-white px-3 py-1 rounded-sm hover:bg-pink-300'>Lotions</div>
            </Link>
            <Link to='/Mist-And-Body?filter=Combo' className='flex-1 bg-black hover:opacity-70 z-10 opacity-100 cursor-pointer relative'>
                <img src="/Assets/combo.avif" alt="Lotions" className='object-fill h-full w-full z-5'/>
                <div className='absolute font-bold left-5 bottom-5 bg-white px-3 py-1 rounded-sm hover:bg-pink-300'>Combo</div>
            </Link>
        </div>
    </div>
  )
}

export default Category