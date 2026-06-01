import React from 'react'
import Hero from '../components/homeComponents/hero'
import BrowseCategory from '../components/homeComponents/browseCategory'
import FeaturedProducts from '../components/homeComponents/featuredProducts'
import ShippingCard from '../components/homeComponents/shippingCard'
import SecondaryFooter from '../components/secondaryFooter'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div className='bg-gray-800'>
            <Hero />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <BrowseCategory />
            <FeaturedProducts />
            <ShippingCard />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <SecondaryFooter />
            <div className='w-full h-0.5 bg-gray-500'></div>
            <Footer />
        </div>
    )
}

export default Home