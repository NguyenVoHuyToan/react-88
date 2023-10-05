import React, { useState } from 'react';
import './App.css';
import MainTable from './component/MainTable';
import SeconTab from './component/SecondTab';




function App() {
  const [change, setChange] = useState(false)
  const HandleClick = () => {
    setChange(!change)
    
  }
  return (
  <> 
    <div className='container'>    
      <div className='block'>
        <div className='cover-button'>
      <button className='button-click' onClick={HandleClick} >ADD NEW EXPENSE</button>
        </div>
       {change && <SeconTab/>}
      </div>
    </div>
      {/* <MainTable/> */}
  </>
  );
}

export default App;
