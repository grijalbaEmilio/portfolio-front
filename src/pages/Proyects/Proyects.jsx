import React, { useEffect, useState, useContext } from 'react'
import Card from '../../components/Card'
import { providerApp } from '../../provider/appProvider'
import './Proyects.scss'

export default function Proyects() {
  const [proyectsFin, setProyectsFin] = useState(false)
  const { appData, reload, setReload } = useContext(providerApp)
  const { dataProyects } = appData
  useEffect(() => {
    setProyectsFin(dataProyects)
  }, [dataProyects])

  return (
    <div className="proyects">
      <div className="proyects-featured">
        <h1 className="proyects-featured-title">PROYECTOS DESTACADOS</h1>
        <div className="proyects-featured-content">
          {proyectsFin ? (
            <>
              <div className="proyects-featured-content-left">
                {proyectsFin.reduce((ac, element, index, array) => {
                  if (index < array.length / 2) {
                    return [...ac, <Card key={index}>{element}</Card>]
                  }
                  return ac
                }, [])}
              </div>

              <div className="proyects-featured-content-right">
                {proyectsFin.reduce((ac, element, index, array) => {
                  if (index >= array.length / 2) {
                    return [...ac, <Card key={index}>{element}</Card>]
                  }
                  return ac
                }, [])}
              </div>
            </>
          ) : (
            <h1>No DAta</h1>
          )}
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
        <button type="button" onClick={() => setReload(!reload)}>
          l
        </button>
      </div>
    </div>
  )
}
