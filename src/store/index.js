
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer.tsx';
import { songReducer } from './reducers/songReducer.tsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    userModule: userReducer,
    songModule: songReducer

});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.gStore = store;