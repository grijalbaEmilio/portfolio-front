/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react'
import {
  HomeFilled,
  FolderOpenFilled,
  EditFilled,
  ProfileFilled,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { windowWidthMobil } from '../../config/helpers'
import { providerApp } from '../../provider/appProvider'
import Logo from '../../assets/png/logo.png'
import './Menu.scss'

export default function Menu({ children }) {
  // children is json
  const { user } = children
  const { logOut } = useContext(providerApp)

  const [optionSelected, setOptionSelected] = useState('home')

  useEffect(() => {
    let previusScrollY = 0
    window.addEventListener('scroll', () => {
      const contentMenu = document.querySelector('.menu-content')

      const actualScrollY = window.scrollY
      if (windowWidthMobil()) {
        if (actualScrollY > previusScrollY) {
          contentMenu.classList.add('hidden-menu-bye')
          contentMenu.classList.remove('hidden-menu-hello')
          previusScrollY = actualScrollY
          return
        }
        contentMenu.classList.remove('hidden-menu-bye')
        contentMenu.classList.add('hidden-menu-hello')
        previusScrollY = actualScrollY
        return
      }
      if (actualScrollY > 5) {
        contentMenu.classList.add('background-menu')
        contentMenu.classList.add('height-scroll')
      } else {
        contentMenu.classList.remove('background-menu')
        contentMenu.classList.remove('height-scroll')
      }
    })
  }, [])

  function iconsOptionsMenu() {
    const iconsSmallWidht = {
      logo: '< LE />',
      home: (
        <>
          <HomeFilled />
          <span className="descriptionItem">Inicio</span>
        </>
      ),
      proyects: (
        <>
          <FolderOpenFilled />
          <span className="descriptionItem">Proyectos</span>
        </>
      ),
      edit: (
        <>
          <EditFilled />
          <span className="descriptionItem">Editar</span>
        </>
      ),
      curriculum: (
        <>
          <ProfileFilled />
          <span className="descriptionItem">CV</span>
        </>
      ),
      logIn: (
        <>
          <LoginOutlined />
          <span className="descriptionItem">Ingresar</span>
        </>
      ),
      logOut: (
        <>
          <LogoutOutlined />
          <span className="descriptionItem">Salir</span>
        </>
      ),
    }

    const iconsLargeWidht = {
      logo: <img className="luis-logo" src={Logo} alt="< LuisEmilio />" />,
      home: 'Inicio',
      proyects: 'Proyetos',
      edit: 'Editar',
      curriculum: 'CV',
      logIn: 'logIn',
      logOut: 'logOut',
    }

    if (windowWidthMobil()) {
      return iconsSmallWidht
    }
    return iconsLargeWidht
  }

  function classItemSelected(option) {
    if (windowWidthMobil()) {
      return optionSelected === option ? 'option-selected-mobil' : null
    }
    return optionSelected === option ? 'option-selected-laptop' : null
  }

  function itemsLogInLogOut() {
    const { name } = user

    if (!name) {
      return (
        <Link
          to="/login"
          onClick={() => setOptionSelected('login')}
          className={classItemSelected('login')}
        >
          {iconsOptionsMenu().logIn}
        </Link>
      )
    }
    return (
      <Link
        to="/"
        onClick={() => {
          setOptionSelected('home')
          logOut()
        }}
        className={optionSelected === 'login' ? 'option-selected' : null}
      >
        {iconsOptionsMenu().logOut}
      </Link>
    )
  }

  function itemLogo() {
    if (!windowWidthMobil()) {
      return (
        <li>
          <Link to="/">{iconsOptionsMenu().logo}</Link>
        </li>
      )
    }
    return null
  }

  return (
    <div className="menu">
      <div className="menu-content">
        <ul>
          {itemLogo()}
          <li>
            <Link
              to="/"
              onClick={() => setOptionSelected('home')}
              className={classItemSelected('home')}
            >
              {iconsOptionsMenu().home}
            </Link>
          </li>
          <li>
            <Link
              to="/proyects"
              onClick={() => setOptionSelected('proyects')}
              className={classItemSelected('proyects')}
            >
              {iconsOptionsMenu().proyects}
            </Link>
          </li>
          {user.role === 'admin' ? (
            <li>
              <Link
                to="/admin/edit"
                onClick={() => setOptionSelected('edit')}
                className={classItemSelected('edit')}
              >
                {iconsOptionsMenu().edit}
              </Link>
            </li>
          ) : null}
          <li>
            <Link
              to="/about"
              onClick={() => setOptionSelected('about')}
              className={classItemSelected('about')}
            >
              {iconsOptionsMenu().curriculum}
            </Link>
          </li>
          <li>{itemsLogInLogOut()}</li>
        </ul>
      </div>
    </div>
  )
}
