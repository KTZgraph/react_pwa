import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import TopPicks from "./pages/top-picks";
import "./styles/style.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="top-picks" element={<TopPicks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
