import React from 'react'

const NewTask = ({ taskData }) => {
    return (
        <div className='h-full w-[300px] shrink-0 bg-blue-400 rounded-xl p-5 flex flex-col justify-between'>
            <div>

                <div className="flex justify-between">
                    <h3 className='bg-red-500 px-3 py-1 text-sm text-white rounded-lg '>{taskData.priority}</h3>
                    <h4 className='text-white text-sm'>{taskData.date}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{taskData.title}
                </h2>
                <p>{taskData.description}</p>
            </div>
            <div className='mt-4'>

                <button className='bg-emerald-700 text-white px-4 py-1 rounded-lg'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask