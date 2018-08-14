import {updateTetri} from "../actions/update_tetri.js";
import {moveRight} from "../actions/moveRight.js";
import {moveLeft} from "../actions/moveLeft.js";
import {moveRot} from "../actions/moveRot.js";
import store from "../store/index";

const keyLeft = 65;
const keyUp = 87;
const keyRight = 68;
const keyDown = 83;

/*export const update = () => {
    console.log("update !");
    store.dispatch(updateTetri());
}*/

export const keyHandler = (event) => {
     switch (event.keyCode) {
        case keyDown:
            event.preventDefault();
            store.dispatch(updateTetri());
            break;
        case keyRight:
            event.preventDefault();
            store.dispatch(moveRight());
            break;
        case keyLeft:
            event.preventDefault();
            store.dispatch(moveLeft());
            break;
        case keyUp:
            event.preventDefault();
            store.dispatch(moveRot());
            break;
    }
}