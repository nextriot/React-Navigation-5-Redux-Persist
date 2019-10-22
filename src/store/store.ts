import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import rootReducer from './reducers'
import reduxLogger from 'redux-logger'
import { persistStore } from 'redux-persist'

const store = configureStore({
  reducer: rootReducer,
  middleware: [reduxLogger, ...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
export const persistor = persistStore(store)

