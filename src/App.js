import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/index.html" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
