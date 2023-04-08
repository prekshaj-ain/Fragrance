import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({submenus, dropdown, onClick}) => {
  return (
    <div className={`absolute top-6 z-10 bg-white p-3 gap-2 whitespace-nowrap ${dropdown ? 'flex flex-col':'hidden'}`}>
        {submenus.map((submenu,index)=>(
            <li key={index} onClick={onClick}>
                <Link to={submenu.url}>{submenu.title}</Link>
            </li>
        ))}
    </div>
  )
}

export default Dropdown