import store from "./store/index.js"
import * as nameForm from "./actions/nameForm.js";
import {updateGameList} from "./actions/updateGameList.js";

const register = (playerName) => {
    store.dispatch(nameForm.updateUserName(playerName));
}

const gameList = (gameList) => {
    store.dispatch(updateGameList(gameList));
}

const newGame = (newGame) => {
    newGame = newGame
}

export default {
    register,
    gameList,
    newGame
}