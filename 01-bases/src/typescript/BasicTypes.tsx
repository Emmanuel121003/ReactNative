export const BasicTypes = () => {
  const name: string = 'Emmanuel';
  const age: number = 21;
  const isActive: boolean = true;
  const powers: number[] = [1,2,3,4,5];

  return (
    <>
      <h3>Tipos de datos</h3>
      <p>{name}</p>
        <p>{age}</p>
        <p>{isActive ? 'Activo' : 'No Activo'}</p>
        <p>{powers.join(', ')}</p>
    </>
  );
};