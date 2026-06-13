import React from 'react'
import CustomButton from '../custom/customButton'
import TopCard from '../custom/TopCard'
import TaskCard from '../custom/TaskCard'
const EmployeeDashboad = () => {
    return (
        <div className='h-screen w-full bg-gray-950'>
            <header className='flex justify-between p-8'>
                <h2 className='text-white text-2xl'>Hello <br /><span className='text-2xl font-bold'>Abdullah 👋</span></h2>
                <div className='max-w-30'> <CustomButton title="Logout" /></div>
            </header>
            <div className='flex gap-3  justify-center px-4'>
                <TopCard className="bg-amber-300" count={3} title="New Tasks" />
                <TopCard className="bg-emerald-300" count={3} title="New Tasks" />
                <TopCard className="bg-blue-300" count={3} title="New Tasks" />
                <TopCard className="bg-purple-300" count={3} title="New Tasks" />
            </div>

            <div id='taskList'
                className='h-[50%] flex flex-nowrap gap-4 overflow-auto justify-start p-5 mt-6'>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    )
}

export default EmployeeDashboad