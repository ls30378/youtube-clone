import datas from "../../data";
import VideoActionTypes from "./video.types";


const INITIAL_STATE = {
    suggested: [],
    video: {},
    comments: [],
    user: {},
}
for (const suggest of datas.suggested) {
    INITIAL_STATE.suggested.push(...datas.videos.filter(video => video.id === suggest));

}

const videosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VideoActionTypes.FETCH_VIDEO:

            return {
                ...state,
                video: datas.videos.filter(video => video.id === Number(action.payload)
                )[0]
            };
        case VideoActionTypes.FETCH_USER:
            return {
                ...state,
                user: datas.users.filter(user => user.id === Number(action.payload))[0]
            };
        case VideoActionTypes.FETCH_COMMENTS:
            return {
                ...state,
                comments: datas.comments.filter(comment => comment.video === Number(action.payload))
            };
        case VideoActionTypes.ADD_COMMENTS:
            datas.comments.push({ ...action.payload })
            console.log(datas.comments);
            return {
                ...state,
                comments: [{ ...action.payload }, ...state.comments]
            };
        default:
            return state;

    }
}

export default videosReducer;