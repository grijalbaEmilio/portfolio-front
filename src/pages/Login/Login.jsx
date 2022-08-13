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
  if (!user.name) {
    return (
      <div className="login-page">
        <div className="login-page-content">
          <div className="login-page-content-header">
            <button
              type="button"
              className={
                optionForm === 'login'
                  ? 'login-page-content-header-button selected'
                  : 'login-page-content-header-button'
              }
              onClick={() => setOptionform('login')}
            >
              Ingresar
            </button>
            |
            <button
              type="button"
              className={
                optionForm !== 'login'
                  ? 'login-page-content-header-button selected'
                  : 'login-page-content-header-button'
              }
              onClick={() => setOptionform('register')}
            >
              Registrarme
            </button>
          </div>

          <div className="login-page-content-options">
            {optionForm !== 'register' ? (
              <div className="login-page-content-options-login">
                <FormLogin />
              </div>
            ) : (
              <div className="login-page-content-options-register">
                <FormRegiser>{{ callback: setOptionform }}</FormRegiser>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  return <Home />
}
