import React, { useContext, useState, useEffect } from 'react'
import CartContext from './cartContext'

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id)
            if (exists) {
                return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
            }
            return [...prev, { ...product, qty: 1 }]
        })
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id))
    }

    const updateQuantity = (id, qty) => {
        if (qty < 1) return removeFromCart(id)
        setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export const useCart = () => useContext(CartContext)