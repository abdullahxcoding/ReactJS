import React from 'react'
import CustomButton from '../custom/customButton'
import TopCard from '../custom/TopCard'
import TaskCard from '../custom/TaskCard'
import Header from '../custom/Header'
const EmployeeDashboad = ({ credentials }) => {
    console.log(credentials.tasks)
    return (
        <div className='min-h-screen w-full bg-gray-950'>
            <Header data={credentials} />
            <div className='flex max-xl:flex-wrap  gap-3 justify-center px-4'>
                <TopCard taskCount={credentials.taskCounts.active} className="bg-amber-300" title="Active Tasks" />
                <TopCard taskCount={credentials.taskCounts.newtask} className="bg-emerald-300" title="New Tasks" />
                <TopCard taskCount={credentials.taskCounts.completed} className="bg-blue-300" title="Completed Tasks" />
                <TopCard taskCount={credentials.taskCounts.failed} className="bg-purple-300" title="Filed Tasks" />
            </div>

            <div id='taskList'
                className='h-[50%] flex flex-nowrap gap-4 overflow-auto justify-start items-center p-5 mt-6 mx-2'>
                {credentials.tasks.map((task, index) => <TaskCard taskData={credentials.tasks[index]} />)}


            </div>
        </div>
    )
}

export default EmployeeDashboad