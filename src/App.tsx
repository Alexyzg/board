import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'
import { MainPage } from './components/MainPage'

import './services/firebase/init-firebase'

export const App: React.FC = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
)
