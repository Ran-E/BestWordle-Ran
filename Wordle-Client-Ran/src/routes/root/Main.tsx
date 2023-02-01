import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

import LoginM from "../../containers/loginModal/loginModal";

export default function Main() {
  const email = localStorage.getItem("email");

  const [showLogin, setShowLogin] = useState(false);
  const [off, setOff] = useState(true);

  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/game");
  };

  const logOut = () => {
    localStorage.clear();
    setOff((current) => !current);
  };

  const logIn = () => {
    setShowLogin(false);
    navigateToGame();
  };

  return (
    <>
      <Container className="container-fluid">
        <h1>Welcome, {email ? email : "Guest"}!</h1>
        <div>
          {email ? (
            <>
              <Button className="m-3" onClick={logOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <>
                <Button className="m-3" onClick={() => setShowLogin(true)}>
                  Login
                </Button>
                <LoginM show={showLogin} close={logIn} />
                <Button onClick={() => navigateToGame()}>Enter as guest</Button>
              </>
            </>
          )}
        </div>
      </Container>
      <footer>Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
