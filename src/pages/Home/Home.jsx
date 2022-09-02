/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useContext } from 'react'
import './Home.scss'
import { ArrowDownOutlined } from '@ant-design/icons'
import Luis from '../../assets/jpg/luis2.jpg'
import NewComment from '../../components/NewComment'
import { providerApp } from '../../provider/appProvider'
import TreeComments from '../../components/TreeComments'

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
  }, [comments])

  return (
    <div className="home">
      <div className="home-backgroud-image" />
      <BackgroundParticles />

      <div className="home-content">
        <div className="home-content-start">
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
          <div>
            <h1>¿ QUIÉN SOY ?</h1>

            <p>
              Curso quinto semestre de Ingeniería de Sistemas y computación el
              la universidad de caldas. Estoy interesado y dispuesto a ser
              contratado ya sea por una compañía o persona independiente para
              llevar a cabo retos de desarrollo de software que involucren la
              creación de proyectos web full Stack.
            </p>

            <a href={Luis} download="luis">
              <button type="button"> descarguese algo ahí </button>
            </a>
          </div>
          <div>
            <h1>Sección de comentarios!</h1>
            <NewComment submitText="comentar" />
            {itemListCommetns()}
          </div>
        </div>
      </div>
    </div>
  )
}
