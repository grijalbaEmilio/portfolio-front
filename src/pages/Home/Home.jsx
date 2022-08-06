import React, { useEffect } from 'react'
import './Home.scss'
import { ArrowDownOutlined } from '@ant-design/icons'
import Libro from '../../assets/jpg/simple.jpg'
import Luis from '../../assets/jpg/luis2.jpg'
import { windowScreenMin } from '../../config/helpers'

import BackgroundParticles from '../../components/BackgroundParticles'

export default function Home() {
  const efects = () => {
    document.getElementById('tsparticles').childNodes[0].style.position = null
    const hr = document.querySelector('.home-content-start-hr')
    if (window.scrollY > 5) {
      hr.classList.add('background-hr')
    } else {
      hr.classList.remove('background-hr')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', efects)

    return () => {
      window.removeEventListener('scroll', efects)
    }
  }, [])

  return (
    <div className="home">
      <img className="home-backgroud-image" src={Libro} alt="#" />
      <BackgroundParticles />

      <div className="home-content">
        <div className="home-content-start">
          {!windowScreenMin() ? (
            <div className="home-content-start-welcome">
              <h1 className="home-content-start-welcome-title">
                Hola, soy Luis Emilio y soy programador web.
              </h1>

              <img
                className="home-content-start-welcome-image"
                src={Luis}
                alt=""
              />
            </div>
          ) : (
            <>
              <h1 className="home-content-start-welcome-title">
                Hola, soy Luis Emilio y soy programador web.
              </h1>
              <img
                className="home-content-start-welcome-image"
                src={Luis}
                alt=""
              />
            </>
          )}

          <button type="button" className="home-content-start-contact">
            Contácteme
          </button>

          {window.screen.width < 900 ? (
            <ArrowDownOutlined className="home-content-start-arrow" />
          ) : (
            <div className="home-content-start-arrows">
              <ArrowDownOutlined className="home-content-start-arrow" />
              <ArrowDownOutlined className="home-content-start-arrow" />
            </div>
          )}

          <div className="home-content-start-hr" />
        </div>

        <div className="home-content-continue">
          <h1>¿ QUIÉN SOY ?</h1>

          <p>
            Curso quinto semestre de Ingeniería de Sistemas y computación el la
            universidad de caldas. Estoy interesado y dispuesto a ser contratado
            ya sea por una compañía o persona independiente para llevar a cabo
            retos de desarrollo de software que involucren la creación de
            proyectos web full Stack.
          </p>

          <a href={Luis} download="luis">
            <button type="button"> click pleas</button>
          </a>
        </div>
      </div>
    </div>
  )
}
