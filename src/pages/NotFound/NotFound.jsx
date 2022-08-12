import React from 'react'
import NotFoundGif from '../../assets/gif/notFound.gif'
import './NotFound.scss'

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Página no encontrada</h2>
      <img className="not-found-gif" src={NotFoundGif} alt="Not found" />
    </div>
  )
}
