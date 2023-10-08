import React, { useEffect, useState } from 'react';
import ListSpend from './ListSpend';
import Filter from './Filter';


function Table() {
  return (
  <div>
    <div>
      <div className='cover-filter'>
        <div className='filter'> 
          <Filter 
          title="Filter by years"
          one="2021"
          two="2022"
          three="2023"
          four="2024"/>
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