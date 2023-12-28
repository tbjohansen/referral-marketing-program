import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from "../features/userSlice";
import authReducer from "../features/authSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
}

const persistedAuthenticationReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthenticationReducer,
    user: userReducer,
  },
});

export const persistor = persistStore(store);