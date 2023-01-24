import React from "react";
import Login from "../../components/loginWithLocalStorage/loginWithLocalStorage";
import TextInputs from "../../components/TextInputs";
import Navbar from "../../containers/Navbar/Navbar";
// import Game from "../game/game";

export default function Root() {
  return (
    <>
      <div className="login">
        <Login
          handleSuccessfulLogin={function (username: string): void {
            throw new Error("Function not implemented.");
          }}
          handleFailedLogin={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </>
  );
}
