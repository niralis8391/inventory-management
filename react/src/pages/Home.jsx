import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { Products } from '../components/Products'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Products />
            <Footer />
        </div>
    )
}
