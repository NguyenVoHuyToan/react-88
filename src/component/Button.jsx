import React from 'react'

function ButtonHandle() {
  const ClickButton = () => {

  }
  return (
    <div style={{
      gap: "20px",
      display: "flex",
      justifyContent: "center",
      marginLeft: "-200px",
      marginTop: "120px"
    }}>
      <button onClick={ClickButton} style={{
        borderRadius: "5px",
        backgroundColor: "violet",
        color: "white"
      }}>ADD</button>
      <button style={{
        borderRadius: "5px",
        backgroundColor: "whitegrey",
        color: "grey"
      }}>Cancle</button>
    </div>
  )
}

export default ButtonHandle