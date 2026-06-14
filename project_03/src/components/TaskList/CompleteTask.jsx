import React from 'react'

const CompleteTask = ({ taskData }) => {
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
            <div className='mt-2'>

                <button className='w-full bg-emerald-700 text-white rounded-lg px-2 py-1'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask