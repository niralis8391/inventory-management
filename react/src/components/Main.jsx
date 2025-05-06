import React from 'react'
import background from '../assets/banner-bg.png'

export const Main = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col' style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            {/* <img src={background} className='w-full h-fit' /> */}
            <h1 className='text-7xl font-bold text-center text-white capitalize' style={{
                fontFamily: '"Nunito", sans-serif'
            }}>Get Start<br />
                Your favriot shoping</h1>
            <button type='button' className='px-5 py-1 bg-black text-white mt-5 text-2xl rounded-md'>Buy Now</button>
        </div>
    )
}
