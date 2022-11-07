import { useState, useEffect } from 'react'
import { supabase } from '../utils/client'
import RealEstateList from './real_estate/RealEstateList'

export default function Destacadas() {
    const [propData, setPropData] = useState([])

    const propFetch = async () => {
        try {
            let { data: propiedad, error } = await supabase
                .from('propiedad')
                .select("*")
            if (error) throw error
            if (propiedad) setPropData(propiedad)
        }
        catch (error) {
            console.error(error);
        }
    }
    const destacadas = propData.slice(0, 9)
    useEffect(() => {
        propFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='flex justify-center'>
            <section className="w-full max-w-screen-2xl px-10 py-14 flex flex-col">
                <h1 className='text-center mb-4 text-2xl font-medium'>Propiedades Destacadas</h1>
                <RealEstateList data={destacadas} />
            </section>
        </div>
    )
}
