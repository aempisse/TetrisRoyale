import React from "react";
import GameBoard from "./GameBoard.js"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return ({userName: state.userName});
}

const Game = ({userName}) => {
    return (
      <div style={{width: "40%", marginLeft: "20px"}}>
          <span style={{marginLeft: "40%"}}>{userName}</span>
          <GameBoard />
      </div>  
    );
}

export default connect(mapStateToProps)(Game);