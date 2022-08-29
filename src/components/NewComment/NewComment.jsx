import React, { useState, useContext } from 'react'
import './NewComment.scss'
import { postComment } from '../../api/commentsApi'
import { providerApp } from '../../provider/appProvider'

export default function NewComment(props) {
  const { submitText, closeComponent } = props
  const { appData, setReload, reload } = useContext(providerApp)
  const { user } = appData

  const [comment, setCommetn] = useState('')

  function changeEvent(event) {
    const { value } = event.target
    const dataForm = { content: value, authorId: user.id }
    setCommetn(dataForm)
  }

  async function submitForm() {
    if (!user.name) {
      throw new Error('no hay usuario en el sistema')
    }
    if (!comment) {
      console.log('imposible enviar')
      return
    }
    const { message, mode } = await postComment(comment)

    if (mode !== 'success') {
      console.log(message)
      return
    }
    console.log('posteado')
    setReload(!reload)
  }

  function itemsButtons() {
    if (submitText !== 'comentar') {
      return (
        <>
          <button type="button" onClick={closeComponent}>
            cancelar
          </button>
          <button type="button" onClick={submitForm}>
            {submitText}
          </button>
        </>
      )
    }

    return (
      <button type="button" onClick={submitForm}>
        {submitText}
      </button>
    )
  }

  return (
    <div>
      <input onChange={changeEvent} type="text" />
      <div>{itemsButtons()}</div>
    </div>
  )
}
