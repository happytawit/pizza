import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import Categories from '../../components/Categories/Categories'
import MainPageSort from '../../components/MainPageSort/MainPageSort'
import MainPageItem from '../../components/MainPageItem/MainPageItem'

import '../MainPage/MainPage.css'

export default function MainPage() {
  return (
    <PageContainer>
      <div className="options">
        <Categories />
        <MainPageSort />
      </div>
      <div className="items">
        <h2 className="items__title">Все пиццы</h2>
        <div className="items__content">
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
          <MainPageItem />
        </div>
      </div>
    </PageContainer>
  )
}
