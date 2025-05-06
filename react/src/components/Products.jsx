import React, { useEffect, useRef, useState } from 'react'
import API from '../API/API';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';

export const Products = () => {

  const [products, setProducts] = useState([]);

  const selectedCategory = useSelector(state => state.category.category);

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function fetchByCategory() {
      setLoading(true)
      try {

        const response = await API.get(`/product/getProductByCategory/${selectedCategory}`)
        if (response.status === 200) {
          setProducts(response.data.product)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchByCategory()
  }, [selectedCategory])

  if (!products) {
    return <p className='m-5 capitalize'>no products found.</p>
  }

  if (loading) {
    return <p className=' capitalize w-full h-screen z-60 text-white text-2xl bg-orange-600/50 absolute left-0 top-0 flex items-center justify-center'>Loading...</p>
  }

  return (
    <div className='py-10 mx-10'>
      <h2 className='capitalize text-2xl font-semibold py-10 text-center'>{selectedCategory}</h2>
      <div className="flex flex-wrap items-center gap-3 w-full  h-full mt-5">
        {products.map((product) => (
          <div className="bg-white border-2 w-sm h-xl flex flex-col justify-between items-start border-gray-200 rounded-lg p-4">
            <img
              src={product.image}
              alt={product.productName}
              className='w-full h-64 object-contain my-5 rounded-md'
            />
            <div className='flex flex-col justify-between items-start'>
              <h2 className="text-lg font-semibold capitalize mt-4">{product.productName}</h2>
              <h3 className="text-lg text-gray-600 capitalize py-2">{product.description}</h3>
              <p className="text-orange-600 font-semibold">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
