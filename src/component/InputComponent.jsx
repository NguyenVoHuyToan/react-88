import React from 'react'

export const Title = () => {
  return
}
function InputComponent(props) {
  return (
    <>
    <div>
      {props.title}
    </div>
    <input type = {props.inputType}></input>
    </>
  )
}

export default InputComponent