interface InterfacePersona{
    nombre: string;
    apellido: string,
    edad: number;

address: Address;
}
interface Address{
    provincia: string;
    direccion: string;
    numeroDireccion: number;
    isAlive?: boolean; //Con el signo de pregunta pongo que es opcional
}

export const ObjectLiteral = () => {
    const persona: InterfacePersona ={
        edad: 29,
        nombre: 'Nicolas',
        apellido: "Rocca",
        address: {
            provincia: "CABA",
            direccion: "Andres Lammas",
            numeroDireccion: 1187
        }
    }

    
    return (
        <>
        <h3>Objetos Literales o Objetos</h3>
        <pre>

        {JSON.stringify(persona, null, 2)}
        </pre>

    </>
  )
}
