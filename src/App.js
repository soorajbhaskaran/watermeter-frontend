import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
