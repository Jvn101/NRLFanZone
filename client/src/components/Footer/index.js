import React from 'react';
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';
const styles = {
  footerStyle: {
    background: '#3f51b5',
    height: '50px',
    padding: '10px'
  },
  footerStyle2: {
    background: '#000000',
  },

  footerStyle3: {
    padding: '10px',
  },

  
  
};
const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            // Go back to the previous page in our browser's history
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
          
        )}
        <a href="https://www.google.com/" className="text-white me-4" style={styles.footerStyle3}>
         <i className="fa fa-google"></i>
       </a>
        
        <h4>&copy; {new Date().getFullYear()} NRL FanZone</h4>
      </div>
    </footer>
  );
};

export default Footer;
