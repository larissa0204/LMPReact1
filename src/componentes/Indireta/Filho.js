import React, { useState } from 'react'

export default props => {
    return (
        function gerarNumero() {
            return Math.random()
        }
        return (
        <>

            <button onClick={function () {

                const n = gerarNumero()
                props.funcao('O valor é: ', n)

            </>
        }
       )

    )
}
export default Filho