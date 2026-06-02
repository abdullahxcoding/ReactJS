import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, LogOut } from 'lucide-react'
import { useUser } from '../context/UserProvider'
import { useCart } from '../context/CartProvider'

const Navbar = () => {
    const { user, LogOut } = useUser()
    const { cart } = useCart()
    return (
        <div className='flex items-center justify-between px-8 py-4 bg-teal-700 text-white'>
            <div>
                <NavLink className='text-xl font-bold'>Shopify</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
                <NavLink to={'/'} className='font-semibold'>Home</NavLink>
                <NavLink to={'/products'} className='font-semibold'>Products</NavLink>
                <input className='border-white border-1 rounded-lg p-1 outline-none' type="text" placeholder='🔍 Search products...' />
                <NavLink onClick={console.log(cart[0].qty)} className='hover:scale-110 transition-transform duration-200' to={'/cart'} >
                    {cart ? <div className="relative inline-block">
                        <ShoppingCart size={30} />

                        <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white text-black text-center text-xs pb-2 font-semibold">{cart.reduce((sum, item) => sum + item.qty, 0)}</div>
                    </div> : <ShoppingCart size={30} />}
                </NavLink>
                {!user ? <NavLink to={'/login'} className='font-semibold'>Login</NavLink> : <select className='outline-none p-2'>
                    <option className='text-black'>{user.username}</option>
                    <option className='text-black'>
                        Profile
                    </option>
                    <option className='text-black'>logout</option></select>}

            </div>
        </div>
    )
}

export default Navbar