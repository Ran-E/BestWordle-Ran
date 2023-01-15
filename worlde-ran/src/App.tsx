import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/loginWithLocalStorage/loginWithLocalStorage";
import Root from "./routes/root/root";

function App() {
  const handleSuccessfulLogin = (username: string) => {
    console.log(`Welcome ${username}! You have successfully logged in.`);
  };

  const handleFailedLogin = () => {
    console.log("Login failed. Please check your username and password.");
  };
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route
        path="/home"
        element={
          <Login
            handleSuccessfulLogin={handleSuccessfulLogin}
            handleFailedLogin={handleFailedLogin}
          />
        }
      />
    </Routes>
  );
}

export default App;
