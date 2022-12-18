import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar'
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>

 <BrowserRouter>
 <Navbar />
 <App />
 <Footer />
 </BrowserRouter>


  </>
   
  
);

