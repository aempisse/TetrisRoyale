import React from "react";
import Game from "./Game.js"
import ExitGame from "../components/ExitGameRoom.js"

const InGame = () =>{
    return (
        <div>
            <Game />
            <ExitGame />
        </div>
    );
}

export default InGame;