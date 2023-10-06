import React, { useEffect, useState } from 'react';
import ListSpend from './ListSpend';


function Table() {
  return (
  <div>
    <div>
      <div className='cover-filter'>
        <div className='filter'> 
          <span>Filter by year</span>
          <select className='select'>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </div>
      </div>
      <div className='boxlist'>
        <div className='list'>
          <ListSpend title = "Jan"/>
          <ListSpend title = "Feb"/>
          <ListSpend title = "Mar"/>
          <ListSpend title = "Apr"/>
          <ListSpend title = "May"/>
          <ListSpend title = "Jun"/>
          <ListSpend title = "Jul"/>
          <ListSpend title = "Aug"/>
          <ListSpend title = "Sep"/>
          <ListSpend title = "Oct"/>
          <ListSpend title = "Nov"/>
          <ListSpend title = "Dec"/>
        </div>
      </div>
      
    </div>
  </div>
    
      
    
    
  )
}

export default Table