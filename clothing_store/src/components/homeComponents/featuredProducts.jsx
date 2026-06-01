import React from 'react'
import FeaturedCard from './featuredCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function FeaturedProducts() {
    const products = [
        { id: 1, name: "Air Runner Pro" },
        { id: 2, name: "Air Max" },
        { id: 3, name: "Jordan" },
        { id: 4, name: "Pegasus" },
        { id: 5, name: "Revolution" },
    ];

    return (
        <div className='h-100  py-6'>
            <div className="flex justify-between w-[80%] mx-auto">

                <h1 className='text-3xl font-bold text-white'>Featured Products</h1>
                <Link href="#" className="inline-flex items-center gap-1 text-blue-700 text-lg">
                    <span>See All</span>
                    <ArrowRight size={18} />
                </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center p-6">
                {products.map((product) => {
                    return <FeaturedCard title={product.name} />
                })}
            </div>
        </div>
    )
}

export default FeaturedProducts