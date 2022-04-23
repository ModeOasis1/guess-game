
import "./App.css";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Loader from "./pages/Loader";
import Game from "./pages/PlayerGame";
import SecondPlayerGame from "./pages/SecondPlayerGame";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/Player" element={ <Player /> } />
            <Route path="/Loader" element={ <Loader /> } />
            <Route path="/firstPlayerGame" element={ <Game /> } />
            <Route path="/secondPlayerGame" element={ <SecondPlayerGame /> } />
        </Routes>
      </div>
  );
}

export default App;