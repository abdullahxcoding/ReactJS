import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
// import { getData } from '../../utils/localStorage'

const priorities = ['Low', 'Medium', 'High']
const categories = ['Design', 'Development', 'QA', 'DevOps', 'Research']

const priorityStyles = {
    Low: { active: 'border-blue-400/40 bg-blue-400/10 text-blue-400', inactive: 'border-white/10 bg-white/5 text-white/35' },
    Medium: { active: 'border-yellow-400/40 bg-yellow-400/10 text-yellow-400', inactive: 'border-white/10 bg-white/5 text-white/35' },
    High: { active: 'border-red-400/40 bg-red-400/10 text-red-400', inactive: 'border-white/10 bg-white/5 text-white/35' },
}

const Field = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
            {label}
        </label>
        {children}
    </div>
)

const Input = ({ type = 'text', placeholder, name, value, setvalue }) => {
    const [focused, setFocused] = useState(false)
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            name={name}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => { setvalue(e.target.value) }}
            className={`w-full bg-white/5 text-white text-sm placeholder:text-white/25 rounded-[10px] px-3.5 py-2.5 outline-none border transition-all duration-200
        ${type === 'date' ? '[color-scheme:dark]' : ''}
        ${focused ? 'border-emerald-500/60 shadow-[0_0_0_3px_rgba(16,185,129,0.08)]' : 'border-white/10'}
      `}
        />
    )
}

const CreateTask = () => {
    const [priority, setPriority] = useState('Medium')
    const [category, setCategory] = useState('Development')
    const [descFocused, setDescFocused] = useState(false)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [employee, setEmployee] = useState('')
    const [description, setDescription] = useState('')
    const [newtask, setNewTask] = useState({})

    const [data, setData] = useContext(AuthContext)

    return (

        <div className=" w-full max-w-5xl mx-auto bg-slate-900/95 border border-emerald-500/20 rounded-2xl p-9 shadow-2xl">


            <div className="flex items-start gap-3 mb-7 pb-6 border-b border-white/[0.07]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-white font-bold text-lg leading-none mb-1">New Task</h2>
                    <p className="text-white/35 text-[13px]">Fill in the details to assign a task to a team member.</p>
                </div>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();

                // ✅ create it as a local variable
                const newTaskData = {
                    title,
                    description,
                    category,
                    date,
                    priority,
                    active: false,
                    newTask: true,
                    failed: false,
                    completed: false
                }

                setNewTask(newTaskData) // optional, if you need it in state elsewhere

                const employees = JSON.parse(localStorage.getItem('employees'))
                employees.forEach((element) => {
                    if (element.name === employee) {
                        element.tasks.push(newTaskData)
                        element.taskCounts.newtask = element.taskCounts.newtask + 1
                    }
                })

                localStorage.setItem('employees', JSON.stringify(employees))
                setData({ employees, admin: data.admin })
                setTitle('')
                setCategory('')
                setDescription('')
                setEmployee('')
                setDate('')
                setPriority('')
            }}>
                <div className="grid grid-cols-2 gap-5">

                    {/* Task Title */}
                    <div className="col-span-2">
                        <Field label="Task Title">
                            <Input placeholder="e.g. Design onboarding flow" name="title" value={title} setvalue={setTitle} />
                        </Field>
                    </div>

                    {/* Assign To */}
                    <Field label="Assign To">
                        <Input placeholder="Employee name" name="employee" value={employee} setvalue={setEmployee} />
                    </Field>

                    {/* Due Date */}
                    <Field label="Due Date">
                        <Input type="date" name="date" value={date} setvalue={setDate} />
                    </Field>

                    {/* Category */}
                    <div className="col-span-2">
                        <Field label="Category">
                            <div className="flex flex-wrap gap-2 mt-0.5">
                                {categories.map(c => (
                                    <button
                                        key={c}
                                        type="button"
                                        onClick={() => setCategory(c)}
                                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 cursor-pointer
                        ${category === c
                                                ? 'border-emerald-500/60 bg-emerald-500/15 text-emerald-400'
                                                : 'border-white/10 bg-white/[0.04] text-white/40 hover:border-white/20 hover:text-white/60'
                                            }`}
                                    >{c}</button>
                                ))}
                            </div>
                        </Field>
                    </div>

                    {/* Priority */}
                    <div className="col-span-2">
                        <Field label="Priority">
                            <div className="flex gap-2">
                                {priorities.map(p => (
                                    <button
                                        key={p}
                                        type="button"
                                        onClick={() => setPriority(p)}
                                        className={`flex-1 py-2 rounded-[9px] text-xs font-semibold border transition-all duration-150 cursor-pointer
                        ${priority === p ? priorityStyles[p].active : priorityStyles[p].inactive}
                      `}
                                    >{p}</button>
                                ))}
                            </div>
                        </Field>
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <Field label="Description">
                            <textarea
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                rows={4}
                                placeholder="Describe what needs to be done, acceptance criteria, or any context the assignee needs…"
                                onFocus={() => setDescFocused(true)}
                                onBlur={() => setDescFocused(false)}
                                className={`w-full bg-white/5 text-white text-sm placeholder:text-white/25 rounded-[10px] px-3.5 py-2.5 outline-none border resize-y leading-relaxed font-[inherit] transition-all duration-200
                    ${descFocused ? 'border-emerald-500/60 shadow-[0_0_0_3px_rgba(16,185,129,0.08)]' : 'border-white/10'}
                  `}
                            />
                        </Field>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2.5 mt-6 pt-5 border-t border-white/[0.07]">
                    <button
                        type="button"
                        className="px-5 py-2.5 rounded-[10px] text-[13px] font-medium text-white/40 border border-white/10 bg-transparent hover:text-white/60 hover:border-white/20 transition-all cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-[10px] text-[13px] font-semibold text-white bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.28)] hover:brightness-110 transition-all cursor-pointer border-0"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CreateTask
