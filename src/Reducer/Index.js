import {changetheNumber,changetheValue,changetheStatus} from "./UpDown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changetheNumber,
    changetheValue,
    changetheStatus
});

export default rootReducer;