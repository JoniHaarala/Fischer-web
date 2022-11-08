import React from 'react'
import mainbg from './img/mainbg.webp'
import Services from './components/Services'
import Comments from './components/Comments'
import Destacadas from './components/Destacadas'


export default function Home() {
    
    return (
        <div className="md:pt-16 lg:pt-20">
            <img
                src={mainbg}
                alt='fondo de bienvenida de pagina'
                className="mx-1 object-cover h-[280px] md:mx-0 md:w-[2300px] md:h-[600px]"
            />
            {/* tarjetas de freatures de la empresa */}
            <Services />
            {/* propiedades destacadas */}
            <Destacadas />
            {/* tarjetas de testimoniales */}
            <Comments />
        </div>
    )
}
