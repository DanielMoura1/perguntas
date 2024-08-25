import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Tela1 from "./Tela1.js";
import Tela2 from "./Tela2.js";
import Tela3 from "./Tela3.js";
import Tela4 from "./Tela4.js";
import TelaNome from "./TelaNome";
import { useState, useEffect } from 'react';
export default  function App() {
  //docker system prune -a
  //docker-compose up nginx
  const localStorageTeste = JSON.parse(localStorage.getItem('nome'))
  const localStorageTela1 = JSON.parse(localStorage.getItem('tela01'))
  const localStorageTela2 = JSON.parse(localStorage.getItem('tela02'))
  const localStorageTela3 = JSON.parse(localStorage.getItem('tela03'))
  let tela01 =localStorage.getItem('tela01') !== null ? localStorageTela1:""
  let tela02 =localStorage.getItem('tela02') !== null ? localStorageTela2:""
  let tela03 =localStorage.getItem('tela03') !== null ? localStorageTela3:""
  let nome = localStorage.getItem('nome') !== null ? localStorageTeste:""
  const [nomee,setNome] =useState(nome)
  const [escolha1,setEscolha1] =useState(tela01)
  const [escolha2,setEscolha2] =useState(tela02)
  const [escolha3,setEscolha3] =useState(tela03)
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TelaNome setNomee={setNome}/>} />
      <Route path="/tela1" element={<Tela1 nome={nomee} setEscolha={setEscolha1}/>} />
      <Route path="/tela2" element={<Tela2 nome={nomee} setEscolha={setEscolha2}/>} />
      <Route path="/tela3" element={<Tela3 nome={nomee} setEscolha={setEscolha3}/>} />
      <Route path="/tela4" element={<Tela4 nome={nomee} tela1={escolha1} tela2={escolha2} tela3={escolha3}/>} />
    </Routes>
    </BrowserRouter>
  </div>
)
}

//export default App;
