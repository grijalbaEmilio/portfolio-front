/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'

import { deleteOneProyect } from '../../../api/proyectsApi'
import { providerApp } from '../../../provider/appProvider'

export default function FormDeleteProyect({ children }) {
  const { closeModal, proyect } = children
  const { reload, setReload } = useContext(providerApp)

  async function deleteProyect() {
    const { _id } = proyect
    const resp = await deleteOneProyect(_id)
    if (resp.mode !== 'success') {
      console.log(resp.message)
      return
    }
    setReload(!reload)
    closeModal(false)
    console.log(resp.message)
  }
  return (
    <div>
      <h2>
        ¿ Borrar
        <i> {proyect.title} </i>?
      </h2>
      <button type="button" className="button-danger" onClick={deleteProyect}>
        borrar
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
