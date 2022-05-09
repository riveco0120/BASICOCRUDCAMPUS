//Componente para agregar la fecha de creacion 
import React, { useState } from 'react'

const FechaCreado = () => {

  const fechaActual =()=>{
    let fecha= new Date();
    var fechaNueva = fecha.getDate() + '-' + ( fecha.getMonth() + 1 ) + '-' + fecha.getFullYear();
    var horaNueva = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return    (fechaNueva + " " + horaNueva)
  }

  let fechaIncial=fechaActual();

  const [fechacreada,setFechaCreado] =useState(fechaIncial);
  

  const generalFecha =()=>{
        var fecha = fechacreada.getDate() + '-' + ( fechacreada.getMonth() + 1 ) + '-' + fechacreada.getFullYear();
        var hora = fechacreada.getHours() + ':' + fechacreada.getMinutes() + ':' + fechacreada.getSeconds();
        setFechaCreado(fecha + " " + hora)
    }

    return ( <div>
            <h6>{fechacreada}</h6>
    </div> );
}
 
export default FechaCreado;