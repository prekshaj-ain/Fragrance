import React from 'react'
import menuItems from '../utils/menuItems'
import MenuItems from './MenuItems'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-3 bg-white flex flex-col gap-3'>
      <Link to="/" className='font-oliver flex justify-center font-bold text-3xl'>BeautyBliss</Link>
      <ul className='flex justify-evenly text-xs text-gray-500 h-6'>
        {menuItems.map((menu,index)=> {
          return <MenuItems items={menu} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Navbar