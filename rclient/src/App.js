import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Connect from './pages/Connect';
import Landing from './pages/Landing_Page';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import Success from './pages/Success';
import Fluctuation from './pages/Fluctuation';
import ProtectedRoute from './Context/Protected/ProtectedRoute';
import { UserAuthContextProvider } from './Context/authContext/AuthContextProvider';
import Dashboard from './pages/Dashboard';
import PopUp from './Component/PopUp';

function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Landing/>} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/result" element={<Success />} />
        <Route path="/fluctuation" element={<Fluctuation/>} />
        <Route path="/reset" element={<PopUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<ProtectedRoute>
                                            <Dashboard/>
                                          </ProtectedRoute>} />
        <Route path="*" element={"Not found"} />
      </Routes>
    </UserAuthContextProvider>
    </>
  );
}

export default App;
