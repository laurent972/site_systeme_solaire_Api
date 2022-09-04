import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import './i18n'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import App from './App'
import reduxStore from './redux/store'
import { BrowserRouter } from 'react-router-dom'

const { store, persistor } = reduxStore

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={true} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
