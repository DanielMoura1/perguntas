import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Tela4(props){
    const navigate = useNavigate();
    const {nome,tela1,tela2,tela3} = props

    async function tema1(){
      
        let escolha='Sim'
       // await axios.post('http://54.236.47.96/daniel',{
        //    nome,escolha
       //})
        navigate("/");
    }
    async function tema2(){
       
       // let escolha='Não'
       // await axios.post('http://54.236.47.96/daniel',{
         //   nome,escolha
      // })
        navigate("/");
    }
    return(
    <div className="body">
        <div className="nome">Usuário:  {nome}</div>
        <div className="texto">SUAS ESCOLHAS</div>
        <div className="quandro">
          
            <img className="img3" src={tela1}></img>
            <img className="img3" src={tela2}></img>
            <img className="img3" src={tela3}></img>
            
        </div>

        <div>
            <button onClick={tema1}>voltar</button>
        </div>
     
    </div>
    )

}