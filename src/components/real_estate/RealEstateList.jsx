import RealEstateCard from './RealEstateCard';

export default function RealEstateList({ data }) {

  return (
    <div className="grid grid-cols-1 justify-center md:grid-cols-2 xl:grid-cols-3">
      {data.map((values) => (
        <RealEstateCard key={values.id}
          id={values.id}
          imagen={values.imagen}
          name={values.direccion}
          habitaciones={values.ambientes}
          numPhotos={5}
          baños={values.baños}
          superficie={values.superficieTotal}
          description={values.descripcion}
          precio={values.precio}
          location={values.direccion +", "+ values.barrio}
          tipoCasa={values.idTipo}
          favorite={true}
          operacion={values.idCatVenta}
          propietario={values.propietario}
        />
      ))}
    </div>
  )
}
