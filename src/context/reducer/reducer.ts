import { ActionType, AppActions } from "../Actions";
import { AppState } from "../AppContext";

function appReducer(state: AppState, action: AppActions): AppState {
    switch (action.type) {
        case ActionType.SetIndex:
            return { ...state, index: action.payload };
        default:
            return state;
    }
}

export default appReducer;
