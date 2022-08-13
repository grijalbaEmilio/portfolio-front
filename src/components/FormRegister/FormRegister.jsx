import React, { useState } from 'react'
import { postUser } from '../../api/usersApi'
import './FormRegister.scss'

export default function FormRegister({ children }) {
  const { callback } = children
  const [dataForm, setDataForm] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  })

  const eventChange = (event) => {
    const { value, name } = event.target
    setDataForm({ ...dataForm, [name]: value })
  }

  const saveUser = async () => {
    const response = await postUser(dataForm)
    if (response.mode === 'success') {
      callback('login')
    }
  }
  return (
    <div className="register-form">
      <h2 className="register-form-title">formulario de registro</h2>

      <div className="register-form-content">
        <input
          onChange={eventChange}
          name="name"
          type="text"
          placeholder="naombre"
        />
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
        <input
          onChange={eventChange}
          name="repeatPassword"
          type="password"
          placeholder="repetir contraseña"
        />
      </div>

      <button
        onClick={saveUser}
        type="button"
        className="register-form-buttons"
      >
        registrarme
      </button>
    </div>
  )
}
