import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useState } from "react";
import LoginM from "../../containers/loginModal/loginModal";
import { render } from "@testing-library/react";

export default function Main() {
  const email = localStorage.getItem("email");

  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/game");
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
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
              <Button className="m-3" onClick={() => setShowLogin(true)}>
                Login
              </Button>
              <LoginM show={showLogin} close={() => setShowLogin(false)} />
              <Button onClick={() => navigateToGame()}>Enter as guest</Button>
            </>
          )}
        </div>
      </Container>
      <footer>Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
