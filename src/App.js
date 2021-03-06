import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home'
import './App.css';
import About from './Pages/About';
import Appointment from './Pages/Appointment/Appointment';

import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Reviews from './Pages/Reviews';
import Header from './Pages/Shared/Header';
import RequireAuth from './Pages/Shared/RequireAuth';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
