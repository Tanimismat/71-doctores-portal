import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home'
import './App.css';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
