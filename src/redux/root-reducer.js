import { combineReducers } from "redux";
import mobileSearchReducer from "./mobile-search/mobile.reducer";
import videosReducer from "./video/video.reducer";

const rootReducer = combineReducers({
    mobileSearch: mobileSearchReducer,
    videoState: videosReducer
});

export default rootReducer;