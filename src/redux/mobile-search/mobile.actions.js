import MobileSearchActionTypes from "./mobile.types";

export const showMobileSearch = () => ({
    type: MobileSearchActionTypes.SHOW_SEARCH
});

export const hideMobileSearch = () => ({
    type: MobileSearchActionTypes.HIDE_SEARCH
});