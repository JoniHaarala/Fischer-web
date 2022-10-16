import React from 'react'
import { Link } from 'react-router-dom'

export const Faq = () => {
    return (
        <div className='flex justify-center md:pt-16 lg:pt-20 px-5 bg-gray-100'>
            <main className='max-w-5xl py-20 my-10 px-52 rounded-xl border-x border-y border-slate-400 bg-slate-50 text-justify text-slate-800'>
                <section className="space-y-7 mb-9">
                    <h3 className="font-semibold text-lg">El Sitio</h3>
                    <p className="">El Sitio es una plataforma de publicación de avisos de inmuebles que FISCHER ARGENTINA provee a las Oficinas franquiciadas, para que los corredores públicos inmobiliarios matriculados a cargo de cada Oficina puedan publicar las propiedades que se encuentran comercializando. Por ende, FISCHER ARGENTINA no participa en ninguna de las publicaciones del Sitio y cualquier interacción que Ud. realice en el Sitio será directamente con la Oficina que efectuó la publicación y en ningún caso con FISCHER ARGENTINA.</p>
                </section>
                <section className="space-y-7 mb-9">
                    <h3 className="font-semibold text-lg">Publicaciones</h3>
                    <p className="">Cada propiedad que Ud. verá publicada en Sitio es realizada directamente por un corredor público inmobiliario matriculado a cargo de una Oficina.<br/>  La información provistaDatos de Contacto en cada publicación fue provista exclusivamente por el corredor público inmobiliario matriculado (cuyos datos se exhiben en cada publicación). Por cualquier inquietud respecto a la eventual actualización de las medidas, descripciones arquitectónicas y funcionales, valores de expensas, servicios, impuestos, precios y demás información que se requiera a sus efectos -cuyos valores son aproximados- deberá consultar al corredor público inmobiliario matriculado responsable de la operación y publicación. 
                    </p>
                </section>
                <section className="space-y-7 mb-9">
                    <h3 className="font-semibold text-lg">Datos de Contacto</h3>
                    <p className="">Los datos de contacto que se exhiben en cada publicación pueden corresponder al corredor público inmobiliario matriculado y/o a las personas que colaboran con el mencionado en cada Oficina. Cualquier persona que se comunique con Ud. actúa bajo el liderazgo de un Corredor Público Inmobiliario matriculado responsable de cada Oficina.<br/>En todas las publicaciones del Sitio Usted podrá encontrar el nombre y datos de matriculación del corredor público inmobiliario matriculado a cargo de la correspondiente publicación.</p>
                </section>
                <section className="space-y-7 mb-9">
                    <h3 className="font-semibold text-lg">Datos Personales</h3>
                    <p className="">FISCHER ARGENTINA mantendrá bajo estricta confidencialidad los Datos Personales suministrados en el Sitio, salvo en los casos en los que la Ley de Protección de Datos Personales permita su divulgación y con la salvedad descripta en el siguiente párrafo. En igual forma, FISCHER ARGENTINA exige a sus proveedores los mismos estándares de privacidad.<br/> Para conocer el detalle de los términos y condiciones sobre las Políticas de Privacidad que se aplican al Sitio lo invitamos a revisar el siguiente link: <Link><p>Política de Privacidad</p></Link></p>
                </section>
                <section className="space-y-7 mb-9">
                    <h3 className="font-semibold text-lg">Información correspondiente a las propiedades</h3>
                    <p className="">FISCHER ARGENTINA no es titular, propietario, poseedor, depositario, administrador ni tenedor de los inmuebles ofrecidos, ni tampoco interviene en la confección de las publicaciones ni el perfeccionamiento de las operaciones ni en las condiciones estipuladas en cada publicación, ni tampoco ejerce control alguno sobre los datos señalados en ellas, por lo que no es responsable por la existencia, calidad, cantidad, estado, o integridad de los inmuebles ofrecidos, ni por la exactitud, veracidad, exhaustividad y actualidad de la información contenida en las publicaciones efectuadas.<br/>Toda la información acerca de los inmuebles ofrecidos en el Sitio es proporcionada por los corredores públicos inmobiliarios matriculados, siendo -por ende- de su exclusiva responsabilidad.<br/>FISCHER ARGENTINA no ofrece garantía alguna ni será responsable por la calidad, precio, condiciones de venta, estado, vicios ocultos o redhibitorios ni por las consecuencias que deriven de la compraventa y/o uso de los inmuebles que pueda adquirir a raíz de las publicaciones realizadas por los corredores públicos inmobiliarios matriculados de cada Oficina.</p>
                </section>
            </main>
        </div>
    )
}
