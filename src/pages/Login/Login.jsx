import React, { useState } from 'react'
import FormLogin from '../../components/FormLogin'
import FormRegiser from '../../components/FormRegister'
import './Login.scss'

export default function Login() {
  const [optionForm, setOptionform] = useState('register')
  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="login-page-content-header">
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
          |
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
        </div>

        <div className="login-page-content-options">
          {optionForm === 'register' ? (
            <div className="login-page-content-options-register">
              <FormRegiser />
            </div>
          ) : (
            <div className="login-page-content-options-login">
              <FormLogin />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
