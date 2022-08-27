import React, { useEffect, useState } from 'react'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { windowWidthMobil } from '../../config/helpers'
import './Card.scss'

export default function Card({ children }) {
  const { imgUrl, tecnologies, title, description, demo, code } = children
  const [front, setFront] = useState(false)
  const [vewDescription, setVewDescription] = useState(false)

  function hoverImg() {
    setFront(true)
  }

  function upImg() {
    setFront(false)
  }

  useEffect(() => {
    if (windowWidthMobil()) {
      setFront(true)
    }
  }, [])

  return (
    <div className="card">
      <div className="card-img">
        <img className="card-img-background" src={imgUrl} alt="sin imágen" />

        {front ? (
          <div className="card-img-front">
            <div className="card-img-front-tecnologies">
              {tecnologies.map((element, index) => (
                <span key={index} className="card-tecnologie">
                  {element}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        <div onMouseOver={hoverImg} onMouseOut={upImg} className="over" />
      </div>

      <div className="card-content">
        <h2 className="card-content-title">{title}</h2>
        <button
          type="button"
          onClick={() => setVewDescription(!vewDescription)}
          className="card-content-more"
        >
          {!vewDescription ? (
            <>
              más
              <DownOutlined />
            </>
          ) : (
            <>
              menos
              <UpOutlined />
            </>
          )}
        </button>
        {vewDescription ? (
          <p className="card-content-description">{description}</p>
        ) : null}

        <div className="card-content-buttons">
          <a href={demo} className="card-content-buttons-button">
            <button type="button" className="button">
              Demo
            </button>
          </a>
          <a href={code} className="card-content-buttons-button">
            <button type="button" className="button">
              Código
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
