import React, { useState, useEffect, useContext } from 'react'
import { PlusCircleFilled, MinusCircleFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { windowScreenMin } from '../../config/helpers'
import { providerApp } from '../../provider/appProvider'
import Logo from '../../assets/png/logo.png'
import './Menu.scss'

export default function Menu({ children }) {
  // children is json
  const { user } = children
  const { logOut } = useContext(providerApp)

  const [visibilityMenu, setVisibilityMenu] = useState(true)
  useEffect(() => {
    if (windowScreenMin() && visibilityMenu) {
      setVisibilityMenu(false)
    } else {
      window.addEventListener('scroll', () => {
        const menu = document.querySelector('.menu')
        const contentMenu = document.querySelector('.menu-content')

        if (window.scrollY > 5) {
          menu.classList.add('background-menu')
          menu.classList.add('height-scroll')
          contentMenu.classList.add('height-scroll')
        } else {
          menu.classList.remove('background-menu')
          menu.classList.remove('height-scroll')
          contentMenu.classList.remove('height-scroll')
        }
      })
    }
  }, [])

  function screen(setVisibilityMenu) {
    if (windowScreenMin()) {
      setVisibilityMenu(false)
    }
  }

  return (
    <div className="menu">
      <button
        type="button"
        onClick={() => {
          setVisibilityMenu(!visibilityMenu)
        }}
        className="menu-toogle"
      >
        <div className="menu-toogle-icon">
          {visibilityMenu ? <MinusCircleFilled /> : <PlusCircleFilled />}
        </div>
      </button>
      {visibilityMenu ? (
        <div className="menu-content">
          <ul>
            <li>
              <h1>
                <Link
                  to="/"
                  onClick={() => {
                    screen(setVisibilityMenu)
                  }}
                >
                  <img src={Logo} alt="" />
                </Link>
              </h1>
            </li>
          </ul>
          <ul>
            <li>
              <h1>
                <Link
                  to="/"
                  onClick={() => {
                    screen(setVisibilityMenu)
                  }}
                >
                  Inicio
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                <Link
                  to="/proyects"
                  onClick={() => {
                    screen(setVisibilityMenu)
                  }}
                >
                  Proyectos
                </Link>
              </h1>
            </li>
            {user.role === 'admin' ? (
              <li>
                <h1>
                  <Link
                    to="/admin/edit"
                    onClick={() => {
                      screen(setVisibilityMenu)
                    }}
                  >
                    editar
                  </Link>
                </h1>
              </li>
            ) : null}
            <li>
              <h1>
                <Link
                  to="/about"
                  onClick={() => {
                    screen(setVisibilityMenu)
                  }}
                >
                  Curriculum
                </Link>
              </h1>
            </li>
            <li>
              <h1>
                {user.name ? (
                  <Link
                    className="login"
                    to="/"
                    onClick={() => {
                      screen(setVisibilityMenu)
                      logOut()
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className="login"
                    to="/login"
                    onClick={() => {
                      screen(setVisibilityMenu)
                    }}
                  >
                    Login
                  </Link>
                )}
              </h1>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}
