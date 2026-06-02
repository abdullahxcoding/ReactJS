import React from 'react'
import Hero from '../components/homeComponents/hero'
import BrowseCategory from '../components/homeComponents/browseCategory'
import FeaturedProducts from '../components/homeComponents/featuredProducts'
import ShippingCard from '../components/homeComponents/shippingCard'
import SecondaryFooter from '../components/secondaryFooter'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [error, setError] = useState("")
    const getProducts = async () => {
        try {
            const response = await axios.get('https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json')

            setData(response.data)
            setisLoading(false)

        } catch (e) {
            setError(e)

            setisLoading(true)
        }



    }

    useEffect(() => {
        getProducts()


    }, [])
    return (
        <div className='bg-gray-800'>
            <Hero products={data} />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <BrowseCategory products={data} />
            <FeaturedProducts products={data} />
            <ShippingCard />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <SecondaryFooter />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <Footer />

        </div>
    )
}

export default Home