import React from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PlaceIcon from '@mui/icons-material/Place';
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
            {
                PropiedadData.map((datos) => (
                    <>
                        <section className="principal">
                            <div className='flex justify-between items-center text-sm py-3'>

                                <p><PlaceIcon />{datos.direccion}</p>
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
                            {
                                PropiedadData.map((datos) => (
                                    <>
                                        <p className='py-3 md:py-0'><span className='italic font-semibold'>calle: </span>{datos.direccion}</p>
                                        <p className='py-3 md:py-0'><span className='italic font-semibold'>barrio: </span>{datos.barrio}</p>
                                        <p className='py-3 md:py-0'><span className='italic font-semibold'>Localidad: </span>{datos.localidad}</p>
                                        <p className='py-3 md:py-0'><span className='italic font-semibold'>Ciudad: </span>{datos.ciudad}</p>
                                    </>
                                ))
                            }
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
                                        <div dangerouslySetInnerHTML={{ __html: datos.descripcion }}></div>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <p>items de la ubicacion</p>
                                        <h2>Mapa</h2>
                                        <MapView lat={datos.latitud} lon={datos.longitud} />
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <div className="text-gray-800 grid gap-4 grid-cols-1 md:grid-cols-2">
                                            <p>Superficie cubierta: {datos.superficieCubierta} m2</p>
                                            <p>Superficie descubierta: {datos.superficieDescubierta} m2</p>
                                            <p>Superficie Total: {datos.superficieTotal} m2</p>
                                            <p>n° de habitaciones: {datos.ambientes}</p>
                                            <p>n° de dormitorios: {datos.dormitorios}</p>
                                            <p>n° de baños: {datos.baños}</p>
                                        </div>

                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <div className="text-gray-800 capitalize grid gap-4 grid-cols-2 lg:grid-cols-3">
                                            {datos.agua === true && <p>agua</p>}
                                            {datos.luz === true && <p>luz</p>}
                                            {datos.terraza === true && <p>terraza</p>}
                                            {datos.cloaca === true && <p>cloaca</p>}
                                            {datos.telefono === true && <p>telefono</p>}
                                            {datos.comercial === true && <p>comercial</p>}
                                            {datos.gas === true && <p>gas</p>}
                                            {datos.wifi === true && <p>WIFI</p>}
                                            {datos.ac === true && <p>AC</p>}
                                            {datos.pavimento === true && <p>calle pavimentada</p>}
                                            {datos.ascensor === true && <p>ascensor</p>}
                                            {datos.alarma === true && <p>alarma</p>}
                                            {datos.vigilancia === true && <p>vigilancia</p>}
                                            {datos.lavadero === true && <p>lavadero</p>}
                                            {datos.gimnasio === true && <p>gimnasio</p>}
                                            {datos.balcon === true && <p>balcón</p>}
                                            {datos.living === true && <p>living</p>}
                                            {datos.cocina === true && <p>cocina</p>}
                                            {datos.parilla === true && <p>quincho y parilla</p>}
                                            {datos.mascotas === true && <p>admite mascotas</p>}
                                            {datos.piscina === true && <p>piscina</p>}
                                            {datos.jardin === true && <p>jardin</p>}
                                            {datos.oficina === true && <p>oficina</p>}
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
                    </>
                ))
            }
        </div>
    )
}

export default PropertieDetail;