import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import './Modal.scss'

export default function Modal({ children }) {
  const { main, closeModal } = children
  return (
    <div className="modal">
      <div className="modal-content">
        <CloseCircleFilled
          onClick={() => closeModal(false)}
          className="modal-content-close"
        />
        <div className="modal-content-main">{main}</div>
      </div>
    </div>
  )
}
