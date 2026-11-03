import "./App.css";
import "./reset.css";
import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [count, setCount] = useState(0);

  const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  };

  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = async () => {
    const response = await fetch("https://randomuser.me/api?nat=en");
    const data = await response.json();
    setEmployee(data.results[0]);
  };

  return (
    <div className="App">
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
