import React, { useState } from 'react';
import { styled } from 'styled-components';
import ButtonHandle from './Button';
import ComponentTest from './ComponentTest';



function SeconTab() {
  const [info, setInfo ] = useState({
    nameproduct: "",
    amount: "",
    date: "",
  })
  const {nameproduct, amount, date} = info
  // console.log(info)
  const onHandleChange = (key,event) => {
    const value = event.target.value
    setInfo({...info, [key]: value})
  }
  const addClick = () => {
      info.map((item) => {
       let nameItem = item.nameproduct;
        let amoutItem = item.amount;
       let dateItem = item.date
      })
  }
  console.log(nameItem)
  const clearClick = ( ) => {
    

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
      <input onChange={e => onHandleChange("nameproduct",e)} type="text" placeholder='Enter Name here...'/>
      <input onChange={e => onHandleChange("amount", e)} type='text' placeholder='Enter Amout here...'/>
      <input onChange={e => onHandleChange("date", e)} type='date'/>
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
      <button onClick={clearClick} style={{
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