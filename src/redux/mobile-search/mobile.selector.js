import { createSelector } from 'reselect'

const selectMobileSearch = state => state.mobileSearch;

export const selectIsMobileSearchVisible = createSelector(
    [selectMobileSearch],
    mobileSearch => mobileSearch.isVisible
);