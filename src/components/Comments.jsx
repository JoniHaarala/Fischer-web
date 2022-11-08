import React from "react";
import avatar1 from "../img/avatar2.jpg";
import avatar2 from "../img/avatar3.png";
import avatar3 from "../img/avatar4.jpg";

export default function Comments() {
    return (
        <div className="flex justify-center">
            <section className="w-full max-w-screen-2xl px-10 py-14 flex flex-col" id="testimonials">
                <h2 className="text-center mb-4 text-2xl font-medium">Nuestros clientes</h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 my-8">
                    <div className="bg-blue-50 rounded-lg p-8 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xls justify-center md:justify-start">
                        <p className="italic font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            asperiores eaque.
                        </p>
                        <div className="flex items-center gap-4 pt-5">
                            <img src={avatar1} alt={`imagen del ${avatar1}`} className="rounded-full h-20" />
                            <div className="details">
                                <h4 className=" text-lg">Kishan Sheth</h4>
                                <span className=" text-sm">Reporter - Smart Travel</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-8 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xls justify-center md:justify-start">
                        <p className="italic font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            asperiores eaque.
                        </p>
                        <div className="flex items-center gap-4 pt-5">
                            <img src={avatar2} alt={`imagen del ${avatar2}`} className="rounded-full h-20" />
                            <div className="details">
                                <h4 className=" text-lg">Juan Perez</h4>
                                <span className=" text-sm">Reporter - Revista Travel Report</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-8 shadow-lg transition-transform ease-in-out hover:translate-x-2 hover:-translate-y-4 hover:shadow-xls justify-center md:justify-start">
                        <p className="italic font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                            asperiores eaque.
                        </p>
                        <div className="flex items-center gap-4 pt-5">
                            <img src={avatar3} alt={`imagen del ${avatar3}`} className="rounded-full h-20" />
                            <div className="details">
                                <h4 className=" text-lg">Jhon Doe</h4>
                                <span className=" text-sm">Reporter - Reportour Magazines</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}