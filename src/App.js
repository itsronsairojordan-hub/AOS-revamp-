import react from "react";     
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './PAGES/Login';
import Register from './PAGES/Register';
import LandingPage from './PAGES/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}



//export default AOSRentalPlatform;
  export default App;