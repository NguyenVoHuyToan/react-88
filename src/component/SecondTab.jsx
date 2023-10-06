import React, { useState } from 'react';
import { styled } from 'styled-components';
import ButtonHandle from './Button';
import ComponentTest from './ComponentTest';



function SeconTab() {
  const [name, setName ] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [data, setData] = useState([])
 
  const addClick = () => {
    const newData = {name, amount, date}
    setData([...data,newData])
  }
   const cancleClick = () => {
      setName('')
      setAmount('')
      setDate('')
   }
  return (
  <>
  <div className='block-second'>
    <div className='cover-name-input' >
     <div className='name-tab' >
      <span>Name</span>
      <span>Amount</span>
      <span>Date</span>
     </div>
     <div className='input-tab'>
      <input value={name} onChange={e => setName(e.target.value) } type="text" />
      <input value={amount} onChange={e => setAmount(e.target.value) } type='text'/>
      <input value={date} onChange={e => setDate(e.target.value)} type='date'/>
     </div>
     <div className='block-button'>
      <button className='button-add' onClick={addClick}>ADD</button>
      <button className='button-cancle' onClick={cancleClick}>Cancle</button>
    </div>
    </div>
  </div> 
  <div>
  {data.map((item,index) => {
    return(
    <div className='cover-show'>
      <div className='show' key={index}>
        <div className='show-date'>{item.date}</div>
        <div className='show-name'>{item.name}</div>
        <div className='show-amount'>{item.amount}</div>
      </div>
    </div>
    )
  })}
  </div>
  </>  
      
  )
}

export default SeconTab