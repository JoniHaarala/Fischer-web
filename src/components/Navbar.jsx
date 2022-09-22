import React from 'react'
import img from '../img/logoFischerDarkMode.png'
import { Link }from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full bg-components-color flex flex-col md:flex-row items-center gap-5 px-4 py-1 md:fixed z-10'>
            <div className='flex justify-center my-5 md:my-0 cursor-pointer'>
                <Link to='/'>
                    <img 
                        alt='Logo Fischer' 
                        src={img} 
                        width={180} 
                        height={88} 
                    />
                </Link>
            </div>
            <nav className='flex w-full justify-between'>
                <ul className='mx-4 md:mx-0 md:flex md:gap-5'>
                    <li className="bg-secondary-bg my-3 flex justify-center md:my-0 py-2 px-4 rounded-lg shadow-md md:shadow-none">
                        <Link to="/compra">Comprar</Link>
                    </li>
                    <li className="bg-secondary-bg my-3 flex justify-center md:my-0 py-2 px-4 rounded-lg shadow-md md:shadow-none">
                        <Link to="/alquiler">Alquilar</Link>
                    </li>
                    <li className="bg-secondary-bg my-3 flex justify-center md:my-0 py-2 px-4 rounded-lg shadow-md md:shadow-none">
                        <Link to="/alquiler-temporario">Alquiler temporario</Link>
                    </li>
                </ul>
                <div className=''>
                    <button className="mx-2 px-4 py-2 bg-pink-500">Sign Up</button>
                    <button className="mx-2 px-4 py-2 bg-pink-500">Sign In</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar