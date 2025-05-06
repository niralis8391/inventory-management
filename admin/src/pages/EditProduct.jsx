import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import API from '../API/API';

export const EditProduct = () => {

    const { productId } = useParams();

    const token = localStorage.getItem("token")

    useEffect(() => {
        async function fetchProductById() {
            setLoading(true)
            try {
                const response = await API.get(`/product/getProductById/${productId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                console.log(response)
                setFormData(response.data.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProductById()
    }, [])

    return (
        <div>EditProduct</div>
    )
}
