import React from 'react'
import img from '../img/logoFischerDarkMode.png'
import { Link } from 'react-router-dom'

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
            <nav className='flex w-full justify-between text-white font-bold'>
                <ul className='mx-4 grid grid-cols-4 justify-items-center gap-2 md:mx-0 md:flex md:gap-5'>
                    <li className="border-2 border-white flex justify-center py-2 px-4 rounded-lg hover:bg-blue-600">
                        <Link to="/compra">Comprar</Link>
                    </li>
                    <li className="border-2 border-white flex justify-center py-2 px-4 rounded-lg hover:bg-blue-600">
                        <Link to="/alquiler">Alquilar</Link>
                    </li>
                    <li className="border-2 border-white flex justify-center py-2 px-4 rounded-lg hover:bg-blue-600">
                        <Link to="/alquiler-temporario">Alquiler temporario</Link>
                    </li>
                    <li className="border-2 border-white flex justify-center py-2 px-4 rounded-lg hover:bg-blue-600">
                        <Link to="/faq">Bases y condiciones</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar