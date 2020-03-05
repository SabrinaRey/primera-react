import React from 'react';

const nombre = "Momo"
const precio = "$890"

const Tarjeta = props => {
    return (

<div className="card">

<div className="imagen">

    <img src={props.imagen}></img>

</div>

<div className="descripcion">
    <p className="titulo">{props.nombre}</p>
    <p className="precio">{props.precio}</p>

   
    <button type="submit" className="comprar" disabled = {props.disabled} >{props.button}</button>
   
</div>

</div>
)
};

export default Tarjeta