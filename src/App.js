import React,{useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Informacion datos constante
  const usersData = [
    { id: uuidv4(), name: 'Richard', username: 'riveco' },
    { id: uuidv4(), name: 'Sandy', username: 'sandy' },
    { id: uuidv4(), name: 'jesus', username: 'jesusmoreno' },
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

  return (
   <div className='container'>
     <h1>CRUPD App with Hooks</h1>
     <div className='flex-row'>
       <div className='flex-large'>
         <h2>Add user</h2>
       </div>
       <div className='flex-large'>
         <UserTable users={users}/>
       </div>
     </div>

   </div>
  );
}

export default App;
