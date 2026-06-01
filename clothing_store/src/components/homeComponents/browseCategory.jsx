import React from 'react'
import CategoryButton from './categoryButton';

const BrowseCategory = () => {
    const categories = [
        'Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'
    ];
    return (
        <div className='h-72 py-6 w-[80%] mx-auto'>
            <h1 className='text-3xl font-bold text-white'>Browse Category</h1>
            <div className='flex gap-10 h-full justify-center items-center flex-wrap py-2'>
                {categories.map((category, index) => {
                    return <CategoryButton title={category} />
                })}
            </div>
        </div>
    )
}

export default BrowseCategory