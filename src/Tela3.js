import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Tela3(props){
    const navigate = useNavigate();
    const {nome} = props
    async function tema1(){
        
        let escolha='Wandinha'
       // await axios.post('http://54.236.47.96/tela3',{
            //nome,escolha
     //  })
        navigate("/tela4");
    }
    async function tema2(){
       alert('Com essa Wandinha é impossível escolher outra coisa')
       let escolha='Tentou'
       //await axios.post('http://54.236.47.96/tela3',{
          // nome,escolha
      //})
    }
    return(
    <div className="body">
        <div className="nome">Usuário:  {nome}</div>
        <div className="texto">Você prefere Wandinha ou Stranger Things ?</div>
        <div className="quandro">
            <div className="caixa" onClick={tema1}>
                <img className="img" src='wandinha.png'></img>
                <button className="butao">Wandinha</button>
            </div>
            <div className="caixa" onClick={tema2}>
                <img className="img" src="data:image/jpeg;base64,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"></img>
                <button className="butao">Stranger Things</button>
            </div>
        </div>
        <div>
        </div>
     
    </div>
    )

}