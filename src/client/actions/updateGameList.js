import {UPDATE_GAME_LIST} from "../constants/action_types.js"

export const updateGameList = (gameList) => {
    return {type: UPDATE_GAME_LIST, gameListPayload: gameList};
}