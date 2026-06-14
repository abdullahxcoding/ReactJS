import React from 'react'

const TopCard = (props) => {
    console.log(props.taskCount)
    return (
        <div className={`text-white w-[45%] items-start rounded-xl py-8 px-4 ${props.className}`} >
            <h1 className='font-bold text-2xl'>{props.taskCount}</h1>
            <p className='font-semibold text-xl'>{props.title} </p>
        </div>
    )
}

export default TopCard