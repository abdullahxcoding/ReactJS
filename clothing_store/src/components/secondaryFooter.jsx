import { Link } from 'react-router-dom'
import React from 'react'


const SecondaryFooter = () => {
    return (
        <div className='flex justify-around px-4 py-6'>
            <div className="left text-white">
                <h3 className='font-bold text-lg pb-1'>Company</h3>
                <ul className='opacity-75'>
                    <li><Link>About us</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Press</Link></li>
                    <li><Link>blogs</Link></li>
                </ul>
            </div>
            <div className="center-left text-white"> <h3 className='font-bold text-lg pb-1'>Support</h3>
                <ul className='opacity-75'>
                    <li><Link>Help Center</Link></li>
                    <li><Link>Returns</Link></li>
                    <li><Link>Order Trasking</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul></div>
            <div className="center-right text-white">
                <h3 className='font-bold text-lg pb-1'>Legal</h3>
                <ul className='opacity-75'>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Terms of Service</Link></li>
                    <li><Link>Cookie Policy</Link></li>

                </ul>
            </div>
            <div className="right text-white">
                <h3 className='font-bold text-lg pb-1'>Follow us</h3>
                <ul className='opacity-75'>
                    <li><Link>Instagram</Link></li>
                    <li><Link>Twitter</Link></li>
                    <li><Link>Facebook</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default SecondaryFooter