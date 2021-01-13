import React from 'react'
import HomePage from 'Views/HomePage'
import configureStore from 'Store/store'
import { Provider } from 'react-redux'

const store = configureStore()

const App = () =>
    <Provider store={store}>
        <HomePage />
    </Provider>


export default App


