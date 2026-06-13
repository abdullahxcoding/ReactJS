import React from 'react'

const TaskCard = () => {
    return (
        <div className='h-full w-[300px] shrink-0 bg-blue-400 rounded-xl p-5 '>
            <div className="flex justify-between">
                <h3 className='bg-red-500 px-3 py-1 text-sm text-white rounded-lg '>high</h3>
                <h4 className='text-white text-sm'>24 feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quos repudiandae facere architecto praesentium tempora.</p>
        </div>
    )
}

export default TaskCard