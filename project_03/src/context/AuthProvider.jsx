import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const { employees, admin } = getData()
        setData({ employees, admin })

    }, [])

    return (
        <div>
            <AuthContext.Provider value={[data, setData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider