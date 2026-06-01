import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' })
    const [showPass, setShowPass] = useState(false)
    const [validationError, setValidationError] = useState('')
    const { register, loading, setloading } = useUser()



    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setValidationError('')

        if (!form.username || !form.email || !form.password || !form.confirm) {
            return setValidationError('All fields are required.')
        }
        if (form.password !== form.confirm) {
            return setValidationError('Passwords do not match.')
        }
        if (form.password.length < 6) {
            return setValidationError('Password must be at least 6 characters.')
        }

        const success = register(form.username, form.email, form.password)
        if (success) navigate('/login')

    }



    const fields = [
        { name: 'username', label: 'Username', type: 'text', placeholder: 'johndoe', icon: '👤' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', icon: '✉' },
    ]

    return (
        <div className="min-h-screen bg-[#0f1923] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md bg-[#1a2a38] border border-white/10 rounded-2xl p-8">

                {/* logo */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-white mb-1">Shopify</h1>
                    <p className="text-xs tracking-widest text-teal-500 uppercase">Create your account</p>
                </div>



                <div className="space-y-4">

                    {/* username & email */}
                    {fields.map(f => (
                        <div key={f.name}>
                            <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">{f.label}</label>
                            <div className="flex items-center bg-[#0f1923] border border-white/10 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-500 transition-colors">
                                <span className="text-white/30 text-sm">{f.icon}</span>
                                <input
                                    name={f.name}
                                    type={f.type}
                                    value={form[f.name]}
                                    onChange={handleChange}
                                    placeholder={f.placeholder}
                                    className="bg-transparent text-white text-sm flex-1 outline-none placeholder:text-white/20"
                                />
                            </div>
                        </div>
                    ))}

                    {/* password */}
                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Password</label>
                        <div className="flex items-center bg-[#0f1923] border border-white/10 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-500 transition-colors">
                            <span className="text-white/30 text-sm">🔒</span>
                            <input
                                name="password"
                                type={showPass ? 'text' : 'password'}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Min. 6 characters"
                                className="bg-transparent text-white text-sm flex-1 outline-none placeholder:text-white/20"
                            />
                            <button
                                onClick={() => setShowPass(!showPass)}
                                className="text-white/30 hover:text-white/60 text-xs transition-colors"
                            >
                                {showPass ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* confirm password */}
                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Confirm Password</label>
                        <div className={`flex items-center bg-[#0f1923] border rounded-xl px-4 py-3 gap-3 focus-within:border-teal-500 transition-colors
              ${form.confirm && form.confirm !== form.password ? 'border-red-500/50' : 'border-white/10'}`}>
                            <span className="text-white/30 text-sm">🔒</span>
                            <input
                                name="confirm"
                                type={showPass ? 'text' : 'password'}
                                value={form.confirm}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="bg-transparent text-white text-sm flex-1 outline-none placeholder:text-white/20"
                            />
                            {/* live match indicator */}
                            {form.confirm && (
                                <span className={`text-xs ${form.confirm === form.password ? 'text-teal-400' : 'text-red-400'}`}>
                                    {form.confirm === form.password ? '✓' : '✗'}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* submit */}
                    <button
                        onClick={handleSubmit}

                        className="w-full bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors mt-2"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Creating account...
                            </span>
                        ) : 'Create account'}
                    </button>

                </div>

                {/* divider */}
                <div className="flex items-center gap-3 my-6">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/20 text-xs">or continue with</span>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* google */}
                <button className="w-full bg-[#0f1923] border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-sm font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                    <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                    Continue with Google
                </button>

                {/* login link */}
                <p className="text-center text-white/30 text-sm mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="text-teal-500 hover:text-teal-400 transition-colors">
                        Sign in
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Signup