import { createSlice } from '@reduxjs/toolkit'

import { Card, CardsMap } from 'interfaces'
import { getListOfCards } from 'services/localstorage'
import { removeProps } from 'utils'

const cardsSlice = createSlice({
  name: 'cards',
  initialState: getListOfCards(),
  reducers: {
    setCards(state: CardsMap, actions: { payload: CardsMap }) {
      state = actions.payload
    },
    addCard(state: CardsMap, action: { payload: Card; }) {
      const { id, title, description } = action.payload
      state[id]  = { title, description, id }
    },
    deleteCard(state: CardsMap, action: { payload: Card }) {
      const { id } = action.payload
      removeProps([id], state)
    }
  }
})

export const { addCard, deleteCard, setCards } = cardsSlice.actions

export default cardsSlice.reducer
