import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
// import App from './App.tsx'
import Home from './Pages/Home.tsx';
import Signin from './Pages/Signin.tsx';
import ProductDetail from './Pages/ProductDetail.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Login from './Pages/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
        } />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
)
