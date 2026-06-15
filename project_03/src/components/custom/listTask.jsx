
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'




const ListTask = () => {


    const [data, setData] = useContext(AuthContext)
    const { employees = [], admin = [] } = data

    return (
        <div className="min-h-screen bg-gray-950 p-8">
            <div
                className="group w-full bg-slate-900/80 border border-white/[0.07] hover:border-emerald-500/25 rounded-xl px-5 py-4 flex items-start gap-4 transition-all duration-200 hover:bg-slate-900 mb-3"
            >



                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-evenly mb-1">
                        <h2 className="text-white font-semibold text-sm truncate">Employee Name</h2>
                        <h2 className="text-white font-semibold text-sm truncate">New Task</h2>
                        <h2 className="text-white font-semibold text-sm truncate">Active</h2>
                        <h2 className="text-white font-semibold text-sm truncate">Completed</h2>
                        <h2 className="text-white font-semibold text-sm truncate">failed</h2>

                    </div>

                </div>



            </div>

            <div className="flex flex-col gap-3">

                {employees.map((elem, index) => {
                    console.log(elem) // Log the current employee object
                    return <div
                        key={index}
                        className="group w-full bg-slate-900/80 border border-white/[0.07] hover:border-emerald-500/25 rounded-xl px-5 py-4 flex items-start gap-4 transition-all duration-200 hover:bg-slate-900"
                    >
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-evenly mb-1">
                                <h2 className="text-white font-semibold text-sm truncate">{elem.name}</h2>
                                <h2 className="text-white font-semibold text-sm truncate">{elem.taskCounts.newtask}</h2>
                                <h2 className="text-white font-semibold text-sm truncate">{elem.taskCounts.active}</h2>
                                <h2 className="text-white font-semibold text-sm truncate">{elem.taskCounts.completed}</h2>
                                <h2 className="text-white font-semibold text-sm truncate">{elem.taskCounts.failed}</h2>

                            </div>

                        </div>



                    </div>
                })}

            </div>
        </div>
    )
}

export default ListTask