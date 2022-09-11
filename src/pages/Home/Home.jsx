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
            ¡ Hola !, soy Luis Emilio y soy Desarrollador.
            <a href="#contactMe" className="home-start-contactMe">
              <button type="button" className="button-info">
                Contácteme
              </button>
            </a>
          </h1>

          <img className="home-start-welcome-image" src={Luis} alt="" />
        </div>

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
        <div className="home-continue-presentation">
          <h1 className="home-continue-presentation-tile">
            ¿ A QUÉ ME DEDICO ?
          </h1>

          <p className="home-continue-presentation-content">
            Curso quinto semestre de
            <b> Ingeniería de Sistemas y computación </b>
            el la universidad de caldas.
            <br />
            Estoy familiarizado con el desarrollo de proyectos web usanso
            tecnologías como
            <b> Reat, </b>
            así como la implementación de
            <b> API REST </b>
            con
            <b> Node.js o python. </b>
          </p>
        </div>
        <div className="home-continue-skills">
          <h1 className="home-continue-skills-title"> SKILLS...</h1>
          <div className="home-continue-skills-content">
            <div>
              <h2>Front End</h2>
              <ul>
                <li>
                  <p> JavaScript </p>
                </li>
                <li>
                  <p> React </p>
                </li>
                <li>
                  <p> Vue </p>
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
            </div>

            <div>
              <h2>Back End</h2>
              <ul>
                <li>
                  <p> Node.js </p>
                </li>
                <li>
                  <p> Python </p>
                </li>
                <li>
                  <p> Java </p>
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
        </div>
        <div id="contactMe" className="home-continue-contactme">
          <h1 className="home-continue-contactme-title">
            ¿ Cómo puede contactarme ?
          </h1>
          <div className="home-continue-contactme-content">
            <div>
              <a href="mailto:luisegrijlaba8@gmail.com">email</a>
              <a href="http://linkedin.com/in/grijalbaEmilio">linkedin</a>
            </div>
          </div>
          <div className="home-continue-contactme-division" />
        </div>
        <div className="home-continue-comments">
          <h1 className="home-continue-comments-title">
            ¡ DEJA UN COMENTARIO !
          </h1>
          <NewComment submitText="comentar" />
          <div className="home-continue-comments-content">
            {itemListCommetns()}
          </div>
        </div>
      </div>
    </div>
  )
}
