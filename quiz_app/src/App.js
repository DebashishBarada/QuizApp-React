import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
     <BrowserRouter>
        <>
          <nav className='navbar navbar-expand-lg bg-light'>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to={'/home'} >Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={'/login'}>Login</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to={'/register'}>Register</NavLink>
              </li>
            </ul>
          </div>
          </nav>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} />
          </Routes>
        </>
     </BrowserRouter>
  );
}

export default App;
