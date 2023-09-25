import React from 'react'

function ListSpend(props) {
  return (
    <div style={{
        backgroundColor: "#DEBDFE",
        width: "15px",
        height: "100px",
        border: "1px solid black",
        borderRadius: "10px"
    }}>
        <div style={{
            display: "flex",
            marginTop: "100px"
        }}>   
             {props.title}
        </div>
    </div>
  )
}

export default ListSpend