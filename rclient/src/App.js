import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Connect from './pages/Connect';
import Landing from './pages/Landing_Page';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={"Not found"} />
    </Routes>
    </>
  );
}

export default App;
