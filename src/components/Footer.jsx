import React from 'react'
import img from '../img/logoFischerDarkMode.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <footer className="flex flex-col bg-components-color text-white">
            <div className="w-full py-5 max-w-screen-2xl items-center md:flex md:justify-between self-center border-b-2 border-white">
                <div className='flex justify-center md:ml-7 xl:ml-0 mb-5 md:mb-0'>
                    <img alt='Logo Fischer' src={img} width={200} height={98}/>
                </div>
                <div className='flex gap-3 justify-center md:mr-3'>
                    <FacebookIcon fontSize="large" className="hover:text-black hover:transition-all hover:drop-shadow-md hover:cursor-pointer" />
                    <InstagramIcon fontSize="large" className="hover:text-orange-600 hover:transition-all hover:drop-shadow-md hover:cursor-pointer" />
                    <GoogleIcon fontSize="large" className="hover:text-red-600 hover:transition-all hover:drop-shadow-md hover:cursor-pointer" />
                    <WhatsAppIcon fontSize="large" className="hover:text-green-600 hover:transition-all hover:drop-shadow-md hover:cursor-pointer" />
                </div>
            </div>
            <div className="w-full py-5 max-w-screen-2xl px-10 grid grid-cols-3 justify-items-center self-center border-b-2 border-white">
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
                <p>hola mundo</p>
            </div>
            <p className='text-white text-sm self-center pt-10 pb-3'>©2022 Fischer Inmobiliaria Argentina S.L.R</p>
        </footer>
    )
}

export default Footer