import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className='border-r-2 border-gray-300 h-screen p-5'>
            <ul className='flex flex-col gap-3'>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `p-3 rounded-md font-semibold text-gray-500 cursor-pointer border-2 border-transparent hover:border-2 hover:border-orange-700/50 ${isActive ? ' bg-orange-700/10' : ' '}`}>
                    Dashboard
                </NavLink>
                <NavLink
                    to="/addProduct"
                    className={({ isActive }) => `p-3 rounded-md font-semibold text-gray-500 cursor-pointer border-2 border-transparent hover:border-2 hover:border-orange-700/50 ${isActive ? ' bg-orange-700/10' : ' '}`}>
                    Add Product
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => `p-3 rounded-md font-semibold text-gray-500 cursor-pointer border-2 border-transparent hover:border-2 hover:border-orange-700/50 ${isActive ? ' bg-orange-700/10' : ' '}`}>
                    Product List
                </NavLink>
                <NavLink
                    to="/orders"
                    className={({ isActive }) => `p-3 rounded-md font-semibold text-gray-500 cursor-pointer border-2 border-transparent hover:border-2 hover:border-orange-700/50 ${isActive ? ' bg-orange-700/10' : ' '}`}>
                    Orders
                </NavLink>
            </ul>
        </div>
    )
}
