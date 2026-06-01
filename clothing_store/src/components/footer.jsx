import React from 'react'
import { ReceiptText, CreditCard, BadgeHelp } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-10 py-3 text-gray-300">
            <p className="text-sm font-medium">
                © 2026 Shopify Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
                <button className="hover:text-white transition-colors">
                    <CreditCard size={18} />
                </button>

                <button className="hover:text-white transition-colors">
                    <BadgeHelp size={18} />
                </button>

                <button className="hover:text-white transition-colors">
                    <ReceiptText size={18} />
                </button>
            </div>
        </footer>
    )
}

export default Footer