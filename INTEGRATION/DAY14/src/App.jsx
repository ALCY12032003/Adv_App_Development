import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import  Ahome  from './Components/Ahome';
import  Main  from './Components/Main';
import  Uhome  from './Components/Uhome';
import  Postserv  from './Components/Postserv';
import  Editserv  from './Components/Editserv';
import  Deleteserv  from './Components/Deleteserv';
import  Viewserv  from './Components/Viewserv';
import  Viewbook from './Components/Viewbook';

import  Bookserv  from './Components/Bookserv';
import  Editbook from './Components/Editbook';
import  Deletebook  from './Components/Deletbook';
import  Viewquery  from './Components/Viewquery';
import  Chat  from './Components/Chat';
import  Calender  from './Components/Calender';
import  Payment  from './Components/Payment';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Main/>} /> 
          <Route path="welcome" element={<Welcome />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/ahome" element={<Ahome/>} />
          <Route path="/uhome" element={<Uhome/>} />
          <Route path="/postserv" element={<Postserv/>} />
          <Route path="/editserv" element={<Editserv/>} />
          <Route path="/deleteserv" element={<Deleteserv/>} />
          <Route path="/viewserv" element={<Viewserv/>} />
          <Route path="/viewbook" element={<Viewbook/>} />
          <Route path="/bookserv" element={<Bookserv/>} />
          <Route path="/Editbook" element={<Editbook/>} />
          <Route path="/Deletebook" element={<Deletebook/>} />
          <Route path="/Viewquery" element={<Viewquery/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/calender" element={<Calender/>} />
          <Route path="/Payment" element={<Payment/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
