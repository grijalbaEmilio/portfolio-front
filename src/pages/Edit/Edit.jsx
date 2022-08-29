/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react'
import { DeleteFilled, EditFilled, PlusCircleFilled } from '@ant-design/icons'
import { providerApp } from '../../provider/appProvider'
import FormCreateProyect from '../../components/adminComponents/FormCreateProyect'
import FormUpdateProyect from '../../components/adminComponents/FormUpdateProyect'
import FormDeleteProyect from '../../components/adminComponents/FormDeleteProyect'
import Login from '../Login'
import List from '../../components/List'
import Modal from '../../components/Modal'
import './Edit.scss'

export default function Edit() {
  const { appData } = useContext(providerApp)
  const { user, dataProyects } = appData
  const [vewModal, setVewModal] = useState(false)
  const [contentModal, setContentModal] = useState(null)

  // required in list component
  function itemsListProyects(data) {
    return (
      <div className="edit-proyects-list-item">
        <h3>{data.title}</h3>

        <div>
          <button
            onClick={() => {
              setContentModal(
                <FormUpdateProyect closeModal={setVewModal} proyect={data} />
              )
              setVewModal(!vewModal)
            }}
            type="button"
            className="button-list button-info"
          >
            <EditFilled />
          </button>

          <button
            onClick={() => {
              setContentModal(
                <FormDeleteProyect closeModal={setVewModal} proyect={data} />
              )
              setVewModal(!vewModal)
            }}
            type="button"
            className="button-list button-danger"
          >
            <DeleteFilled />
          </button>
        </div>
      </div>
    )
  }

  function itemModal() {
    if (!vewModal) {
      return <> </>
    }
    return <Modal closeModal={setVewModal}>{contentModal}</Modal>
  }

  function itemFeatureProyectsEdit() {
    if (!dataProyects) {
      return <h1>NO hay Proyectos</h1>
    }
    return (
      <div className="edit-proyects">
        <div className="edit-proyects-header">
          <h2>Proyectos</h2>
          <button
            type="button"
            className="button-list button-info"
            onClick={() => {
              setContentModal(<FormCreateProyect closeModal={setVewModal} />)
              setVewModal(true)
            }}
          >
            <PlusCircleFilled />
          </button>
        </div>
        <List
          className="edit-proyects-list"
          dataSource={dataProyects}
          renderItem={itemsListProyects}
        />
      </div>
    )
  }

  if (user.role !== 'admin' || !user.name) {
    return <Login />
  }
  return (
    <div className="edit">
      {itemModal()}

      {itemFeatureProyectsEdit()}

      <div className="edit-users">users</div>
    </div>
  )
}
