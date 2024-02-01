import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
  const token = localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        {token ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </>
        )}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
      </Routes>
    </Router>
  );
}

export default App;
