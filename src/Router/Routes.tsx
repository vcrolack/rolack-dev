import { Routes as ReactRoutes, Route, BrowserRouter } from "react-router-dom";

import { Home, Portfolio, Services, Contact } from "@pages/";
import { HeaderNav, Footer } from "@components/";

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
        <Route path="/contact" element={<Contact />} />
      </ReactRoutes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};
