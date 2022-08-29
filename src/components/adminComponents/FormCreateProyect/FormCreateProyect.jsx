import React, { useState, useContext } from 'react'
import { saveOneProyect } from '../../../api/proyectsApi'
import { providerApp } from '../../../provider/appProvider'

import './FormCreateProyect.scss'

export default function FormCreateProyect(props) {
  const { closeModal } = props
  const [dataForm, setDataForm] = useState({
    img: false,
    tecnologies: [],
    title: false,
    description: false,
    demo: false,
    code: false,
  })

  const [inputs, setInputs] = useState([0])

  const { reload, setReload } = useContext(providerApp)

  const eventChange = (event) => {
    const { value, name } = event.target
    if (name === 'img') {
      setDataForm({ ...dataForm, [name]: event.target.files[0] })
      return
    }
    if (name.startsWith('tecnologie-')) {
      const { tecnologies } = { ...dataForm }
      const tecnologiPosition = name[name.length - 1]
      tecnologies[tecnologiPosition] = value
      setDataForm({ ...dataForm, tecnologies })
      return
    }
    setDataForm({ ...dataForm, [name]: value })
  }

  const saveProgram = async () => {
    const formData = new FormData()
    const { img, tecnologies, description, title, demo, code } = dataForm
    if (!img || !tecnologies || !description || !title || !demo || !code) {
      console.log('incomplete data')
      return
    }
    formData.append('img', img)
    formData.append('tecnologies', JSON.stringify(tecnologies))
    formData.append('description', description)
    formData.append('title', title)
    formData.append('demo', demo)
    formData.append('code', code)

    const res = await saveOneProyect(formData)
    if (res.mode !== 'success') {
      console.log(res.message)
      return
    }
    setReload(!reload)
    closeModal(false)
  }

  const itemsInputsTecnologies = inputs.map((i, index) => (
    <input
      key={index}
      name={`tecnologie-${index}`}
      type="text"
      onChange={eventChange}
    />
  ))

  return (
    <div className="postProyects">
      <h2 className="postProyects-title">formulario de Ingreso</h2>

      <form name="createProyect" className="postProyects-content">
        <input onChange={eventChange} name="img" type="file" accept="image/*" />
        <div className="postProyects-content-tecnologies">
          <button type="button" onClick={() => setInputs([...inputs, 0])}>
            más
          </button>
          <button
            type="button"
            onClick={() => {
              const newInputs = [...inputs]
              const { tecnologies } = { ...dataForm }
              tecnologies.pop(0)
              newInputs.pop(0)
              setInputs([...newInputs])
              setDataForm({ ...dataForm, tecnologies })
            }}
          >
            menos
          </button>
          {itemsInputsTecnologies}
        </div>
        <textarea
          onChange={eventChange}
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

      <button
        type="button"
        className="postProyects-button"
        onClick={saveProgram}
      >
        Crear
      </button>
      <button
        type="button"
        className="button-danger"
        onClick={() => closeModal(false)}
      >
        cancelar
      </button>
    </div>
  )
}
