import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>My App</h1>

      <Routes>
        <React.Fragment path="/" element={<h2>123</h2>} />
      </Routes>
    </div>
  );
};

export default App;
