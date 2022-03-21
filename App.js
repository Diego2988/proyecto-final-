
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import produc_info from './product_info';
function App() {
  return (
    
    <div class="search-box">
      <input type="text" class="input-search" placeholder="Busca tu producto....."/> 
      <button onClick={shoot} type="button" class="btn-aceptar">Aceptar</button>
    </div>
  
  
    
);


function shoot(){
  return()
 path="/product info";
}
    
}

export default App;
