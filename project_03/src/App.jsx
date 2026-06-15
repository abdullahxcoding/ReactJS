import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboad from './components/Dashboard/EmployeeDashboad'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getData } from './utils/localStorage'

import { AuthContext } from './context/AuthProvider'
import ListTask from './components/custom/listTask'

const App = () => {

  const [user, setUser] = useState()
  const [loggedinUserData, setLoggedinUserData] = useState(null)

  // useEffect(() => {
  //   setData()
  // }, [])
  const [data, setData] = useContext(AuthContext)

  const handleLogin = (email, password) => {

    if (data) {
      const employee = data.employees.find((e) => email === e.email && password === e.password)
      const admin = data.admin.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedinUserData(employee)
        localStorage.setItem('loggedinUser', JSON.stringify({ role: "employee", data: employee }))
      } else if (admin) {

        setUser('admin')
        setLoggedinUserData(admin)
        localStorage.setItem('loggedinUser', JSON.stringify({ role: "admin", data: admin }))
      } else {
        alert('invalid credentials')
      }

    }
  }

  useEffect(() => {

    const loggedinUser = localStorage.getItem('loggedinUser')

    if (loggedinUser) {
      const userData = JSON.parse(loggedinUser)
      setUser(userData.role)
      setLoggedinUserData(userData.data)
    }
  }, [])


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard credentials={loggedinUserData} userdata={setUser} />}
      {user === 'employee' && <EmployeeDashboad credentials={loggedinUserData} userdata={setUser} />}
      {/* <ListTask /> */}
    </>
  )
}

export default App