import React from "react";
import CreateGameButton from "../components/CreateGame.js";
import GameList from "../components/GameList.js";
import { connect } from "react-redux";
import store from "../store/index.js";

const mapStateToProps = (state) => {
    return ({UserNameState: state.userName});
}

const Home = ({UserNameState}) => {
    return (
        <div style={{margin: '10% 0px 0px 40%'}}>
            <div style={{margin: "0px 0px 30px 10%"}}>Hello {UserNameState} !</div>
            <CreateGameButton />
            <GameList />
        </div>
    )
};

export default connect(mapStateToProps)(Home);