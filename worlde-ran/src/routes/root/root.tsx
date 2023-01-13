import React from "react";
import Navbar from "../../containers/Navbar/Navbar";
import Game from "../game/game";
import loginWithLocalStorage from "../../components/loginWithLocalStorage/loginWithLocalStorage";

export default function Root() {
  return (
    <>
      <loginWithLocalStorage />
      <Navbar />
      <h1>2</h1>
    </>
  );
}
