import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../Reducers/userReducer'
import postsReducer from '../Reducers/postsReducer'

const middleware = [thunk]

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['image'],
}

const reducers = combineReducers({
    user: userReducer,
    data: postsReducer,
})
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export default () => {
    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store)

    return { store, persistor }
}
