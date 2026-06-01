import React from 'react'

const Hero = () => {
    return (
        <div className='flex items-center justify-center h-[90vh] w-full  text-white '>
            <div className=" left w-1/2 px-14">

                <h1 className='text-6xl font-bold mb-2'>Summer collection up to 50% off</h1>
                <p className='text-2xl mb-2'>Explore the latest trends in fashion, electronics, and more — all in one place.</p>
                <button className='font-semibold text-xl  px-4 py-1 rounded bg-teal-700 text-white'>Shop now</button>
            </div>
            <div className="flex right w-1/2 h-full items-center justify-center">


                <img className='h-96 rounded-lg' src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />

            </div>

        </div>
    )
}

export default Hero