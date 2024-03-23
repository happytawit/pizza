import React from 'react'
import '../Categories/Categories.css'

export default function Categories() {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрыте</li>
      </ul>
    </div>
  )
}
