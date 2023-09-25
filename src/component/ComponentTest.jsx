import React, { useState } from 'react'

function ComponentTest() {
    const [data, setData] = useState([])
    const handleClick = () => {
        const database = {
            nameProduct: "o-mo",
            amoutProduct: "$10",
            date: "18/03/95"
            
        }
        setData([...data,database])
    }
    console.log(data)
  return (
    <div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default ComponentTest