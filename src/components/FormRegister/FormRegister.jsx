import React, { useState } from 'react'
import { postUser } from '../../api/usersApi'
import {
  emailValidation,
  lengthValidation,
} from '../../validations/FormValidation'
import './FormRegister.scss'

export default function FormRegister(props) {
  const { callback } = props
  const [dataForm, setDataForm] = useState({
    name: null,
    email: null,
    password: null,
    repeatPassword: null,
  })

  const [validForm, setValidForm] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false,
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
    if (name === 'password' || name === 'repeatPassword') {
      validExpression = lengthValidation(6, value)
      setValidForm({ ...validForm, [name]: validExpression })

      if (!validExpression) {
        element.classList.add('invalidInput')
        return
      }
      element.classList.remove('invalidInput')
      return
    }
    validExpression = lengthValidation(4, value)
    setValidForm({ ...validForm, [name]: validExpression })

    if (!validExpression) {
      element.classList.add('invalidInput')
      return
    }
    element.classList.remove('invalidInput')
  }

  function eventChange(event) {
    const { value, name } = event.target
    checkFormValid(event.target)
    setDataForm({ ...dataForm, [name]: value })
  }

  async function saveUser() {
    const { name, email, password, repeatPassword } = validForm
    if (!name || !email || !password || !repeatPassword) {
      console.log('datos incompletos')
      return
    }
    if (dataForm.password !== dataForm.repeatPassword) {
      console.log('las contraseñas no coinciden')
      return
    }

    const response = await postUser(dataForm)
    if (response.mode !== 'success') {
      console.log(response.message)
      return
    }

    callback() // render form login
  }
  return (
    <div className="register-form">
      <h2 className="register-form-title">formulario de registro</h2>

      <div className="register-form-content">
        <input
          onChange={eventChange}
          name="name"
          type="text"
          placeholder="nombre"
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
