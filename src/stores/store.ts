import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import * as F from '@/stores/features/index';
import * as S from '@/stores/services/index';

// Combine reducers
const rootReducer = combineReducers({
    auth: F.authReducer,
    toggle: F.toggleReducer,
    [S.authApi.reducerPath]: S.authApi.reducer,
    [S.projectApi.reducerPath]: S.projectApi.reducer,
});

// Configure Redux persist
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(S.projectApi.middleware, S.authApi.middleware),
});

// Create Redux persistor
export const persistor = persistStore(store);