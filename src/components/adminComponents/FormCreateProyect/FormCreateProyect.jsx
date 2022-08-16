import React, { useState } from 'react'

import './FormCreateProyect.scss'

export default function FormCreateProyect() {
  const [dataForm, setDataForm] = useState({
    img: null,
    tecnologies: null,
    title: null,
    description: null,
    demo: null,
    code: null,
  })

  const eventChange = (event) => {
    const { value, name } = event.target
    if (name === 'image') {
      setDataForm({ ...dataForm, [name]: event.target.files[0] })
      return
    }
    setDataForm({ ...dataForm, [name]: value })
  }

  const saveImg = () => {
    const formData = new FormData()
    const { img, tecnologies, description, title, demo, code } = dataForm
    formData.append('img', img)
    formData.append('tecnologies', tecnologies)
    formData.append('description', description)
    formData.append('title', title)
    formData.append('demo', demo)
    formData.append('code', code)
    console.log(formData.get('img'))
  }

  const imputsT = () => {
    const inputs = []
    for (let i = 0; i < 2; +i) {
      inputs.push(<input type="text" />)
    }
    return inputs
  }

  return (
    <div className="postProyects">
      <h2 className="postProyects-title">formulario de Ingreso</h2>

      <form name="createProyect" className="postProyects-content">
        <input
          onChange={eventChange}
          name="image"
          type="file"
          accept="image/*"
        />
        <div className="tecnologies">
          <button type="button">más</button>
          {imputsT()}
        </div>
        <textarea
          name="description"
          rows="10"
          cols="50"
          placeholder="descripción"
        />
        <input
          onChange={eventChange}
          name="title"
          type="text"
          placeholder="Título"
        />
        <input
          onChange={eventChange}
          name="demo"
          type="text"
          placeholder="Demo"
        />
        <input
          onChange={eventChange}
          name="code"
          type="text"
          placeholder="Código"
        />
      </form>

      <button type="button" className="postProyects-button" onClick={saveImg}>
        Crear
      </button>
    </div>
  )
}
