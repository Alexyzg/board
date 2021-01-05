import React from 'react'

import './MainPage.scss'

import { Header } from 'components/Header'
import { CardList } from 'components/CardList'

export const MainPage: React.FC = () => (
  <div className="main-page">
    <Header />
    <CardList />
  </div>
)