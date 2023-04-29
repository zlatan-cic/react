import './App.css';
import Employee from './components/Employee';

function App() {
  
  const showEmployee = true;
  return (
    <div className="App">
      
      {showEmployee ?
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
        :
        <p>You cannot see the employee</p>
      }
    </div>
  );
}

export default App;
