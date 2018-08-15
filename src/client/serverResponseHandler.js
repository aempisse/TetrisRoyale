import store from "./store/store"
import action from "./actions/actionsCreator"

const register = (playerName) => {
    store.dispatch(action.updatePlayerName(playerName));
}

const gameList = (gameList) => {
    store.dispatch(action.updateGameList(gameList));
}

export default {
    register,
    gameList
}