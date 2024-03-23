import React from 'react'
import PageContainer from '../PageContainer/PageContainer'
import '../CartPage/CartPage.css'
import CartPageItem from '../../components/CartPageItem/CartPageItem'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

export default function CartPage() {
  return (
    <PageContainer>
      <div className="cart">
        <div className="cart__top">
          <div className="cart__title">
            <svg
              fill="none"
              height="48"
              viewBox="0 0 24 24"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.978822 0.356323L0.0209961 0.643671L3.12789 11H14.9999V4.5C14.9999 3.11929 13.8806 2 12.4999 2H1.47192L0.978822 0.356323Z"
                fill="black"
              />
              <path
                clip-rule="evenodd"
                d="M5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12ZM5 13.5C5 13.2239 5.22386 13 5.5 13C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5Z"
                fill="black"
                fill-rule="evenodd"
              />
              <path
                clip-rule="evenodd"
                d="M12.5 12C11.6716 12 11 12.6716 11 13.5C11 14.3284 11.6716 15 12.5 15C13.3284 15 14 14.3284 14 13.5C14 12.6716 13.3284 12 12.5 12ZM12 13.5C12 13.2239 12.2239 13 12.5 13C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5Z"
                fill="black"
                fill-rule="evenodd"
              />
            </svg>
            <h2>Корзина</h2>
          </div>
          <div className="cart__clear">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="#B6B6B6"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="cart__items">
          <CartPageItem />
          <CartPageItem />
          <CartPageItem />
          <CartPageItem />
          <CartPageItem />
        </div>
        <div className="cart__bottom">
          <div className="cart__totalAmount">
            Всего пицц: <b>3 шт.</b>
          </div>
          <div className="cart__totalPrice">
            Сумма заказа: <b>900 ₽</b>
          </div>
        </div>
        <div className="cart__options">
          {/* <Button className="btnToHome" innerValue="Вернуться назад" /> */}
          <Link to="/" className="btnToHome">
            Вернуться назад
          </Link>
          <Button className="btnPay" innerValue="Оплатить сейчас" />
        </div>
      </div>
    </PageContainer>
  )
}
