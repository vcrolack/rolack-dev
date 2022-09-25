import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Routes } from './Router/Routes';

library.add(fab)

function App() {
  return (
    <div className='layout'>
      <Routes />
    </div>
  );
}

export default App;
