import React from 'react'
import { styled } from 'styled-components';
import ListSpend from './ListSpend';
import SeconTab from './SecondTab';


function Table(props) {
  return (
    <div>
      <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}>
        <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderRadius: "10px",
      }}> 
        <span>Filter by year</span>
        <select style={{
          borderRadius: "5px",
          width: "100px",
          height: "30px"
        }}>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        </div>
      </div>
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EEB39B",
        alignItems: "center",
        height: "150px",
        width: "100%",
        gap: "30px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
      }}>
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
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div id="addbox" style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
          margin: "10px",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100px",
            backgroundColor: "black",
            height: "100px",
            fontSize: "10px",
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid white",
            color: "white"

          }}>
            <p id="datetime"></p>
          </div>
          <h2 id="name"></h2>
          <div id = "mount" style={{
            display: "flex",
            marginLeft: "290px",
            alignItems: "center",
            backgroundColor: "violet",
            color: "white",
            width: "40px",
            height: "30px",
            border: "1px solid white",
            borderRadius: "10px",
          }}>
            <p id="amount"></p>
          </div>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
          height: "50%",
          width: "95%",
          margin: "10px",
        }}>
          <div id ='date1' style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100px",
            backgroundColor: "black",
            height: "100px",
            fontSize: "10px",
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid white",
            color: "white"

          }}>
            <p>October</p>
            <p>2022</p>
            <h2>10</h2>
          </div>
          <h2 id='name1'>Electric Bill</h2>
          <div id='mount1' style={{
            display: "flex",
            marginLeft: "290px",
            alignItems: "center",
            backgroundColor: "violet",
            color: "white",
            width: "45px",
            height: "30px",
            border: "1px solid white",
            borderRadius: "10px",
          }}>
            <p>$ 75</p>
          </div>
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "10px",
          height: "50%",
          width: "95%",
          margin: "10px",
        }}>
          <div id='date2' style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100px",
            backgroundColor: "black",
            height: "100px",
            fontSize: "10px",
            margin: "10px",
            borderRadius: "10px",
            border: "1px solid white",
            color: "white"

          }}>
            <p>May</p>
            <p>2022</p>
            <h2>8</h2>
          </div>
            <h2 id='name2'>New Bike</h2>
            <div id='mount2' style={{
            display: "flex",
            marginLeft: "290px",
            alignItems: "center",
            backgroundColor: "violet",
            color: "white",
            width: "60px",
            height: "30px",
            border: "1px solid white",
            borderRadius: "10px",
          }}>
              <p>$ 100</p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
    
    
  )
}

export default Table