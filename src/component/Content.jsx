import React from 'react'
import {styled} from "styled-components";// Gọi thư viện

const Content = () => {
  return (
    <div className="content">
      Content
      </div>

  )
}

// export const SuperBox = styled.div`
//   display: flex;
//   background-color: aqua;
//   justify-content: center;
//   gap: 100px;
// `;

// export const BoxOne = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100px;
//   height: 200px;
//   background-color: blue;
// `;

// export const BoxTwo = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100px;
//   height: 200px;
//   background-color: green;
// `;

// export const BoxThree = styled.div`
//    display: flex;
//   justify-content: center;
//   width: 100px;
//   height: 200px;
//   background-color: yellow;
// `;

export const content = ({title, text, button,}) => {
  return (
    <div>
      {title}
      {text}
      {button}
      </div>
  )
    
   
}
export default content