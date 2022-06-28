import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";



//importing components & pages
import Contact from "./components/Contact";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Tile from "./components/Tile";

function App() {

  return (
    <div>
        <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-home" element={<AdminHome />} />
         
        </Routes>
    </div>
  );
}

export default App;
