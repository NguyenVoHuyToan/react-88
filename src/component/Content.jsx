import React from 'react'
import {styled} from "styled-components";// Gọi thư viện

// export const SuperBox = styled.div`
//     background-color: aqua;
//     display: flex;
//     justify-content: center;
//     gap: 20px;
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

// export const content = ({content1, content2, content3}) => {
//   return (
//     <SuperBox>
//       <BoxOne>{content1}</BoxOne>
//       <BoxTwo>{content2}</BoxTwo>
//       <BoxThree>{content3}</BoxThree>
//     </SuperBox>
//   )
    
   
// }
// export default content

function Content(props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  )
}

export default Content