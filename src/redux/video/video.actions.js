import VideoActionTypes from "./video.types";

export const fetchVideoAction = (id) => ({
    type: VideoActionTypes.FETCH_VIDEO,
    payload: id,
});

export const fetchUserAction = (id) => ({
    type: VideoActionTypes.FETCH_USER,
    payload: id
});

export const fetchCommentsAction = (id) => ({
    type: VideoActionTypes.FETCH_COMMENTS,
    payload: id
});


export const addCommentsAction = (comment) => ({
    type: VideoActionTypes.ADD_COMMENTS,
    payload: comment
});