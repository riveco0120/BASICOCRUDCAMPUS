import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
    
    const {register, errors, handleSubmit} = useForm();
    
    const [nombreCompleto,setNombreCompleto] = useState([])

    const onSubmit = (data, e) => {
        const texto = data.name + " " + data.username;
        props.addUser(data)

        //limpiar campos
        e.target.reset();
        setNombreCompleto([...nombreCompleto,texto])
        console.log(nombreCompleto)

    }

    const saveUsuario=()=>{
        localStorage.setItem("usuario",nombreCompleto)
        console.log(nombreCompleto)
    }
    


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {
                ...register(
                    'name', {required: true, message: "campo Requerido"}
                )
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {
                ...register(
                    'username', {required: true, message: "ampo Requerido"}
                )
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button onClick={saveUsuario}>Add new user</button>
        </form>
    );
}

export default AddUserForm;