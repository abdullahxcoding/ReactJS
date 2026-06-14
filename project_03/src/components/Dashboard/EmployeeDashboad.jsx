import React from 'react'
import CustomButton from '../custom/customButton'
import TopCard from '../custom/TopCard'
import TaskCard from '../custom/TaskCard'
import Header from '../custom/Header'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'
import AcceptTask from '../TaskList/AcceptTask'
const EmployeeDashboad = ({ credentials }) => {

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
                className='h-[300px] flex flex-nowrap gap-4 overflow-auto justify-start items-center p-5 mt-6 mx-2'>
                {credentials.tasks.map((task, index) => { return task.newTask ? <NewTask taskData={task} key={index} /> : task.completed ? <CompleteTask taskData={task} key={index} /> : task.failed ? <FailedTask taskData={task} key={index} /> : <AcceptTask taskData={task} key={index} /> })}


            </div>
        </div>
    )
}

export default EmployeeDashboad