import React from 'react'
import mainbg from './img/mainbg.webp'
import TabMenu from './components/tabPanel'
import Services from './components/Services'
import Comments from './components/Comments'

export default function Home() {
    return (
        <div className="md:pt-16 lg:pt-20">
            <img
                src={mainbg}
                alt='fondo de bienvenida de pagina'
                className="mx-1 object-cover h-[280px] md:mx-0 md:w-[2300px] md:h-[600px]"
            />
            <div className='flex justify-center'>
                <div className="w-fit h-fit bg-green-400 p-5 mx-2 rounded-lg md:mx-0 md:my-20 font-bold">
                    <h1 className='flex justify-center'>Realice una busqueda rapida</h1>
                    <TabMenu />
                </div>
            </div>

            {/* tarjetas de freatures de la empresa */}
            <Services />
            <section className="h-52"><h1>holahola</h1></section>
            {/* tarjetas de testimoniales */}
            <Comments />
        </div>
    )
}
