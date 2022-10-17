import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MapView from '../components/MapView';


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
    
    //tab panel controller
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    <Box sx={{ width: '100%', pr:2 }}>
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
                            <MapView lat={-26.821505908875235} lon={-65.30295834670717}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            detalles de la propiedad.
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Caracteristicas de la propiedad.
                        </TabPanel>
                    </Box>
                </main>
                <section className="contact bg-secondary-bg my-3 rounded-lg">
                    <form onSubmit={''}>
                        <h2 className='text-center text-lg pt-5 pb-2 font-semibold uppercase'>Contactenos</h2>
                        <div>
                            <div className="p-3 m-1 flex items-center">
                                <label htmlFor="">Correo:</label>
                                <input type="email" className='ml-4 p-3 w-full rounded-lg border-none' />
                            </div>
                            <div className="p-3 m-1 flex items-center">
                                <label htmlFor="">Nombre:</label>
                                <input type="text" className='ml-2 p-3 w-full rounded-lg border-none' />
                            </div>
                            <div className="p-3 m-1 flex items-center">
                                <label htmlFor="">Asunto:</label>
                                <input type="text" className='ml-4 p-3 w-full rounded-lg border-none' />
                            </div>
                        </div>
                        <div className='p-3 m-1 flex items-center'>
                            <label htmlFor="">Mensaje:</label>
                            <textarea rows="9" className='ml-2 rounded-lg w-full'></textarea>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default PropertieDetail;