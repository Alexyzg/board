import { configureStore } from '@reduxjs/toolkit'

import { setCards } from 'services/localstorage'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})

store.subscribe(() => {
  const { cards } = store.getState()
  if (cards) {
    setCards(cards)
  }
})
