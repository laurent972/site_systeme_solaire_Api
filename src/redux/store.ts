import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { reducers } from './index'
import rootSaga from './sagas'

export const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>

// use this in your components when you need a typed version of useSelector() hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const makeStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const persistConfig: PersistConfig<any> = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth', 'app', 'search'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: [
      ...getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
  })

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor, sagaMiddleware }
}

export default makeStore()
