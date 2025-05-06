import React from 'react'
import { SideBar } from '../components/SideBar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div className='flex'>
            <div className=' w-1/5'>
                <SideBar />
            </div>
            <div className='w-full m-5'>
                <Outlet />
            </div>
        </div>
    )
}
