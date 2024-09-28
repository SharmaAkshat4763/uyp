import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import Register from './components/Register'; 
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component

// Helper component to conditionally render the Navbar
function Layout({ children }) {
  const location = useLocation();

  // If the current path is "/register", do not show the Navbar
  const hideNavbar = location.pathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Render Navbar unless on /register */}
      {children} {/* Render the child routes */}
      <Footer /> {/* Footer is rendered on all pages */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Content Route */}
          <Route path="/" element={<MainContent />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
