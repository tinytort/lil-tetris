import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { activeBlocks, currentBlock, nextBlock, gameScore, gameStatus } from '../reducers/reducer';
import auth from '../auth/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    activeBlocks,
    currentBlock,
    nextBlock,
    gameScore,
    gameStatus,
    auth
});

const store = createStore(
   rootReducer,
   {},
   composeEnhancers(applyMiddleware(thunk)) 
);

export default store;