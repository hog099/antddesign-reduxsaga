import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistreducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


const sagaMonitor = process.env.Node_ENV === 'development' ?
console.tron.createSagaMonitor() 
: null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});


const middlewares = [sagaMiddleware];

const store = createStore(persistreducers(rootReducer), middlewares);
const persistor = persistStore(store);


sagaMiddleware.run(rootSaga);

export {store, persistor};
