import { combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import GatewayReducer from './reducer'

const reducers = combineReducers({
    gateways: GatewayReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore(){
    return createStore(
        reducers,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : ''
            )
    )
}