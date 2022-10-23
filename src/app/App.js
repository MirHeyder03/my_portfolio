import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
