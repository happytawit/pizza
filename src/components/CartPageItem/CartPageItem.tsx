import React from 'react'
import '../CartPageItem/CartPageItem.css'
import Button from '../Button/Button'
import Counter from '../Counter/Counter'

export default function CartPageItem() {
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"></img>
      </div>
      <div className="cartItem__text">
        <h4>Сырный цыпленок</h4>
        <span>тонкое тесто, 26см</span>
      </div>
      <Counter
        className="cartItem__counter"
        value={2}
        plus={() => {}}
        minus={() => {}}
      />
      <div className="cartItem__price">
        <span>770 ₽</span>
      </div>
      <div className="cartItem__delete">
        <Button
          className="btnDeleteCartItem"
          innerValue={
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
              <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
            </svg>
          }
        />
      </div>
    </div>
  )
}
