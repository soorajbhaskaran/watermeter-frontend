import React from "react";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import Contact from "../components/Contact";
import { useState } from "react";

const Login = (props) => {
  const [language, setLanguage] = useState(false);

  localStorage.setItem("language", language);
  //Switching between language
  const changeLanguage = () => {
    var newLanguage = !language;
    setLanguage(newLanguage);
    localStorage.setItem("language", language);
  };
  return (
    <div>
      <Header
        item1={language ? "ബന്ധപ്പെടുക" : "Contact"}
        item1_id = "contact"
        item2=""
        item3={language ? "Switch Language" : "ഭാഷ മാറ്റുക "}
        item4=""
        item3Click={changeLanguage}
        waterauthority={
          language ? "കേരള വാട്ടർ അതോറിറ്റി" : "Kerala Water Authority"
        }
      />
      <LoginPage
        logText={
          language ? "അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്യുക!" : "Login in into your account"
        }
        page="/home"
        language={language}
      />
      <Contact />
    </div>
  );
};

export default Login;
