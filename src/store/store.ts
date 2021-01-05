import { configureStore } from '@reduxjs/toolkit'

import { setCards } from 'services/localstorage'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer
})

store.subscribe(() => {
  const cards = store.getState().cards
  if(cards) {
    setCards(store.getState().cards)
  }
})
