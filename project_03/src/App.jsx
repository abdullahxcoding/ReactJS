import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboad from './components/Dashboard/EmployeeDashboad'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setData } from './utils/localStorage'

import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    setData()
  }, [])


  const data = useContext(AuthContext)

  // console.log(data)
  return (
    <div >
      <AdminDashboard />

      {/* <EmployeeDashboad /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App