import './App.css';
//import Login from './components/Login';
// import { Routes , Route } from 'react-router';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' element={<Login/>} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
