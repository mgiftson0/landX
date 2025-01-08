// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<div>Pricing Page</div>} /> */}
        {/* <Route path="/about" element={<div>About Us Page</div>} /> */}
        {/* <Route path="/contact" element={<div>Contact Page</div>} /> */}
        {/* <Route path="/login" element={<div>Login Page</div>} /> */}
        {/* <Route path="/signup" element={<div>Sign Up Page</div>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
