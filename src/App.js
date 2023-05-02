import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Caleb",
        role: "Develepor",
        img: "https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 2,
        name: "Vladimir",
        role: "Menager",
        img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 3,
        name: "Ana",
        role: "HR",
        img: "https://images.pexels.com/photos/3750717/pexels-photo-3750717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 4,
        name: "Victoria",
        role: "Develepor",
        img: "https://images.pexels.com/photos/3426975/pexels-photo-3426975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        name: "Spencer",
        role: "Develepor",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 6,
        name: "Bob",
        role: "Designer",
        img: "https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]
  )
  const showEmployee = true;
  return (
    <div className="App ">
      
      {showEmployee ?
        <>
        <input type='text' 
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}/>
        <div className='flex flex-wrap justify-center '>
          {employees.map((employee) => {
            // console.log(employee);
            return (
              <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role}
                  img={employee.img}
              />
            );
          })}
        </div>
        </>
        :
        <p>You cannot see the employee</p>
      }
    </div>
  );
}

export default App;
