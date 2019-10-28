import { createStore,applyMiddleware,compose }  from 'redux'
import createSageMiddleware from 'redux-saga'

import rootReducer from './reducer'
import mySage from  './sagas/userSaga'


// create the saga middleware
const sagaMiddleware = createSageMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// mount it on the Store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
   
    )
    
 sagaMiddleware.run(mySage)
export default store
// render the application