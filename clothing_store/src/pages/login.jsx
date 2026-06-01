import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { login, loading, setloading } = useUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const loggedin = login(email, password)
        if (loggedin) navigate('/')
    }

    return (
        <div className="min-h-screen bg-[#0f1923] flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-[#1a2a38] border border-white/10 rounded-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-white mb-1">Shopify</h1>
                    <p className="text-xs tracking-widest text-teal-500 uppercase">Welcome back</p>
                </div>



                <div className="space-y-4">

                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Email</label>
                        <div className="flex items-center bg-[#0f1923] border border-white/10 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-500 transition-colors">
                            <span className="text-white/30 text-sm">✉</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="bg-transparent text-white text-sm flex-1 outline-none placeholder:text-white/20"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-white/50 uppercase tracking-widest mb-2 block">Password</label>
                        <div className="flex items-center bg-[#0f1923] border border-white/10 rounded-xl px-4 py-3 gap-3 focus-within:border-teal-500 transition-colors">
                            <span className="text-white/30 text-sm">🔒</span>
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
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

                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-xs text-teal-500 hover:text-teal-400 transition-colors">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors mt-2"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Signing in...
                            </span>
                        ) : 'Sign in'}
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

                {/* signup link */}
                <p className="text-center text-white/30 text-sm mt-6">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-teal-500 hover:text-teal-400 transition-colors">
                        Sign up
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Login