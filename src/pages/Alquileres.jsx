import React, { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/client';
import SkeletonLoader from '../components/SkeletonLoader';

const RealEstateList = lazy(() => import('../components/real_estate/RealEstateList'));

export default function Alquileres() {
  /* 
    aca va todo el codigo para el manejo de los filtros para mandar despues la data a la grilla de propieades.
  */
  const [propData, setPropData] = useState([])

  const propFetch = async () => {
    try {
      let { data: propiedad, error } = await supabase
        .from('propiedad')
        .select("*")
        // Filters
        .eq('idCatVenta', 'alquiler')
      if (error) throw error
      if (propiedad) setPropData(propiedad)
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    propFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="md:pt-16 lg:pt-20">
      <h1>Pagina para alquilar propiedades</h1>
      <div>Aca el menu de filtros de las propiedades</div>
      <Suspense fallback={<SkeletonLoader />}>
        <RealEstateList data={propData} />
      </Suspense>
    </div>
  )
}
