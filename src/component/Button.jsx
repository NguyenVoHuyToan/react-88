import React from 'react'

function ButtonHandle() {
  const ClickButton = () => {

  }
  return (
    <div className='block-button'>
      <button className='button-add' onClick={ClickButton}>ADD</button>
      <button className='button-cancle'>Cancle</button>
    </div>
  )
}

export default ButtonHandle