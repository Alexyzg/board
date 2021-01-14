import { CardsMap, State } from 'interfaces'

// TODO: reselect
export const getCards = (state: State): CardsMap => state.cards
