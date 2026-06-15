import React from 'react'
import CustomButton from './customButton'
const Header = ({ data, user }) => {
    const handleClick = () => {
        console.log("logout")
        localStorage.setItem('loggedinUser', '')
        user('')
    }
    return (
        <header className='flex justify-between p-8'>
            <h2 className='text-white text-2xl'>Hello <br /><span className='text-2xl font-bold'>{data.name} 👋</span></h2>
            <div className='max-w-30'> <CustomButton title="Logout" handleClick={handleClick} /></div>
        </header>
    )
}

export default Header