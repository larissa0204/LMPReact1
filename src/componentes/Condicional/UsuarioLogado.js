import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <h2>Usuário Logado</h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>

            </If>

            <If test={!usuario || !usuario.nome || !usuario.email}>
                <h2>
                    Bem vindo, faça seu login <a href="#">aqui.</a>
                </h2>
            </If>           

        </>

    )
}