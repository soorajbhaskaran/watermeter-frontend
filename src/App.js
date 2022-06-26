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

function App() {

  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-home" element={<AdminHome />} />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
