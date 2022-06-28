import React from "react";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import Contact from "../components/Contact";

const Login = (props) => {
  return (
    <div>
      <Header item1="Home" item1_href="#home"
       item2="" 
       item3="Help" item3_href = "#footer"
       item4="" />
      <LoginPage logText="Login in into your account" page="/home" />
      <Contact />
    </div>
  );
};

export default Login;
