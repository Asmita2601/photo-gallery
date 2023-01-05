import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import GallaryReact from "./component/GallaryReact";

const App= ()=> {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/photo-gallery" element={<GallaryReact />} />
  <Route path="/contact" element={<Contact />} />

  </Routes>
  </BrowserRouter>
  )
};

export default App;
