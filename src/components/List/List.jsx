import React from 'react'
import './List.scss'

export default function List({ children }) {
  const { list } = children
  return (
    <ul className="ul-list">
      {list.map((item, id) => (
        <li className="li-item" key={id}>
          {item.title}
          <div className="li-item-buttons">
            {item.buttons.map((button) => button)}
          </div>
        </li>
      ))}
    </ul>
  )
}
