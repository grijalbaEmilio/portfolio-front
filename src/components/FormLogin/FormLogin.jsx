import React, { useState, useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import { getUser } from '../../api/usersApi'

import './FormLogin.scss'

export default function FormLogin() {
  const { appData, setAppData, reload, setReload } = useContext(providerApp)

  const [dataForm, setDataForm] = useState({
    email: null,
    password: null,
  })

  const eventChange = (event) => {
    const { value, name } = event.target
    setDataForm({ ...dataForm, [name]: value })
    console.log(dataForm)
  }

  const signinUse = async () => {
    const response = await getUser(dataForm)
    const { mode, message, user } = response
    if (mode !== 'success') {
      console.log(message)
    } else {
      setAppData({ ...appData, user })
      setReload(!reload)
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

      <button onClick={signinUse} type="button" className="login-form-buttons">
        Ingresar
      </button>
    </div>
  )
}
