import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./routes/root/root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  );
}

export default App;
