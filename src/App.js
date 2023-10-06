import React, { useState } from 'react';
import './App.css';
import MainTable from './component/MainTable';
import SeconTab from './component/SecondTab';




function App() {
  const [change, setChange] = useState(true)
  const HandleClick = () => {
    setChange(!change)
    
  }
  return (
  <> 
    {change ? (<div className='container'>    
      <div className='block'>
        <div className='cover-button'>
      <button className='button-click' onClick={HandleClick} >ADD NEW EXPENSE</button>
        </div>
      </div>
    </div>) : (!change && <SeconTab/> )}
    <MainTable/>
  </>
  );
}

export default App;
