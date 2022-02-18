import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneApi } from './phoneBookSlice';
import { filter } from './reducer';

export const store = configureStore({
    reducer: {
        filter: filter,
        [phoneApi.reducerPath]: phoneApi.reducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        phoneApi.middleware,
    ],
});

setupListeners(store.dispatch);
