import React from 'react';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

const AdminLogin = (props) => {
    return(
        <div>
            <Header item1="Home" item2="" waterauthority="Kerala Water Authority" item3="" item4="Contact"/>
            <LoginPage logText="Administrative Login" page="/admin-home"/>
            </div>
    );
}
export default AdminLogin;