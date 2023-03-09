import { useState, useEffect } from 'react';
import { Link ,useNavigate } from "react-router-dom";
export default function TelaNome(props){
    const {setNomee} = props
    const navigate = useNavigate();
    const [Nome,setNome] =useState('')
    const localStorageTeste = JSON.parse(localStorage.getItem('nome'))
    let nome = localStorage.getItem('nome') !== null ? localStorageTeste:""
    const updateToken = () => {
      localStorage.setItem('nome',JSON.stringify(Nome))
    }
    async function salvarNome(e){
        e.preventDefault();
        if(Nome.length===0){
            setNome('Anônimo')
            setNomee('Anônimo')
        }else{
            updateToken(Nome);
            setNomee(Nome)
        }
        
        navigate("/tela1");
    }
    return(
    <div className="body">
        <div className="texto">Insira seu nome</div>
        <form onSubmit={salvarNome}>
            <input  className="input" type={'text'} placeholder='Nome' value={Nome} onChange={(e) => setNome(e.target.value)}></input>
            <button className='butao3'>Continuar</button>
        </form>
    </div>
    )

}