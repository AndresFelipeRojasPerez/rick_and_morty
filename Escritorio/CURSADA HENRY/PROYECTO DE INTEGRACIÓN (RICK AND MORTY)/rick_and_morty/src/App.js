import style from "./App.module.css"
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function App () {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username1 = 'andresfrp94e@gmail.com';
  const password1 = 'andres10';
  const username2 = 'yeniferavilag@gmail.com';
  const password2 = 'oxitocina8';

  function login(userData) {
    if ((userData.password === password1 && userData.userName === username1) || (userData.password === password2 && userData.userName === username2)) {
       setAccess(true);
       navigate('/home');
    }else {
      alert("Datos erróneos")
    }
 }

 useEffect(() => {
   !access && navigate('/');
}, [access]);
  
  const {pathname} = useLocation();
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {

    const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "8e2a27fa2bac.a435f2ada59bba4ec749"

   if  (characters.find((char) => char.id === id)){
    return alert ("Personaje repetido");
  }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Algo salió mal');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  return (
    <div className={style.App} style={{ padding: '25px' }}>
     
      {pathname !== "/" && <Nav onSearch = {onSearch}/>}
        
        {/* <img className={style.imagen} src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="Rick and Morty" /> */}
      
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home"
        element = {<Cards characters={characters} onClose={onClose}/>}
        />
        <Route path="/favorites" element= {<Favorites/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:detailId" element={<Detail/>}/>

      
      </Routes>
      
    </div>
  );
}

export default App
