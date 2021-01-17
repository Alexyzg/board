import { CardsMap } from 'interfaces'

import { JSONparse } from './utils'
import { localStorage } from './localStorage'

const CARDS_NAME = 'cards'
const initialCardsState: CardsMap = {}

export const setCards = (cards: CardsMap): void => {
  if (!cards) {
    return
  }
  localStorage.setItem(CARDS_NAME, JSON.stringify(cards))
}

export const getListOfCards = (): CardsMap => {
  const cardsJONS: string = localStorage.getItem(CARDS_NAME)
  return JSONparse<CardsMap>(cardsJONS) || initialCardsState
}
