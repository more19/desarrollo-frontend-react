import { useState, useEffect} from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    const handleContador = () => {
        setContador(contador + 1);
    };

    const handleContadorMenos = () => {
        setContador(contador - 1);
    };


    // cuando el componente se haya montado
    useEffect(() => {
        setContador(12);
    }, []);

    // useEffect para observar cambios en el contador
    useEffect(() => {
        if (contador === 15) {
        alert('¡El contador ha llegado a 15!');
            }
    }, [contador]); // El efecto se ejecuta cada vez que cambia el valor de contador
    
    return (
        <>
            <h4>Componente Contador</h4>
            <h5>{contador}</h5>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handleContadorMenos}>Disminuir</button>
            </div>
        </>
    )
};

export default Contador;