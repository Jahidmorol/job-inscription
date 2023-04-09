import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './component/Footer';
import Header from './component/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;