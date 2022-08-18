import React, { useContext, useState } from 'react'
import { DeleteFilled, EditFilled, PlusCircleFilled } from '@ant-design/icons'
import { providerApp } from '../../provider/appProvider'
import FormCreateProyect from '../../components/adminComponents/FormCreateProyect'
import Login from '../Login'
import Home from '../Home'
import List from '../../components/List'
import Modal from '../../components/Modal'
import './Edit.scss'

export default function Edit() {
  const { appData } = useContext(providerApp)
  const { user, dataProyects } = appData
  const [vewModal, setVewModal] = useState(false)
  let list = null

  if (dataProyects) {
    list = dataProyects.map((proyect, id) => {
      const buttons = [
        <button
          onClick={() => console.log(id)}
          key={id}
          type="button"
          className="button-list button-info"
        >
          <EditFilled />
        </button>,
        <button
          onClick={() => console.log('bye')}
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
            main: (
              <FormCreateProyect>
                {{ closeModal: setVewModal }}
              </FormCreateProyect>
            ),
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
              onClick={() => setVewModal(true)}
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
