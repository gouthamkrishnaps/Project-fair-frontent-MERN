import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { isAuthTokenContext } from './contexts/ContextShare';
import { useState } from 'react';

function App() {
  const [isAuthToken,setIsAuthToken] = useState(isAuthTokenContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/dashboard' element={isAuthToken?<Dashboard  Dashboard/>:<Home/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
