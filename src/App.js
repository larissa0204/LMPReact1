import UsuarioLogado from './componentes/Condicional/UsuarioLogado';
import Familia from './componentes/Children/Familia'
import Membro from './componentes/Children/Membro'

//import Styles from './componentes/Style'
//import MinMax from './componentes/MinMax'
//import Botton from './componentes/Botton';
//import Titulo from './componentes/Titulo';
//import Contador from './componentes/Contador';
//import Pai from './componentes/indireta/Filho;

//function App() {
//return (

// <>
// </Pai>
//</>


//</div >

////)

//}


//function App() {

// return(
//    <div>
//     <Styles/>
//      <MinMax/>
//      <MinMax min="1" max="10"/> 
//      <MinMax min={5} max={20}/>
//      <Titulo principal="Oi" secundario="como vai"/>
//      <Botton/>
//      <Contador inicial={200} passo= {10}/>
//    </div>
//  )

//}

//export default App;



function App() {
    return (
        <div>
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva"/>
                <Membro nome="Julia" sobrenome="Silva"/>
                <Membro nome="Gui" sobrenome="Silva"/>
                <Membro nome="Rebeca" sobrenome="Silva"/>
             </Familia>
       <UsuarioLogado  usuario={{nome:" Maria", email: "maria@gmail.com"}}   />       
       <UsuarioLogado  usuario={{email: "maria@gmail.com"}}   />
       <UsuarioLogado  usuario={{nome:" Maria"}}   />
        </div>
    )
}
export default App;
