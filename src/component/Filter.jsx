import React from 'react'

function Filter(props) {
  return (
    <div className='filter'>
        <span>{props.title}</span>
        <select className='select'>
            <option>{props.one}</option>
            <option>{props.two}</option>
            <option>{props.three}</option>
            <option>{props.four}</option>
        </select>
    </div>
  )
}

export default Filter