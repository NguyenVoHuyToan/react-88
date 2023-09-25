import React, { useState } from 'react';
import './App.css';
import FirstTab from './component/FirstTab';
import SeconTab from './component/SecondTab';
import MainTable from './component/MainTable';
import ComponentTest from './component/ComponentTest';




function App() {
  const [change, setChange] = useState(false)
  const HandleClick = () => {
    setChange((prev) => !prev)
    document.getElementById("firsttab").style.display = "none"
  }
  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
  }}>
    <div>
      
      <div id = "greybox" style={{
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "black",
      color: "white",
    }}>
        <div id="firsttab" style={{
      width: "600px",
      height: "100px",
      borderRadius: "10px",
      backgroundColor: "#6A95CA",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button onClick={HandleClick}  style={{
        borderRadius: "20px",
        backgroundColor: "violet",
        color: "white",
        width: "200px",
        height: "40px",
      }}>ADD NEW EXPENSE</button>
      </div>
        {change && <SeconTab/>}
        <MainTable/>
      </div>
    </div>
  </div>
  );
}

export default App;
