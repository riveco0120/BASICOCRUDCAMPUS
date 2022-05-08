import React from 'react';
import UserTable from './components/UserTable';

function App() {
  return (
   <div className='container'>
     <h1>CRUPD App with Hooks</h1>
     <div className='flex-row'>
       <div className='flex-large'>
         <h2>Add user</h2>
       </div>
       <div className='flex-large'>
         <UserTable/>
       </div>
     </div>

   </div>
  );
}

export default App;
