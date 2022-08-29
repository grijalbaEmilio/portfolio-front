import React, { useContext } from 'react'

import { deleteOneProyect } from '../../../api/proyectsApi'
import { providerApp } from '../../../provider/appProvider'

export default function FormDeleteProyect(props) {
  const { closeModal, proyect } = props
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

  const deleteMessage = `¿ desea borrar ${proyect.title} ?`
  return (
    <div>
      <h2>{deleteMessage}</h2>
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
