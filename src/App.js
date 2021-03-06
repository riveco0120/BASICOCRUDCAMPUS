import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Informacion datos constante
  const usersData = [
    { id: uuidv4(), name: 'Richard', username: 'vellojin'},
    { id: uuidv4(), name: 'Sandy', username: 'yanes' },
    { id: uuidv4(), name: 'jesus', username: 'suares' },
  ]
  
  //state
  const [users, setUsers] = useState(usersData)

  //agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar un usuario
  const deleteUser = (id) => {
    
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);

  }

  //editar usuario
  const [editing, setEditing] = useState(false);

  const [curretUser, setCurrentUser] = useState({
    id: null, name: '', username:''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user =>(user.id === id ? updatedUser : user)))
  }

  return (
   <div className='container'>
     <h1>Crud App with Hooks</h1>
     <div className='flex-row'>
      <div className='flex-large'>
        
        {
          editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
              curretUser={curretUser}
              updateUser={updateUser}
              />
            </div>
          ) : <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
            </div>
        }

        
        
      </div>
      <div className='flex-large'>
        <h2>View users</h2>
        <UserTable users={users} 
        deleteUser={deleteUser} 
        editRow={editRow}
        />
      </div>
     </div>
   </div>
  );
}

export default App