import React from 'react'
import CategoryButton from './categoryButton';

const BrowseCategory = (props) => {

    const categories = [...new Set(props.products.map(product => product.category))];

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