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
        item1=""
        item1_id=""
        item2=""
        item3=""
        item4=""
        item3Click={changeLanguage}
        waterauthority="കേരള വാട്ടർ അതോറിറ്റി" 
      />
      <LoginPage
        logText= "അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്യുക!" 
        page="/home"
        language={language}
      />
      <Contact />
    </div>
  );
};

export default Login;
