import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;
  return (
    <div className="App">
      
      {showEmployee ?
        <>
        <input type='text' 
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}></input>
          <Employee name='Bob' role='Intern'/>
          <Employee name='Aby' role={role}/>
          <Employee name='Vladimir' />
        </>
        :
        <p>You cannot see the employee</p>
      }
    </div>
  );
}

export default App;
