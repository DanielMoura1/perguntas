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
  let nome = localStorage.getItem('nome') !== null ? localStorageTeste:""
  const [nomee,setNome] =useState(nome)
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TelaNome setNomee={setNome}/>} />
      <Route path="/tela1" element={<Tela1 nome={nomee}/>} />
      <Route path="/tela2" element={<Tela2 nome={nomee}/>} />
      <Route path="/tela3" element={<Tela3 nome={nomee}/>} />
      <Route path="/tela4" element={<Tela4 nome={nomee}/>} />
    </Routes>
    </BrowserRouter>
  </div>
)
}

//export default App;
