import React from 'react'
import HomePage from 'Views/HomePage'
import configureStore from 'Store/store'
import { Provider } from 'react-redux'
import { StylesProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gateway from '../../Views/Gateway'

const store = configureStore()

const App = () =>
    <Provider store={store}>
        <StylesProvider injectFirst>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/gateway/:id' component={Gateway} />
                </Switch>
            </Router>
        </StylesProvider>
    </Provider>


export default App


