import React from 'react'

const CategoryButton = (props) => {
    return (
        <div className='flex h-20 w-48 rounded-xl border-1 bg-blue border-amber-50 items-center justify-center bg-gray-600 text-white font-semibold shadow-xl cursor-pointer hover:scale-105 transition-transform duration-200'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default CategoryButton