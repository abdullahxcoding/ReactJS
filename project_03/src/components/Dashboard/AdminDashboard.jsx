import React from 'react'
import Header from '../custom/Header'
import CreateTask from '../custom/createTask'
import ListTask from '../custom/listTask'

const AdminDashboard = () => {
    return (
        <div className='bg-gray-950 min-h-screen w-full px-3'>
            <Header />
            <CreateTask />
            <ListTask />
        </div>
    )
}

export default AdminDashboard