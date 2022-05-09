import React, { useEffect, useState } from 'react'

function Profile() {

    const [nombre,setNombre] =useState("");

    const getDate =()=>{
      return  localStorage.getItem("usuario")
    }

    useEffect( ()=>{
        setNombre(getDate())
    },[] )

  return (

    <div>hola{nombre}</div>
  )
}

export default Profile