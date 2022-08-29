import React, { useState, useContext } from 'react'
import FormLogin from '../../components/FormLogin'
import FormRegiser from '../../components/FormRegister'
import { providerApp } from '../../provider/appProvider'
import Home from '../Home'
import './Login.scss'

export default function Login() {
  const [optionForm, setOptionform] = useState('login')
  const { appData } = useContext(providerApp)
  const { user } = appData

  function buttonclass(option) {
    const selected = 'login-page-content-header-button selected'
    const noSelected = 'login-page-content-header-button'
    if (optionForm !== option) {
      return noSelected
    }
    return selected
  }

  function itemsFormLoginRegister() {
    if (optionForm === 'login') {
      return (
        <div className="login-page-content-options-login">
          <FormLogin />
        </div>
      )
    }

    return (
      <div className="login-page-content-options-register">
        <FormRegiser callback={() => setOptionform('login')} />
      </div>
    )
  }
  if (!user.name) {
    return (
      <div className="login-page">
        <div className="login-page-content">
          <div className="login-page-content-header">
            <button
              type="button"
              className={buttonclass('login')}
              onClick={() => setOptionform('login')}
            >
              Ingresar
            </button>
            |
            <button
              type="button"
              className={buttonclass('register')}
              onClick={() => setOptionform('register')}
            >
              Registrarme
            </button>
          </div>

          <div className="login-page-content-options">
            {itemsFormLoginRegister()}
          </div>
        </div>
      </div>
    )
  }
  return <Home />
}
