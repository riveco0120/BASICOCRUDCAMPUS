//Componente para agregar la fecha de creacion 
import React from 'react'

const FechaCreado = () => {

    
  

    const generalFecha =()=>{
        let fechaHora= new Date();
        var fecha = fechaHora.getDate() + '-' + ( fechaHora.getMonth() + 1 ) + '-' + fechaHora.getFullYear();
        var hora = fechaHora.getHours() + ':' + fechaHora.getMinutes() + ':' + fechaHora.getSeconds();
        return (fecha + " " + hora)
    }

    let fechaActual=generalFecha()

    return ( <div>
            <h6>{fechaActual}</h6>
    </div> );
}
 
export default FechaCreado;