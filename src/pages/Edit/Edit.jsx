/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react'
import { DeleteFilled, EditFilled, PlusCircleFilled } from '@ant-design/icons'
import { providerApp } from '../../provider/appProvider'
import FormCreateProyect from '../../components/adminComponents/FormCreateProyect'
import FormUpdateProyect from '../../components/adminComponents/FormUpdateProyect'
import FormDeleteProyect from '../../components/adminComponents/FormDeleteProyect'
import Login from '../Login'
import Home from '../Home'
import List from '../../components/List'
import Modal from '../../components/Modal'
import './Edit.scss'

export default function Edit() {
  const { appData } = useContext(providerApp)
  const { user, dataProyects } = appData
  const [vewModal, setVewModal] = useState(false)
  const [contentModal, setContentModal] = useState(null)
  let list = null

  if (dataProyects) {
    list = dataProyects.map((proyect, id) => {
      const buttons = [
        <button
          onClick={() => {
            setContentModal(
              <FormUpdateProyect>
                {{ closeModal: setVewModal, proyect }}
              </FormUpdateProyect>
            )
            setVewModal(!vewModal)
          }}
          key={id}
          type="button"
          className="button-list button-info"
        >
          <EditFilled />
        </button>,
        <button
          onClick={() => {
            setContentModal(
              <FormDeleteProyect>
                {{ closeModal: setVewModal, proyect }}
              </FormDeleteProyect>
            )
            setVewModal(!vewModal)
          }}
          key={(id * 7) / 3 - 1}
          type="button"
          className="button-list button-danger"
        >
          <DeleteFilled />
        </button>,
      ]
      return { title: proyect.title, buttons }
    })
  }
  if (!user.name) {
    return <Login />
  }
  if (user.role !== 'admin') {
    return <Home />
  }
  return (
    <div className="edit">
      {vewModal ? (
        <Modal>
          {{
            main: contentModal,
            closeModal: setVewModal,
          }}
        </Modal>
      ) : null}
      {list ? (
        <div className="edit-proyects">
          <div className="edit-proyects-header">
            <h2>Proyectos</h2>
            <button
              type="button"
              className="button-list button-info"
              onClick={() => {
                setContentModal(
                  <FormCreateProyect>
                    {{ closeModal: setVewModal }}
                  </FormCreateProyect>
                )
                setVewModal(true)
              }}
            >
              <PlusCircleFilled />
            </button>
          </div>
          <List>{{ list }}</List>
        </div>
      ) : (
        <div>No proyects</div>
      )}

      <div className="edit-users">users</div>
    </div>
  )
}
