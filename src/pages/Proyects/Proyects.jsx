import React from 'react'
import Card from '../../components/Card'
import proyects from '../../data/proyects'
import './Proyects.scss'

export default function Proyects() {
  return (
    <div className="proyects">
      <div className="proyects-featured">
        <h1 className="proyects-featured-title">PROYECTOS DESTACADOS</h1>
        <div className="proyects-featured-content">
          <div className="proyects-featured-content-left">
            {proyects.reduce((ac, element, index, array) => {
              if (index <= array.length / 2) {
                return [...ac, <Card key={index}>{element}</Card>]
              }
              return ac
            }, [])}
          </div>

          <div className="proyects-featured-content-right">
            {proyects.reduce((ac, element, index, array) => {
              if (index > array.length / 2) {
                return [...ac, <Card key={index}>{element}</Card>]
              }
              return ac
            }, [])}
          </div>
        </div>

        <span className="proyects-featured-division" />
      </div>

      <div className="proyects-github">
        <h1>PROYECTOS GITHUB</h1>
        <h1>PROYECTOS GITHUB</h1>
        <h1>PROYECTOS GITHUB</h1>
        <h1>PROYECTOS GITHUB</h1>
        <h1>PROYECTOS GITHUB</h1>
        <h1>PROYECTOS GITHUB</h1>
      </div>
    </div>
  )
}
