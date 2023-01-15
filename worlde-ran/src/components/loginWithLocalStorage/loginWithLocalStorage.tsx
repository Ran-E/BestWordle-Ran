import "./loginWithLocalStorage.scss";
import React, { useState } from "react";

interface Props {
  handleSuccessfulLogin: (username: string) => void;
  handleFailedLogin: () => void;
}

interface User {
  username: string;
  password: string;
}

const Login = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // code to check if username and password are valid
    if (!username && !password) {
      setUser({ username, password });
      setIsLoggedIn(true);
      props.handleSuccessfulLogin(username);
    } else {
      alert("Invalid username or password");
      props.handleFailedLogin();
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {user?.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <label>
            Username:
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
