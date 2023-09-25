import React, { useState } from 'react';

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


function FirstTab(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
      width: "600px",
      height: "100px",
      borderRadius: "10px",
      backgroundColor: "#6A95CA",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button  style={{
        borderRadius: "20px",
        backgroundColor: "violet",
        color: "white",
        width: "200px",
        height: "40px",
      }}>ADD NEW EXPENSE</button>
    </div>
    </div>
  )
}

export default FirstTab

