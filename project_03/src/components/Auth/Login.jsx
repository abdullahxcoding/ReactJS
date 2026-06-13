import React from 'react'
import { useState } from 'react'
import CustomButton from '../custom/customButton'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [focused, setFocused] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>


            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div style={{
                    position: 'absolute', top: '20%', left: '35%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
            </div>

            <div className="relative w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(15,23,42,0.95)' }}>


                <div className="hidden md:flex flex-col justify-between w-1/2 p-10"
                    style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.4) 0%, rgba(15,23,42,0) 100%)', borderRight: '1px solid rgba(16,185,129,0.15)' }}>


                    <div>
                        <div className="flex items-center gap-2 mb-12">
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '8px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 3L4 7l4 4M16 3l4 4-4 4M14 3l-4 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight">DevXcrafts</span>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-widest mb-3" style={{ color: '#10b981', letterSpacing: '0.15em' }}>EMPLOYEE PORTAL</p>
                            <h2 className="text-3xl font-bold text-white leading-snug mb-4">
                                Build.<br />Ship.<br />Repeat.
                            </h2>
                            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                Your workspace for shipping products that matter. Sign in to access your projects, deployments, and team tools.
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center gap-2">
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>All systems operational</span>
                    </div>
                </div>


                <div className="flex flex-col justify-center w-full md:w-1/2 p-10">

                    <div className="mb-8">

                        <div className="flex items-center gap-2 mb-6 md:hidden">
                            <div style={{
                                width: '28px', height: '28px', borderRadius: '7px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 3L4 7l4 4M16 3l4 4-4 4M14 3l-4 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-bold tracking-tight">DevXcrafts</span>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Enter your credentials to continue</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <form onSubmit={submitHandler}>

                            <div>
                                <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                                    EMAIL
                                </label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    placeholder="you@devxcrafts.io"
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                    className="w-full text-sm outline-none"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: focused === 'email' ? '1px solid rgba(16,185,129,0.7)' : '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        padding: '11px 14px',
                                        color: 'white',
                                        transition: 'border-color 0.2s',
                                        boxShadow: focused === 'email' ? '0 0 0 3px rgba(16,185,129,0.08)' : 'none',
                                    }}
                                />
                            </div>


                            <div>
                                <div className="flex justify-between items-center my-1.5">
                                    <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
                                        PASSWORD
                                    </label>
                                    <a href="#" className="text-xs" style={{ color: '#10b981' }}>Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <input
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        onFocus={() => setFocused('password')}
                                        onBlur={() => setFocused(null)}
                                        className="w-full text-sm outline-none pr-10"
                                        style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: focused === 'password' ? '1px solid rgba(16,185,129,0.7)' : '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '10px',
                                            padding: '11px 14px',
                                            color: 'white',
                                            transition: 'border-color 0.2s',
                                            boxShadow: focused === 'password' ? '0 0 0 3px rgba(16,185,129,0.08)' : 'none',
                                            width: '100%',
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                        style={{ color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                    >
                                        {showPassword ? (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" strokeLinecap="round" /></svg>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                        )}
                                    </button>
                                </div>
                            </div>


                            <CustomButton title="Login" type="submit" />
                        </form>
                    </div>

                    <p className="text-xs mt-6 text-center" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        Having trouble? Contact{' '}
                        <a href="#" style={{ color: 'rgba(16,185,129,0.7)' }}>it@devxcrafts.io</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login