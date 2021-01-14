import { localStorage } from './localStorage'
import { JSONparse } from './utils'
import { CardsMap } from 'interfaces' 

const CARDS_NAME: string = 'cards' 
const initialCardsState: CardsMap = {}

export const setCards = (cards: CardsMap): void => {
  if (!cards) {
    return
  }
  localStorage.setItem(CARDS_NAME, JSON.stringify(cards)) 
}

export const getListOfCards = (): CardsMap => {
  const cardsJONS: string = localStorage.getItem(CARDS_NAME)
  return JSONparse(cardsJONS) || initialCardsState
}
