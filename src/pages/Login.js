import React from 'react';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import Contact from '../components/Contact';


const Login = (props) => {
return(
  <div>
  <Header item1="Home" item2="Contact" item3="Help" item4="Contact"/>
  <LoginPage logText="Login in into your account" page="/home"/>
  <Contact/>
 
  </div>
);

   
}

export default Login;