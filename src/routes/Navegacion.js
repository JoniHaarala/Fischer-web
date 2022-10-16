import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home'
import AlquilerTemporario from '../pages/AlquilerTemporario';
import Alquileres from '../pages/Alquileres'
import Comprar from '../pages/Comprar'
import PropertieDetail from '../pages/PropertieDetail';
import { Faq } from '../pages/Faq';

export default function Navegacion() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compra" element={<Comprar />} />
      <Route path="/alquiler" element={<Alquileres />} />
      <Route path="/alquiler-temporario" element={<AlquilerTemporario />} />
      <Route path="/propiedades/:id" element={<PropertieDetail />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  )
}
