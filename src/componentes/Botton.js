import React from 'react'
export default props => {

    function cadastrar() {

        console.log('cadastrou-se');
    }

    return (
        <button onClick={cadastrar}>
            Cadastrar
        </button>
    )
}