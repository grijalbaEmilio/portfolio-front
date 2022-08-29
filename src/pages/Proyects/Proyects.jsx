/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react'
import Card from '../../components/Card'
import { providerApp } from '../../provider/appProvider'
import List from '../../components/List'
import './Proyects.scss'

export default function Proyects() {
  const { appData } = useContext(providerApp)
  const { dataProyects, dataGitHubProyects } = appData

  function renderItemsListProyectsGithub(data) {
    const { name, login, avatarUrl, htmlUrl, language } = data
    return (
      <div>
        <img
          className="proyects-github-list-image"
          src={avatarUrl}
          alt="no avatar"
        />
        <h3>{name}</h3>
        <h3>{login}</h3>
        <h3>{language}</h3>
        <button type="button">
          <a href={htmlUrl}>ver código</a>
        </button>
      </div>
    )
  }

  function itemsFeatureProyects() {
    if (!dataProyects) {
      return <> Cargando proyectos </>
    }

    const leftProyects = dataProyects.reduce((ac, proyect, index, array) => {
      if (index < array.length / 2) {
        return [...ac, <Card key={index} proyect={proyect} />]
      }
      return ac
    }, [])

    const rightProyects = dataProyects.reduce((ac, proyect, index, array) => {
      if (index >= array.length / 2) {
        return [...ac, <Card key={index} proyect={proyect} />]
      }
      return ac
    }, [])

    return (
      <>
        <div className="proyects-featured-content-left">{leftProyects}</div>

        <div className="proyects-featured-content-right">{rightProyects}</div>
      </>
    )
  }

  function itemsGithubProyects() {
    if (!dataGitHubProyects) {
      return <div> Cargando Proyectos </div>
    }
    return (
      <List
        className="proyects-github-list"
        dataSource={dataGitHubProyects}
        renderItem={renderItemsListProyectsGithub}
      />
    )
  }

  return (
    <div className="proyects">
      <div className="proyects-featured">
        <h1 className="proyects-featured-title">PROYECTOS DESTACADOS</h1>
        <div className="proyects-featured-content">
          {itemsFeatureProyects()}
        </div>

        <span className="proyects-featured-division" />
      </div>

      <div className="proyects-github">
        <h1 className="proyects-github-title">PROYECTOS DE GITHUB</h1>
        <div className="proyects-github-content">{itemsGithubProyects()}</div>
      </div>
    </div>
  )
}
