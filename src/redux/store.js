import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), devTools: process.env.NODE_ENV !== 'production'
});