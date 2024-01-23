import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import  Home  from './Components/Home';
import  Main  from './Components/Main';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Main/>} /> 
          <Route path="welcome" element={<Welcome />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
