import React, { useState, useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import { loginUser } from '../../api/usersApi'
import {
  emailValidation,
  lengthValidation,
} from '../../validations/FormValidation'

import './FormLogin.scss'

export default function FormLogin() {
  const { login } = useContext(providerApp)

  const [dataForm, setDataForm] = useState({
    email: null,
    password: null,
  })

  const [validForm, setValidForm] = useState({
    email: false,
    password: false,
  })

  function checkFormValid(element) {
    const { value, name } = element
    let validExpression

    if (name === 'email') {
      validExpression = emailValidation(value)
      setValidForm({ ...validForm, [name]: validExpression })

      if (!validExpression) {
        element.classList.add('invalidInput')
        return
      }
      element.classList.remove('invalidInput')
      return
    }

    validExpression = lengthValidation(6, value)
    setValidForm({ ...validForm, [name]: validExpression })

    if (!validExpression) {
      element.classList.add('invalidInput')
      return
    }
    element.classList.remove('invalidInput')
  }

  const eventChange = (event) => {
    const { value, name } = event.target
    checkFormValid(event.target)
    setDataForm({ ...dataForm, [name]: value })
  }

  const signinUser = async () => {
    const { email, password } = validForm
    if (!email || !password) {
      console.log('datos incompletos')
      return
    }
    const response = await loginUser(dataForm)
    const { mode, message } = response
    if (mode !== 'success') {
      console.log(message)
      return
    }
    login()
  }

  return (
    <div className="login-form">
      <h2 className="login-form-title">formulario de Ingreso</h2>

      <div className="login-form-content">
        <input
          onChange={eventChange}
          name="email"
          type="text"
          placeholder="correo"
        />
        <input
          onChange={eventChange}
          name="password"
          type="password"
          placeholder="contraseña"
        />
      </div>

      <button
        type="button"
        className="login-form-buttons"
        onClick={() => signinUser()}
      >
        Ingresar
      </button>
    </div>
  )
}
