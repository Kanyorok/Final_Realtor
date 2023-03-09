import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    console.log(location.pathname)
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            console.log("working")
            return true
        }
    }
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
                <img src='https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg' alt='logo' className='h-5 cursor-pointer' />
                <div>
                    <ul className='flex space-x-10'>
                        <li className={`py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/") && "text-orange-500 border-b-[3px] border-b-red-500"}`}>Home</li>
                        <li className={`py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/offers") && "text-orange-500 border-b-[3px] border-b-red-500"}`}>Offers</li>
                        <li className={`py-3 text-sm font-semibold text-gray-400 ${pathMatchRoute("/sign-in") && "text-orange-500 border-b-[3px] border-b-red-500"}`}>Sign In</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
