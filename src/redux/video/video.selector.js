import { createSelector } from 'reselect'

const selectVideoState = state => state.videoState;

export const selectSuggestedVideos = createSelector(
    [selectVideoState],
    videoState => videoState.suggested);

export const selectVideo = createSelector(
    [selectVideoState],
    videoState => videoState.video
);

export const selectComments = createSelector(
    [selectVideoState],
    videoState => videoState.comments
)

export const selectUser = createSelector(
    [selectVideoState],
    videoState => videoState.user
)