import React from 'react'
import { MainPage } from './components/MainPage'

import { Provider } from 'react-redux'
import { store } from './store'

export const App: React.FC = () => (
  <Provider store={store}>
    <MainPage/>
  </Provider>
)
