import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div>
            <nav className='w-full flex justify-between p-5 bg-orange-600 text-white'>
                <h2 className='text-2xl'>Logo</h2>
                <ul className='flex items-center gap-2 text-lg'>
                    <li onClick={() => navigate('/login')}>Login</li>
                    <li onClick={() => navigate('/signup')}>Signup</li>
                </ul>
            </nav>
        </div>
    )
}
