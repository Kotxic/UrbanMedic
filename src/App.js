import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/Login" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
