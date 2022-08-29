import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import './Modal.scss'

export default function Modal(props) {
  const { closeModal, children } = props

  return (
    <div className="modal">
      <div className="modal-content">
        <CloseCircleFilled
          onClick={() => closeModal(false)}
          className="modal-content-close"
        />
        <div className="modal-content-main">{children}</div>
      </div>
    </div>
  )
}
