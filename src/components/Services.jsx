import React from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

export default function Services() {
    return (
        <div className="flex justify-center self-center">
            <section id="services" className="w-full max-w-screen-2xl px-10 py-14 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <GppGoodIcon fontSize="large" />
                    </div>
                    <h3>Los mejores precios</h3>
                    <p>Pague a través de nuestra aplicación y ahorre miles y obtenga increíbles recompensas.</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <MapsHomeWorkIcon fontSize="large" />
                    </div>
                    <h3>Las mejores ofertas</h3>
                    <p>Tenemos una amplia variedad de propiedad en oferta y en todas partes dentro de la Argentina</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <CreditCardIcon fontSize="large" />
                    </div>
                    <h3>Pago flexibles</h3>
                    <p>Disfrute de una amplia variedad de formas de pagos flexibles a cada clietne a través de nuestras oficinas y aplicacion.</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <SouthAmericaIcon fontSize="large" />
                    </div>
                    <h3>Encuentra lo mejor cerca de ti</h3>
                    <p>Encuentra los mejores hoteles y propiedades ya sea para visitar, alquilar o comprar cerca de ti y en un solo clic.</p>
                </div>
            </section>
        </div>
    );
}
