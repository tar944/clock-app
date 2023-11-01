import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer';

const isDev = true;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api','map']
};

persistReducer(persistConfig, rootReducer);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  devTools: isDev,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: persistedReducer
});
