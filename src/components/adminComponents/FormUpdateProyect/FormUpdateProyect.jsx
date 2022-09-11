import React, { useState, useContext } from 'react'
import { updateOneProyect } from '../../../api/proyectsApi'
import { providerApp } from '../../../provider/appProvider'

import './FormUpdateProyect.scss'

export default function FormUpdateProyect(props) {
  const { closeModal, proyect } = props
  const { img, tecnologies, title, description, demo, code, _id } = proyect
  const [dataForm, setDataForm] = useState({
    img,
    tecnologies,
    title,
    description,
    demo,
    code,
    id: _id,
  })

  const [textInputImg, setTextInputImg] = useState('¡ Sube una imagen !')

  const [inputs, setInputs] = useState(tecnologies)

  const { reload, setReload } = useContext(providerApp)

  const eventChange = (event) => {
    const { value, name } = event.target

    if (name === 'img') {
      setDataForm({ ...dataForm, [name]: event.target.files[0] })
      setTextInputImg(event.target.files[0].name)
      return
    }
    if (name.startsWith('tecnologie-')) {
      const { tecnologies } = { ...dataForm }
      tecnologies[name[name.length - 1]] = value
      setDataForm({ ...dataForm, tecnologies })
      return
    }
    setDataForm({ ...dataForm, [name]: value })
  }

  const updateProyect = async () => {
    const formData = new FormData()
    const { img, tecnologies, description, title, demo, code } = dataForm
    formData.append('img', img)
    formData.append('tecnologies', JSON.stringify(tecnologies))
    formData.append('description', description)
    formData.append('title', title)
    formData.append('demo', demo)
    formData.append('code', code)

    const res = await updateOneProyect(formData, dataForm.id)
    if (res.mode !== 'success') {
      console.log(res.message)
      return
    }

    console.log(res.message)
    setReload(!reload)
    closeModal(false)
  }

  const itemsInputsTecnologies = inputs.map((element, index) => (
    <input
      key={index}
      name={`tecnologie-${index}`}
      type="text"
      defaultValue={element || ''}
      onChange={eventChange}
    />
  ))

  return (
    <div className="updateProyects">
      <h2 className="updateProyects-title">Actualizar Proyecto</h2>

      <form name="UpdateProyect" className="updateProyects-content">
        <label htmlFor="img" className="postProyects-content-img-label">
          <span>{textInputImg}</span>
          <input
            className="postProyects-content-img-input"
            onChange={eventChange}
            name="img"
            id="img"
            type="file"
            accept="image/*"
          />
        </label>

        <div className="updateProyects-content-tecnologies">
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
          value={dataForm.description}
        />

        <input
          onChange={eventChange}
          id="title"
          name="title"
          type="text"
          value={dataForm.title}
        />

        <input
          onChange={eventChange}
          name="demo"
          type="text"
          value={dataForm.demo}
        />
        <input
          onChange={eventChange}
          name="code"
          type="text"
          value={dataForm.code}
        />
      </form>

      <div className="updateProyects-buttons">
        <button type="submit" onClick={updateProyect}>
          Actualizar
        </button>

        <button
          type="button"
          className="button-danger"
          onClick={() => closeModal(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
