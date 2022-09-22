import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { supabase } from '../utils/client';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

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

export default function TabMenu() {
    const [value, setValue] = React.useState(0);
    const [tipo, setTipo] = useState('casa')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ComprarLocations = () => {
        const [WordEntered, setWordEntered] = useState('')
        const [locations, setLocations] = useState([])
        const [SelectLocation, setSelectLocation] = useState([])

        const handleFilter = async (event) => {
            const searchWord = event.target.value;
            setWordEntered(searchWord);
            let { data: places, error } = await supabase
                .from('places')
                .select("*")
                // Filters
                .ilike('localidad', `%${WordEntered}%`)
            if (error) console.log("error", error);
            else setLocations(places);

            if (searchWord === "") {
                setLocations([]);
            }
        };

        useEffect(() => {
            handleFilter()
            handleSelection()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const handleSelection = async e => {
            e.preventDefault()
            let { data: places, error } = await supabase
                .from('places')
                .select("*")
                // Filters
                .eq('id', e.target.value)
            if (error) console.log("error", error);
            else {
                setSelectLocation(places)
            };
            SelectLocation.map((value) => (
                setWordEntered(value.localidad + ', ' + value.ciudad)
            ))
            // SelectLocation.map((value) => (
            //     setLat(value.latitud)
            // ))
            // SelectLocation.map((value) => (
            //     setLon(value.longitud)
            // ))
        }

        const clearInput = () => {
            setLocations([]);
        };
        return (
            <>
                <div className="w-64 flex p-3 shadow-md rounded-xl my-5">
                    <input
                        type="text"
                        placeholder='Input location...'
                        value={WordEntered}
                        onChange={handleFilter}
                        className="pl-2"
                    />
                    <div className="searchIcon">
                        {locations.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
                {locations.length !== 0 && (
                    <div className="h-40 w-64 overflow-hidden overflow-y-auto">
                        {locations.slice(0, 25).map((value, index) => {
                            return (
                                <option className="text-sm hover:bg-gray-300 hover:cursor-pointer" key={index} value={value.id} onClick={handleSelection}>{value.localidad}, {value.ciudad}</option>
                            );
                        })}
                    </div>
                )}
            </>
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Compra" {...a11yProps(0)} />
                    <Tab label="Alquiler" {...a11yProps(1)} />
                    <Tab label="Alquiler temporario" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ComprarLocations />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
}