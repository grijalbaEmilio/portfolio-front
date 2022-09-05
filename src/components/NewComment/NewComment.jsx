import React, { useState, useContext } from 'react'
import './NewComment.scss'
import { postComment } from '../../api/commentsApi'
import { providerApp } from '../../provider/appProvider'

export default function NewComment(props) {
  const { submitText, closeComponent, parentId } = props
  const { appData, setReload, reload } = useContext(providerApp)
  const { user } = appData

  const [comment, setCommetn] = useState('')

  function changeEvent(event) {
    const { value } = event.target
    const dataForm = { content: value, authorId: user.id, parentId }
    setCommetn(dataForm)
  }

  async function submitForm() {
    if (!user.name) {
      alert('¡ debe estar logueado para comentar !')
      window.location.replace('/login')
    }
    if (!comment) {
      console.log('imposible enviar comentario vacío')
      return
    }
    const { message, mode } = await postComment(comment)

    if (mode !== 'success') {
      console.log(message)
      return
    }
    setReload(!reload)
    document.getElementById('newComment').value = ''

    if (submitText === 'Responder') {
      closeComponent()
    }
  }

  function itemsButtons() {
    if (submitText !== 'comentar') {
      return (
        <div className="new-comment-buttons">
          <button
            className="new-comment-buttons-button"
            type="button"
            onClick={closeComponent}
          >
            Cancelar
          </button>
          <button
            className="new-comment-buttons-button"
            type="button"
            onClick={submitForm}
          >
            {submitText}
          </button>
        </div>
      )
    }

    return (
      <button
        className="new-comment-buttons-button"
        type="button"
        onClick={submitForm}
      >
        {submitText}
      </button>
    )
  }

  return (
    <div className="new-comment">
      <input
        onChange={changeEvent}
        id="newComment"
        type="text"
        placeholder="Escribe un comentario..."
        className="new-comment-input"
      />
      <div>{itemsButtons()}</div>
    </div>
  )
}
