import React from 'react'

const ShippingCard = () => {
    return (
        <div className='h-36 bg-blue-200 rounded-xl w-[80%] mx-auto my-8 flex
        flex-col justify-center px-8 text-blue-900 '>

            <h3 className='font-semibold text-xl'>Free shipping on orders over $50</h3>
            <p className=''>
                Use code <span className='font-semibold'>FREESHIP</span> at checkout · Limited time offer</p>
        </div>
    )
}

export default ShippingCard