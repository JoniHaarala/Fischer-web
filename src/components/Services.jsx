import React from "react";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';

export default function Services() {
    return (
        <div className="flex justify-center self-center">
            <section id="services" className="w-full max-w-screen-2xl px-10 py-14 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <GppGoodIcon fontSize="large" />
                    </div>
                    <h3>Get Best Prices</h3>
                    <p>Pay through our application and save thousands and get amazing rewards.</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <CoronavirusIcon fontSize="large" />
                    </div>
                    <h3>Covid Safe</h3>
                    <p>We have all the curated hotels that have all the precaution for a covid safe environment.</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <CreditCardIcon fontSize="large" />
                    </div>
                    <h3>Flexible Payment</h3>
                    <p>Enjoy the flexible payment through our app and get rewards on every payment.</p>
                </div>
                <div className="flex flex-col rounded-lg gap-4 p-8 bg-blue-50 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xl">
                    <div className="text-blue-800">
                        <SouthAmericaIcon fontSize="large" />
                    </div>
                    <h3>Find The Best Near You</h3>
                    <p>Find the best hotels and places to visit near you in a single click.</p>
                </div>
            </section>
        </div>
    );
}
