import logo from './logo.svg';
import './App.css';
import InputComponent from './component/InputComponent';



function App() {
  return (
  <div style={{
    margin:"20px"
  }}>
    <h3>Sign up for an account</h3>
    <p>Signing up for an account is free and easy. Fill out the form below to get started. Javascript is requied to continue</p>
    <InputComponent title = "Username" inputType = "text"></InputComponent>
    <InputComponent title = "Password ( 4 characters minimum )" inputType = "text"></InputComponent>
    <InputComponent title = "Password Confirm" inputType = "text"></InputComponent>
    <InputComponent title = "Email" inputType = "text"></InputComponent>
    <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy</p>
    <button style={{
      backgroundColor: "blue",
      color: "white",
      borderRadius: "5px"
    }}>Sign up
    </button>
    <button style = {{
      border: "none",
      color: "blue",
    }}>
      Cancle
      </button>
  </div>

  );
}

export default App;
