import React from 'react'
import { useSelector } from 'react-redux'

import { CardsMap, State } from 'interfaces'

export const CardList: React.FC = () => {
  const cards: CardsMap = useSelector((state: State ) => state.cards)

  if (!cards.length) {
    return (<div>Greate day today wothout tasks.</div>)
  } 

  return (<div>CardList</div>)
}
