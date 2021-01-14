import React from 'react'
import { useSelector } from 'react-redux'

import { CardsMap, State } from 'interfaces'
import { getCards } from 'selectors'

export const CardList: React.FC = () => {
  const cards = useSelector<State, CardsMap>(getCards)

  if (!Object.values(cards).length) {
    return (<div>Greate day today without tasks.</div>)
  }

  return (<div>CardList</div>)
}
