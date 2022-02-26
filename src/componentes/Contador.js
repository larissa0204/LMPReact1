import React, { useState } from "react";

function Contador(props) {

    const [numero, setNumero] = useState(props.inicial)

    const incremento = () => {
        if (numero >= 200) {
            alert("Você atingiu o limite")
            return

        }

        setNumero(numero + props.passo)

    }
    const decremento = () => {
        if (numero == 0) {
            alert("Não é mais possível!")
            return

        }
        setNumero(numero - props.passo)
    }
    return (
        <>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </>
    )
}
export default Contador