import React from 'react'
import '../MainPageItem/MainPageItem.css'

export default function MainPageItem() {
  return (
    <div className="item">
      <img
        className="item__img"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
      ></img>
      <h4 className="item__title">Чизбургер-пицца</h4>
      <div className="item__options">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="item__bottom">
        <div className="item__price">от 395 ₽</div>
        <div className="buttonAdd">
          <span className="buttonAdd__plusSymbol">+</span>
          <span className="buttonAdd__label">Добавить</span>
          <span className="buttonAdd__amount">2</span>
        </div>
      </div>
    </div>
  )
}
