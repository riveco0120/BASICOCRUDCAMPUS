import React from 'react'
import FechaCreado from './util/FechaCreado';

const UserTable = (props) => {

    console.log(props.users)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Hora creado</th>                    
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{
                //mostrar itelaracion usuarios 
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td> {user.name} </td>
                            <td> {user.username} </td>
                            <td>{<FechaCreado/>}</td>                            
                            <td>
                            <button className='button muted-button'
                                onClick={
                                    () => {props.editRow(user)}
                                }
                            >Edit</button>
                            <button 
                                className='button muted-button'
                                onClick={() => {props.deleteUser(user.id)}}
                            >
                                    Delete
                            </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No hay usuario</td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
    );
}
 
export default UserTable;