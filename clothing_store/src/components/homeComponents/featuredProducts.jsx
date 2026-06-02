import React from 'react'
import FeaturedCard from './featuredCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function FeaturedProducts(props) {
    const topRatedProducts = [...props.products]
        .sort((a, b) => b.rating.stars - a.rating.stars)
        .slice(0, 5);



    return (
        <div className='h-100  py-6'>
            <div className="flex justify-between w-[80%] mx-auto">

                <h1 className='text-3xl font-bold text-white'>Featured Products</h1>
                <Link to={'/products'} className="inline-flex items-center gap-1 text-blue-700 text-lg">
                    <span>See All</span>
                    <ArrowRight size={18} />
                </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center p-6">
                {topRatedProducts.map((product, index) => {
                    return <div key={index}><FeaturedCard item={product} /></div>
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts