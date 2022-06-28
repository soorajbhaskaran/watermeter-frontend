import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";


import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import UpdatePrice from './pages/UpdatePrice';
import PreviousBill from './pages/PreviousBill';
import AddCustomer from "./pages/AddCustomer";




//importing components & pages
import Contact from "./components/Contact";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Tile from "./components/Tile";

function App() {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path='/admin-updateprice' element={<UpdatePrice/>}/>
          <Route path='/admin-home/addcustomer' element={<AddCustomer/>}/>
          
          <Route path='/home/prevbill' element={<PreviousBill/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
