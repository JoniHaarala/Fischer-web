import { Link } from 'react-router-dom';
import { yellow } from '@mui/material/colors';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

function RealEstateCard({
    id,
    imagen,
    habitaciones,
    numPhotos,
    baños,
    superficie,
    description,
    precio,
    location,
    tipoCasa,
    favorite,
    operacion,
    propietario }) {
    return (
        <section className="grid w-full py-3 grid-cols-1 gap-6">
            <div className="relative mx-auto w-96">
                <Link to={`/propiedades/${id}`} className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                    <div className="rounded-lg bg-white p-4 shadow">
                        <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                <div className="absolute inset-0 bg-black bg-opacity-80">
                                    <img src={`${imagen}`} alt={`casa en venta numero ${id}`} />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-5 mb-3 flex">
                                <p className="flex items-center font-medium text-white shadow-sm">
                                    <CameraAltIcon className='mr-2 text-xl text-white' />
                                    {numPhotos}
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-5 mb-3 flex">
                                <p className="flex items-center font-medium text-gray-800">
                                    <FavoriteIcon className='mr-2 text-2xl text-white' />
                                </p>
                            </div>

                            <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"> {tipoCasa} </span>
                            <span className="absolute top-8 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"> {operacion} </span>
                            <span className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> {favorite ? <StarIcon sx={{ color: yellow[600] }} /> : <StarBorderIcon />} </span>
                        </div>

                        <div className="mt-4">
                            <h2 className="line-clamp-1 h-8 text-2xl font-medium text-gray-800 overflow-hidden md:text-lg" title="locations desc">{location}</h2>

                            <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                {
                                    operacion === 'venta'
                                        ?
                                        <>
                                            <span className="text-sm uppercase"> u$d </span>
                                            <span className="text-2xl">{precio},00</span>
                                        </>
                                        :
                                        operacion === 'alquiler'
                                            ?
                                            <>
                                                <span className="text-sm uppercase"> $ </span>
                                                <span className="text-xl">{precio},00 al mes</span>
                                            </>
                                            :
                                            <>
                                                <span className="text-sm uppercase"> u$d </span>
                                                <span className="text-xl">{precio},00 /dia</span>
                                            </>
                                        
                                }
                            </p>
                        </div>
                        <div className="mt-4">
                            <p className="line-clamp-1 mt-2 h-20 text-lg text-gray-800 flex-wrap text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{ __html: description }}></p>
                        </div>
                        <div className="justify-center">
                            <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                                <p className="flex items-center font-medium text-gray-800">
                                    <HotelIcon className="mr-2 text-blue-900" />
                                    {habitaciones}
                                </p>

                                <p className="flex items-center font-medium text-gray-800">
                                    <BathtubIcon className="mr-2 text-blue-900" />
                                    {baños}
                                </p>
                                <p className="flex items-center font-medium text-gray-800">
                                    <HouseIcon className='mr-2 text-blue-900' />
                                    {superficie} mts<sup>2</sup>
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2">
                            <div className="flex items-center">
                                <div className="relative">
                                    <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8"></div>
                                    <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full"></span>
                                </div>

                                <p className="line-clamp-1 ml-2 text-gray-800">{propietario}</p>
                            </div>

                            <div className="flex justify-end">
                                <button><i className="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white"></i></button>
                                <button><i className="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default RealEstateCard