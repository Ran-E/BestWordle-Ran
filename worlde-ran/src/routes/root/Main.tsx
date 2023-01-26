import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./Main.scss";
import { useState } from "react";
import LoginM from "../../containers/loginModal/loginModal";

export default function Main() {
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/game");
  };

  return (
    <>
      <Container className="container-fluid">
        <h1>Welcome Guest</h1>
        <div>
          <Button className="m-3" onClick={() => setShowLogin(true)}>
            Login
          </Button>
          <LoginM show={showLogin} close={() => setShowLogin(false)} />
          <Button onClick={() => navigateToGame()}>Enter as guest</Button>
        </div>
      </Container>
      <footer>Copyright &copy; 2023 Ran Elbaz</footer>
    </>
  );
}
