
import React, { useState } from 'react'

const tasks = [
    { id: 1, title: 'Design onboarding flow', content: 'Create wireframes and high-fidelity mockups for the new user onboarding experience.', status: 'In Progress', priority: 'High', category: 'Design', assignee: 'Sara K.' },
    { id: 2, title: 'Fix auth token expiry bug', content: 'Users are being logged out prematurely. Investigate JWT refresh logic on the backend.', status: 'Pending', priority: 'High', category: 'Development', assignee: 'Ali R.' },
    { id: 3, title: 'Write API documentation', content: 'Document all v2 endpoints with request/response examples using OpenAPI spec.', status: 'Completed', priority: 'Medium', category: 'Research', assignee: 'John M.' },
    { id: 4, title: 'Set up CI/CD pipeline', content: 'Configure GitHub Actions for automated testing and deployment to staging environment.', status: 'Pending', priority: 'Medium', category: 'DevOps', assignee: 'Zara T.' },
    { id: 5, title: 'QA regression testing', content: 'Run full regression suite on the v2.3 release candidate before Thursday deployment.', status: 'In Progress', priority: 'Low', category: 'QA', assignee: 'Omar S.' },
]

const statusStyles = {
    'Pending': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30',
    'In Progress': 'bg-blue-400/10 text-blue-400 border-blue-400/30',
    'Completed': 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
}

const priorityDot = {
    'High': 'bg-red-400',
    'Medium': 'bg-yellow-400',
    'Low': 'bg-blue-400',
}

const categoryColors = {
    'Design': 'text-pink-400 bg-pink-400/10',
    'Development': 'text-violet-400 bg-violet-400/10',
    'QA': 'text-orange-400 bg-orange-400/10',
    'DevOps': 'text-cyan-400 bg-cyan-400/10',
    'Research': 'text-sky-400 bg-sky-400/10',
}

const filters = ['All', 'Pending', 'In Progress', 'Completed']

const ListTask = () => {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? tasks : tasks.filter(t => t.status === active)

    return (
        <div className="min-h-screen bg-gray-950 p-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-white font-bold text-xl">All Tasks</h1>
                    <p className="text-white/35 text-xs mt-0.5">{filtered.length} task{filtered.length !== 1 ? 's' : ''} found</p>
                </div>

                {/* Filter pills */}
                <div className="flex gap-2">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActive(f)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer
                ${active === f
                                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-400'
                                    : 'bg-white/[0.03] border-white/10 text-white/40 hover:text-white/60 hover:border-white/20'
                                }`}
                        >{f}</button>
                    ))}
                </div>
            </div>

            {/* Task Cards */}
            <div className="flex flex-col gap-3">
                {filtered.map(task => (
                    <div
                        key={task.id}
                        className="group w-full bg-slate-900/80 border border-white/[0.07] hover:border-emerald-500/25 rounded-xl px-5 py-4 flex items-start gap-4 transition-all duration-200 hover:bg-slate-900"
                    >
                        {/* Priority dot */}
                        <div className="pt-1.5 shrink-0">
                            <div className={`w-2 h-2 rounded-full ${priorityDot[task.priority]}`} />
                        </div>

                        {/* Main content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h2 className="text-white font-semibold text-sm truncate">{task.title}</h2>
                                <span className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-md ${categoryColors[task.category]}`}>
                                    {task.category}
                                </span>
                            </div>
                            <p className="text-white/40 text-xs leading-relaxed line-clamp-1">{task.content}</p>
                            <p className="text-white/25 text-[11px] mt-1.5">Assigned to <span className="text-white/45">{task.assignee}</span></p>
                        </div>

                        {/* Status badge */}
                        <div className="shrink-0">
                            <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${statusStyles[task.status]}`}>
                                {task.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListTask