import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import './MainPage.scss'

import { Header } from 'components/Header'
import { CardList } from 'components/CardList'
import { AddCard } from 'components/AddCard'

import { cardsApiService } from 'services/firebase'
import { setCards } from 'store/cardsSlice'

// TODO: Try react-query or thunk or saga
const useDataSource = () => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    cardsApiService.getCards()
      .then(cardsMap => {
        console.log(cardsMap)
        dispatch(setCards(cardsMap))
        setIsLoaded(true)
        return
      })
      .catch(error => console.warn('useDataSource', error))
  }, [dispatch])
  return isLoaded
}

export const MainPage: React.FC = () => {
  const isLoaded = useDataSource()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="main-page">
      <Header />
      <CardList />
      <AddCard />
    </div>
  )
}
