import MobileSearchActionTypes from "./mobile.types";

const INITIAL_STATE = {
    isVisible: false,
}

const mobileSearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MobileSearchActionTypes.SHOW_SEARCH:
            return {
                ...state,
                isVisible: true
            };
        case MobileSearchActionTypes.HIDE_SEARCH:
            return {
                ...state,
                isVisible: false
            };
        default:
            return state;

    }
}

export default mobileSearchReducer;