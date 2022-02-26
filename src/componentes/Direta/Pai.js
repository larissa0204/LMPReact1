import Filho from './Filho'

export default props => {
    let x = 15
    let y = 100
    return (

        <>
            <Filho a={x} b={y} />
            <Filho b={x + 100} b={y + 200} />
        </>

    )

}