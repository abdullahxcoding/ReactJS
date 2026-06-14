
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'




const ListTask = () => {


    const Authdata = useContext(AuthContext)
    console.log(Authdata.employees)
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
                {Authdata.employees.map((elem) => {
                    return <div

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
                {/* // {filtered.map(task => (
                //     <div
                //         key={task.id}
                //         className="group w-full bg-slate-900/80 border border-white/[0.07] hover:border-emerald-500/25 rounded-xl px-5 py-4 flex items-start gap-4 transition-all duration-200 hover:bg-slate-900"
                //     >

                //         <div className="pt-1.5 shrink-0">
                //             <div className={`w-2 h-2 rounded-full ${priorityDot[task.priority]}`} />
                //         </div>

                //         <div className="flex-1 min-w-0">
                //             <div className="flex items-center gap-2 mb-1">
                //                 <h2 className="text-white font-semibold text-sm truncate">{task.title}</h2>
                //                 <span className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-md ${categoryColors[task.category]}`}>
                //                     {task.category}
                //                 </span>
                //             </div>
                //             <p className="text-white/40 text-xs leading-relaxed line-clamp-1">{task.content}</p>
                //             <p className="text-white/25 text-[11px] mt-1.5">Assigned to <span className="text-white/45">{task.assignee}</span></p>
                //         </div>


                //         <div className="shrink-0">
                //             <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${statusStyles[task.status]}`}>
                //                 {task.status}
                //             </span>
                //         </div>
                //     </div>
                // ))} */}
            </div>
        </div>
    )
}

export default ListTask