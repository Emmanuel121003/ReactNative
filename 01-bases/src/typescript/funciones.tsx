export const Funciones = () => {
    const numeros = (a: number, b: number): number => {
        return a + b;
    }
    return (
        <div>
            <h1>Funciones</h1>
            <span>La suma es: {numeros(1, 2)}</span>
        </div>
    )
}
