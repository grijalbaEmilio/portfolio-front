import React, { useState, useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import { loginUser } from '../../api/usersApi'

import './FormLogin.scss'

export default function FormLogin() {
  const { login } = useContext(providerApp)

  const [dataForm, setDataForm] = useState({
    email: null,
    password: null,
  })

  const eventChange = (event) => {
    const { value, name } = event.target
    setDataForm({ ...dataForm, [name]: value })
  }

  const signinUse = async () => {
    const response = await loginUser(dataForm)
    const { mode, message } = response
    if (mode !== 'success') {
      console.log(message)
    } else {
      login()
    }
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
        onClick={() => signinUse()}
      >
        Ingresar
      </button>
    </div>
  )
}
