import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/auth';
import Picture from './components/picture/picture';
import './App.css';

function requireAuth(Component) {
    const token = localStorage.getItem('token');
    let decodeToken = atob(token);
    const parts = decodeToken.split(':');
    const username = parts[0]; // 'root'
    const password = parts[1]; // 'pass'
    if (!token || (username !== 'root' && password !== 'pass')) {
      return <LoginForm />
    } else {
      return <Component />;
    }
}



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route path="/admin/picture" element={requireAuth(Picture)}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



