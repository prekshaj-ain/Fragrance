import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const MenuItems = ({items}) => {
    const [dropDown, setDropDown] = useState(false);
    const onMouseEnter = ()=>{
        setDropDown(true);
    };
    const onMouseLeave = ()=>{
        setDropDown(false);
    }
  return (
    <div className='hover:border-b-2 border-pink-400 pb-1 relative' onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
        {items.submenu ? (
            <>
                <Link to={items.url}>{items.title}</Link>
                <Dropdown submenus={items.submenu} dropdown={dropDown}/>
            </>
        ) : (
            <Link to={items.url}>{items.title}</Link>
        )}
    </div>
  )
}

export default MenuItems