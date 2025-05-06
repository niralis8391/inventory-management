import React, { useEffect, useState } from 'react'
import { categoryAction } from '../store/category-slice'
import { useDispatch } from 'react-redux'

export const Navbar = () => {

    const dispatch = useDispatch()


    function changeHandler(e) {
        const { name, value } = e.target;
        dispatch(categoryAction.getCategory(value))
    }



    return (
        <div className='absolute top-0 left-0 w-full' style={{
            fontFamily: '"Nunito", sans-serif'
        }}>
            <div>
                <div className="w-full bg-black text-white p-3">
                    <div className="py-2">
                        <div className="flex justify-center">
                            <ul className="flex flex-wrap gap-6 text-sm font-medium">
                                <li><a href="index.html" className="hover:text-orange-600">Best Sellers</a></li>
                                <li><a href="product_details.html" className="hover:text-orange-600">New Releases</a></li>
                                <li><a href="#" className="hover:text-orange-600">Today's Deals</a></li>
                                <li><a href="#" className="hover:text-orange-600">Customer Service</a></li>
                                <li><a href="register.html" className="hover:text-orange-600">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-5 flex gap-5 items-center justify-center  text- mt-10'>
                <select
                    name="category"
                    value=""
                    onChange={changeHandler}
                    className="bg-black text-white rounded-md p-2 w-fit"
                >
                    <option value="" disabled>Select...</option>
                    <option value="fashion" className="text-black">Fashion</option>
                    <option value="electronics" className="text-black">Electronics</option>
                    <option value="jewellery" className="text-black">Jewellery</option>
                </select>

                <div className=''>
                    <input type='search' className='bg-white p-2 w-xl rounded-l-md' placeholder='Search this blog' />
                    <button type='button' className='p-2 bg-orange-500 rounded-r-md cursor-pointer'>🔍</button>
                </div>
                <select defaultValue="" className='bg-white rounded-md p-2'>
                    <option value="" disabled>Select...</option>
                    <option value="english">English</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                </select>
                <button type='button' className='flex gap-2 items-center  text-white font-semibold cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 56 56"><path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797" /></svg>
                    <p>Cart</p>
                </button>
            </div>
        </div>
    )
}
