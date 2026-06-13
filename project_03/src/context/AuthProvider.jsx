import React, { createContext, useState, useEffect } from 'react'
import { getData } from '../utils/localStorage'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const userdata = getData()
        setData(userdata)

    }, [])

    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider