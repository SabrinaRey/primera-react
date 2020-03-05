import React from 'react';
import './App.css';
import set from './set.png';
import mesa from './mesa.png';
import silla from './silla.png';
import biblioteca from './biblioteca.png';
import Tarjeta from './tarjeta'

function App() {
  return (
    <div className="main">

    <Tarjeta nombre ="Set" precio="$5000" imagen ={set} button= "Comprar" disabled={false}/>
    <Tarjeta nombre ="Mesa" precio="$1600" imagen ={mesa} button= "Comprar" disabled={false}/>
    <Tarjeta nombre ="Silla" precio="$500"imagen ={silla} button= "Comprar" disabled={false}/>
    <Tarjeta nombre ="Biblioteca" precio="$3600"imagen ={biblioteca} button = "No Stock" disabled={true} />

    </div>

  );
}

export default App;
