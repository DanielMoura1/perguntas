import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
export default function Tela2(props){
    const navigate = useNavigate();
    const {nome} = props
    async function tema1(){
        alert('1')
        let escolha='Marvel'
        await axios.post('http://54.236.47.96/tela2',{
            nome,escolha
       })
        navigate("/tela3");
    }
    async function tema2(){
        alert('2')
        let escolha='DC'
        await axios.post('http://54.236.47.96/tela2',{
            nome,escolha
       })
        navigate("/tela3");
    }
    return(
    <div className="body">
        <div className="nome">usuario:  {nome}</div>
        <div className="texto">Você prefere Marvel ou DC ?</div>
        <div className="quandro">
            <div className="caixa" onClick={tema1}>
                <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15LI6olru60r5MCeS4tBsqELkznlwCAEgwA&usqp=CAU'></img>
                <button className="butao"> Marvel</button>
            </div>
            <div className="caixa" onClick={tema2}>
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJu0ZGN0f46w6I19R8NTBt8XBSzhhfORxEw&usqp=CAU"></img>
                <button className="butao">DC</button>
            </div>
        </div>
        <div>
        </div>
     
    </div>
    )

}