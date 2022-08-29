import React from 'react'
import './List.scss'

export default function List(props) {
  const { dataSource, renderItem, className } = props

  const contentList = dataSource.map((e, i) => (
    <li className="li-item" key={i}>
      {renderItem(e)}
    </li>
  ))

  return <ul className={`${className} ul-list`}>{contentList}</ul>
}
