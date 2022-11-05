import "./App.css";
import React from "react";
import Lottie from "react-lottie";
import Counter from "./Components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reducer from "./Components/Reducer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Error from "./Components/Error";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Reducer" element={<Reducer />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
