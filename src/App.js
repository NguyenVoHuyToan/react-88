import logo from './logo.svg';
import './App.css';
import InputComponent, { Title } from './component/InputComponent';
import Content from './component/Content';
import ComponentTitle from './component/ComponentTitle';




function App() {
  return (
  <div style={{
    margin:"40px"
  }}>
    <h3>Sign up for an account</h3>
    <Content title = "Signing up for an account is free and easy. Fill out the form below to get started. Javascript is requied to continue"/>
    <InputComponent title = "Username" inputType = "text" width = "80%"></InputComponent>
    <InputComponent title = "Password ( 4 characters minimum )" inputType = "text"></InputComponent>
    <InputComponent title = "Password Confirm" inputType = "text"></InputComponent>
    <InputComponent title = "Email" inputType = "text"></InputComponent>
    <Content title = "By clicking the Sign up button below, I certify that I have read and agree to the TMDB terms of use and privacy policy"/>
    <ComponentTitle/>
  </div>
  
  );
}

export default App;
