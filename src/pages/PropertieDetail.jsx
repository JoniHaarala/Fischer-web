import React from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MapView from '../components/MapView';
import { supabase } from '../utils/client'
import { useEffect } from 'react';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PropertieDetail = () => {

    let { id } = useParams()
    const [PropiedadData, setPropiedadData] = React.useState([])

    //tab panel controller
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getPropiedad = async () => {
        try {

            let { data: propiedad, error } = await supabase
                .from('propiedad')
                .select('*')
                .eq('id', `${id}`)
            if (error) throw error;
            if (propiedad) setPropiedadData(propiedad)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPropiedad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='md:pt-16 lg:pt-20 px-5 bg-slate-200'>
            <section className="principal">
                <div className='flex justify-between items-center text-sm py-3'>
                    <p>Ubicacion de la propiedad jejejejox</p>
                    <div>
                        <p className="inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-sm font-semibold text-white">Casa</p>
                        <p className="ml-4 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-sm font-semibold text-white">Venta</p>
                    </div>
                </div>
                <h1 className='pt-4 pb-10 text-2xl'>Titulo para la pagina de la propiedad</h1>
                <div id='imagenes' className='grid grid-cols-4 grid-rows-2 gap-4 h-96'>
                    <p className="bg-gray-600 rounded-xl col-span-2 row-span-2"></p>
                    <p className="bg-gray-600 rounded-xl"></p>
                    <p className="bg-gray-600 rounded-xl"></p>
                    <p className="bg-gray-600 rounded-xl"></p>
                    <p className="bg-gray-600 rounded-xl"></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </section>
            <section id='ubicacion' className="py-7 md:py-8 bg-white rounded-xl my-5 grid grid-cols-2 md:grid-cols-4 justify-items-center">
                <p className='py-3 md:py-0'><span className='italic font-semibold'>calle: </span>alguna calle</p>
                <p className='py-3 md:py-0'><span className='italic font-semibold'>barrio: </span>algun barrio</p>
                <p className='py-3 md:py-0'><span className='italic font-semibold'>Localidad: </span>alguna localidad</p>
                <p className='py-3 md:py-0'><span className='italic font-semibold'>Ciudad: </span>alguna ciudad</p>
            </section>
            <div id='data y contact' className="rounded-xl my-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <main className="informacion col-span-2 rounded-lg my-3">
                    <Box sx={{ width: '100%', pr: 2 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
                                <Tab label="Descripcion" {...a11yProps(0)} />
                                <Tab label="Ubicacion" {...a11yProps(1)} />
                                <Tab label="Detalles" {...a11yProps(2)} />
                                <Tab label="Caracteristicas" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Aca va la descripcion
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <p>items de la ubicacion</p>
                            <h2>Mapa</h2>
                            <MapView lat={-26.821505908875235} lon={-65.30295834670717} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="text-gray-800 grid gap-4 grid-cols-1 md:grid-cols-2">
                                <p>Superficie cubierta: 200</p>
                                <p>Superficie descubierta: 300</p>
                                <p>Superficie Total: 500</p>
                                <p>n° de habitaciones: 6</p>
                                <p>n° de dormitorios: 3</p>
                                <p>n° de baños: 2</p>
                            </div>

                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div className="text-gray-800 capitalize grid gap-4 grid-cols-2 lg:grid-cols-3">
                                {
                                    PropiedadData.map((value) => (
                                        <>
                                            {value.agua === true && <p>agua</p>}
                                            {value.luz === true && <p>luz</p>}
                                            {value.terraza === true && <p>terraza</p>}
                                            {value.cloaca === true && <p>cloaca</p>}
                                            {value.telefono === true && <p>telefono</p>}
                                            {value.comercial === true && <p>comercial</p>}
                                            {value.gas === true && <p>gas</p>}
                                            {value.wifi === true && <p>WIFI</p>}
                                            {value.ac === true && <p>AC</p>}
                                            {value.pavimento === true && <p>calle pavimentada</p>}
                                            {value.ascensor === true && <p>ascensor</p>}
                                            {value.alarma === true && <p>alarma</p>}
                                            {value.vigilancia === true && <p>vigilancia</p>}
                                            {value.lavadero === true && <p>lavadero</p>}
                                            {value.gimnasio === true && <p>gimnasio</p>}
                                            {value.balcon === true && <p>balcón</p>}
                                            {value.living === true && <p>living</p>}
                                            {value.cocina === true && <p>cocina</p>}
                                            {value.parilla === true && <p>quincho y parilla</p>}
                                            {value.mascotas === true && <p>admite mascotas</p>}
                                            {value.piscina === true && <p>piscina</p>}
                                            {value.jardin === true && <p>jardin</p>}
                                            {value.oficina === true && <p>oficina</p>}
                                        </>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Box>
                </main>
                <section className="contact bg-secondary-bg my-3 rounded-lg shadow-lg">
                    <form onSubmit={''}>
                        <h2 className='text-center text-lg pt-5 pb-2 font-semibold uppercase'>Contactenos</h2>
                        <div className='px-5 flex flex-col gap-4'>
                            <TextField id="outlined-email" type="email" label="Correo" variant="filled" />
                            <TextField id="outlined-nombre" label="Nombre" variant="filled" />
                            <TextField id="outlined-asunto" label="Asunto" variant="filled" />
                            <TextField id="filled-textarea" label="Mensaje" placeholder="Ingrese su mensaje" lang='es' multiline rows={9} variant="filled" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default PropertieDetail;