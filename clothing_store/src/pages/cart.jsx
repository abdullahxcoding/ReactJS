import { useState } from 'react'
import { useCart } from '../context/CartProvider'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart()
    const [promo, setPromo] = useState('')
    const [discount, setDiscount] = useState(0)

    const subtotal = cart.reduce((a, p) => a + p.priceCents / 100 * p.qty, 0)
    const shipping = subtotal >= 50 ? 0 : 5
    const total = subtotal - discount + shipping

    const applyPromo = () => {
        if (promo.toUpperCase() === 'SAVE10') setDiscount(subtotal * 0.1)
    }

    if (!cart || cart.length === 0) return (
        <div className="min-h-screen bg-[#0f1923] flex items-center justify-center">
            <div className="text-center">
                <p className="text-6xl mb-4">🛒</p>
                <p className="text-white/30">Your cart is empty</p>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-[#0f1923] p-6">
            <h1 className="text-white text-xl font-medium mb-1">My cart</h1>
            <p className="text-white/30 text-xs mb-6">Review your items before checkout</p>

            <div className="grid grid-cols-[1fr_300px] gap-4 items-start">


                <div className="flex flex-col gap-3">
                    {cart.map(p => (
                        <div key={p.id} className="bg-[#1a2a38] border border-white/8 rounded-2xl p-4 flex gap-4 items-center hover:border-teal-500/30 transition-colors">
                            <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                                <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-teal-500 text-xs mb-1">{p.subCategory}</p>
                                <p className="text-white text-sm font-medium mb-2 truncate">{p.name}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1">
                                        <button onClick={() => updateQuantity(p.id, p.qty - 1)} className="text-white/40 hover:text-teal-400 transition-colors text-sm">-</button>
                                        <span className="text-white text-sm w-4 text-center">{p.qty}</span>
                                        <button onClick={() => updateQuantity(p.id, p.qty + 1)} className="text-white/40 hover:text-teal-400 transition-colors text-sm">+</button>
                                    </div>
                                    <span className="text-white font-medium">${(p.priceCents / 100 * p.qty).toFixed(2)}</span>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(p.id)} className="text-white/20 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-all">🗑</button>
                        </div>
                    ))}
                </div>

                {/* summary */}
                <div className="bg-[#1a2a38] border border-white/8 rounded-2xl p-5 sticky top-4">
                    <p className="text-white font-medium mb-4">Order summary</p>

                    <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-2 text-center text-teal-400 text-xs mb-4">
                        {subtotal >= 50 ? '✓ You\'ve got free shipping!' : `Add $${(50 - subtotal).toFixed(2)} more for free shipping`}
                    </div>

                    <div className="flex gap-2 mb-4">
                        <input value={promo} onChange={e => setPromo(e.target.value)} placeholder="Promo code"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-teal-500 placeholder:text-white/20 transition-colors" />
                        <button onClick={applyPromo} className="bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs px-3 py-2 rounded-lg hover:bg-teal-500/25 transition-colors">Apply</button>
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between text-white/50"><span>Subtotal</span><span className="text-white">${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between text-white/50"><span>Shipping</span><span className="text-white">{shipping === 0 ? 'Free' : '$5.00'}</span></div>
                        {discount > 0 && <div className="flex justify-between text-teal-400"><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
                    </div>

                    <div className="border-t border-white/8 pt-3 flex justify-between text-white font-medium mb-4">
                        <span>Total</span><span>${total.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl text-sm font-medium transition-colors">
                        Secure checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart