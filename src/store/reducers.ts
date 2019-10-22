import storage from 'redux-persist-expo-filesystem'
import { persistReducer } from 'redux-persist'
import { createSlice } from 'redux-starter-kit'
import { combineReducers } from 'redux'

const testReducer = createSlice({
  name: 'test',
  initialState: { name: '' },
  reducers: {}
})

const rootReducer = combineReducers({
  test: testReducer.reducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer