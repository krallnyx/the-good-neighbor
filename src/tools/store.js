import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { persistToken } from  './manageToken'
import thunk from 'redux-thunk'

const store = createStore(reducer, 
	compose(
		applyMiddleware(persistToken, thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
		)
	)
export default store