/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useContext } from 'react'
import './Home.scss'
import { ArrowDownOutlined } from '@ant-design/icons'
import Luis from '../../assets/jpg/luis2.jpg'
import NewComment from '../../components/NewComment'
import { providerApp } from '../../provider/appProvider'
import TreeComments from '../../components/TreeComments'
import { windowWidthMobil } from '../../config/helpers'

import BackgroundParticles from '../../components/BackgroundParticles'

export default function Home() {
  const { appData } = useContext(providerApp)
  const { comments } = appData

  function itemListCommetns() {
    if (!comments || comments.length === 0) {
      return <> cargando comentarios... </>
    }

    const commentsRoot = comments.filter((comment) => !comment.parent).reverse()

    const itemsComments = commentsRoot.map((commentRoot, index) => {
      const tree = new TreeComments(commentRoot)
      comments.forEach((comment) => {
        if (!comment.parent) {
          return
        }
        tree.addNodeComment(comment)
      })
      return <div key={index}>{tree.generateComponentTreeComments()}</div>
    })

    return <div>{itemsComments}</div>
  }

  const efects = () => {
    document.getElementById('tsparticles').childNodes[0].style.position = null
    const hr = document.querySelector('.home-division')
    if (window.scrollY > 5) {
      hr.classList.add('background-division')
    } else {
      hr.classList.remove('background-division')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', efects)

    return () => {
      window.removeEventListener('scroll', efects)
    }
  }, [comments])

  return (
    <div className="home">
      <div className="home-start">
        <BackgroundParticles />
        <div className="home-start-welcome">
          <h1 className="home-start-welcome-title">
            Hola, soy Luis Emilio y soy programador web.
          </h1>

          <img className="home-start-welcome-image" src={Luis} alt="" />
        </div>

        <a href="#contactMe">
          <button type="button" className="home-start-contact">
            Contácteme
          </button>
        </a>

        {windowWidthMobil() ? (
          <ArrowDownOutlined className="home-start-arrow" />
        ) : (
          <div className="home-start-arrows">
            <ArrowDownOutlined className="home-start-arrow" />
            <ArrowDownOutlined className="home-start-arrow" />
          </div>
        )}
      </div>
      <div className="home-division" />
      <div className="home-continue">
        <div>
          <h1>¿ QUIÉN SOY ?</h1>

          <p>
            Curso quinto semestre de Ingeniería de Sistemas y computación el la
            universidad de caldas. Estoy interesado y dispuesto a ser contratado
            ya sea por una compañía o persona independiente para llevar a cabo
            retos de desarrollo de software que involucren la creación de
            proyectos web full Stack.
          </p>

          <a href={Luis} download="luis">
            <button type="button"> descarguese algo ahí </button>
          </a>
        </div>
        <div>
          <h1>¿ Qué se hacer?</h1>
          <div className="cv-right-languages">
            <ul>
              <li>
                <p> JavaScript </p>
              </li>
              <li>
                <p> Java </p>
              </li>
              <li>
                <p> Python </p>
              </li>
              <li>
                <p> HTML5 </p>
              </li>
              <li>
                <p> CSS3 </p>
              </li>
              <li>
                <p> Tailwind </p>
              </li>
              <li>
                <p> Bootstrap </p>
              </li>
            </ul>

            <ul>
              <li>
                <p> Node.js </p>
              </li>
              <li>
                <p> React </p>
              </li>
              <li>
                <p> Vue </p>
              </li>
              <li>
                <p> Express </p>
              </li>
              <li>
                <p> Flask </p>
              </li>
              <li>
                <p> MongoDB </p>
              </li>
              <li>
                <p> SQL Server </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="contactMe">
          <h1> ¿ Cómo puede contactarme ?</h1>
          <ul>
            <li>email</li>
            <li>linkedin</li>
          </ul>
        </div>
        <div>
          <h1>Sección de comentarios!</h1>
          <NewComment submitText="comentar" />
          {itemListCommetns()}
        </div>
      </div>
    </div>
  )
}
