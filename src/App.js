import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

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
  function updateEmployee(id,newName, newRole){
    // console.log("Update employee inside of App.js");
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        // Return New 
        return {...employee, name: newName, role:newRole};
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name,role,img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

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
            const editEmployee = <EditEmployee 
            id={employee.id}
              name={employee.name} 
              role={employee.role}
              updateEmployee={updateEmployee}
            /> 
            return (
              <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
              />
            );
          })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
        </>
        : (
          <p>You cannot see the employee</p>
        )
      }
    </div>
  );
}

export default App;
