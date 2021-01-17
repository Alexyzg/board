import { Card, CardsMap } from 'interfaces'
import { db } from './init-firebase'

const collectionName = 'cards'

export const getCards = async (): Promise<CardsMap> => {
  const snapshot = await db.collection(collectionName).get()
  const cardsMap: CardsMap = {}

  snapshot.forEach(doc => {
    cardsMap[doc.id] = { id: doc.id, ...doc.data() } as Card
  })
  return cardsMap
}

export const cardsApiService = {
  getCards,
}
