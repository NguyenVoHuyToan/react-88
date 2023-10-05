import React, { useState } from 'react';
import { styled } from 'styled-components';
import ButtonHandle from './Button';
import ComponentTest from './ComponentTest';



function SeconTab() {
  const [name, setName ] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [data, setData] = useState('')
  const addClick = () => {
    setData(prev => {
      const newData = [...prev, {name, amount, date}]
      console.log(newData)
    })
  }
   const cancleClick = () => {

   }
  return (
  <div style={{
    display: "flex",
    justifyContent: "center",
  }}>
    <div style={{
    display: "flex",
    gap: "50px",
    width: "550px",
    height: "150px",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid black",
    backgroundColor:"#6A95CA",
  }}>
     <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
      width: "100px",
      height: "120px",
      marginTop: "-10px"
      
     }}>
      <span>Name</span>
      <span>Amount</span>
      <span>Date</span>
     </div>
     <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", 
      gap: "10px",
      width: "100%",
      height: "100px",
      
     }}>
      <input onChange={e => setName(e.target.value) } type="text" placeholder='Enter Name here...'/>
      <input onChange={e => setAmount(e.target.value) } type='text' placeholder='Enter Amout here...'/>
      <input onChange={e => setDate(e.target.value)} type='date'/>
     </div>
      <div>
      <div style={{
      gap: "20px",
      display: "flex",
      justifyContent: "center",
      marginLeft: "-200px",
      marginTop: "120px"
    }}>
      <button onClick={addClick} style={{
        borderRadius: "5px",
        backgroundColor: "violet",
        color: "white"
      }}>ADD</button>
      <button onClick={cancleClick} style={{
        borderRadius: "5px",
        backgroundColor: "whitegrey",
        color: "grey"
      }}>Cancle</button>
    </div>
      </div>
    </div>
  </div>  
      
  )
}

export default SeconTab