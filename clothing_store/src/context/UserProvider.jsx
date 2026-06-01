import React, { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from './userContext'

const UserProvider = ({ children }) => {
    const [loading, setloading] = useState(false)
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user')
        return saved ? JSON.parse(saved) : null
    })

    const login = (email, password) => {
        setloading(true)

        try {
            const saved = localStorage.getItem('user')

            if (!saved) {
                return false
            }

            const savedUser = JSON.parse(saved)

            if (savedUser.email !== email || savedUser.password !== password) {
                alert('Invalid email or password.')
                return false
            }

            setUser(savedUser)
            return true

        } catch (err) {
            return err
        } finally {
            setloading(false)
        }
    }

    const register = (username, email, password) => {
        setloading(true)
        try {
            const existing = localStorage.getItem('user')
            if (existing && JSON.parse(existing).email === email) {
                return false  // ❌ failed
            }
            const newUser = { username, email, password }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
            return true   // ✅ success
        } catch {
            return false
        }
        finally {
            setloading(false)
        }
    }
    const logout = () => { }

    return (
        <UserContext.Provider value={{ user, loading, setloading, setUser, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export const useUser = () => useContext(UserContext)