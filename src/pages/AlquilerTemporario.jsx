import RealEstateCard from "../components/real_estate/RealEstateCard"

export default function AlquilerTemporario() {
  const lasCasasXD = [
    {
      name: "Aurora",
    },
    {
      name: "Burora",
    },
    {
      name: "Casual",
    }
  ]

  /* 
  Todo esto es a modo de ejemplo solo para poder maquetar un poco como seria la cosa jejox.
  Ya despues agregamos la data real de los alquileres con el fetch a la base de datos.
  */
  return (
    <div className="md:pt-16 lg:pt-20">
      <h1>Pagina para alquiler temporalmente propiedades</h1>
      <div className="grid grid-cols-4">

      </div>
      {lasCasasXD.map((values) => (
        <RealEstateCard
          id={values.name}
          name={values.name}
          habitaciones={values.name}
          numPhotos={values.name}
          baños={values.name}
          superficie={values.name}
          description={values.name}
          precio={values.name}
          location={values.name}
          tipoCasa={values.name}
          favorite={values.name}
          propietario={values.name}
        />
      ))}
    </div>
  )
}
