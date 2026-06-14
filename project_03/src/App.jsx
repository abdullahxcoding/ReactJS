import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboad from './components/Dashboard/EmployeeDashboad'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setData } from './utils/localStorage'

import { AuthContext } from './context/AuthProvider'
import ListTask from './components/custom/listTask'

const App = () => {

  const [user, setUser] = useState()
  const [loggedinUserData, setLoggedinUserData] = useState(null)

  useEffect(() => {
    setData()
  }, [])
  const Authdata = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (Authdata) {
      const employee = Authdata.employees.find((e) => email === e.email && password === e.password)
      const admin = Authdata.admin.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedinUserData(employee)
        localStorage.setItem('loggedinUser', JSON.stringify({ role: "employee" }))
      } else if (admin) {

        setUser('admin')
        setLoggedinUserData(admin)
        localStorage.setItem('loggedinUser', JSON.stringify({ role: "admin" }))
      } else {
        alert('invalid credentials')
      }

    }
  }

  // useEffect(() => {
  //   if (Authdata) {
  //     const loggedinUser = localStorage.getItem('loggedinUser')
  //     if (loggedinUser) {
  //       setUser(loggedinUser.role)
  //     }
  //   }
  // }, [Authdata])


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard credentials={loggedinUserData} />}
      {user === 'employee' && <EmployeeDashboad credentials={loggedinUserData} />}
      {/* <ListTask /> */}
    </>
  )
}

export default App