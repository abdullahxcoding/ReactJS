import React from 'react'
import CustomButton from '../custom/customButton'
import TopCard from '../custom/TopCard'
import TaskCard from '../custom/TaskCard'
import Header from '../custom/Header'
const EmployeeDashboad = ({ credentials }) => {

    return (
        <div className='min-h-screen w-full bg-gray-950'>
            <Header data={credentials} />
            <div className='flex max-xl:flex-wrap  gap-3 justify-center px-4'>
                <TopCard className="bg-amber-300" count={3} title="New Tasks" />
                <TopCard className="bg-emerald-300" count={3} title="New Tasks" />
                <TopCard className="bg-blue-300" count={3} title="New Tasks" />
                <TopCard className="bg-purple-300" count={3} title="New Tasks" />
            </div>

            <div id='taskList'
                className='h-[50%] flex flex-nowrap gap-4 overflow-auto justify-start items-center p-5 mt-6 mx-2'>

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