import React from 'react'
import { Routes as ReactRoutes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import {Home} from '../components/Home' 
import { Portfolio } from '../components/Portfolio';
import { Curriculum } from '../components/Curriculum';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';

export const Routes = () => {
  return (
    <BrowserRouter>
      {/* Header and Nav */}
      <HeaderNav />
      {/* Main content */}
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
      </ReactRoutes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
