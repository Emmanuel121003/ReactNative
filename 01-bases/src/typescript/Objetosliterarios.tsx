export const Objetosliterarios = () => {
    const personaje = {
        nombre: 'Emmanuel',
        edad: 21,
        isActive: true,
        poderes: [1,2,3,4,5],
    };
  return (
    <>
      <h1>Objetos Literarios</h1>
       <pre>{JSON.stringify(personaje, null, 2)}</pre>
    </>
  )
}