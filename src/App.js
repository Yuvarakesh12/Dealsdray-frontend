// src/App.js
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import AllEmployees from './components/Allemployees'; // Make sure the file name matches

function App() {
    return (
        < BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/employees" element={<AllEmployees />} />
                </Routes>
        </ BrowserRouter>
    );
}
export default App;


