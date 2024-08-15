import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
}

export default App;