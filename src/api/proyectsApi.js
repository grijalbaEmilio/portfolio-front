import { BASE_PATH } from './config'

export async function getProyects() {
  const resp = await fetch(`${BASE_PATH}/proyects/getProyects`)
    .then((res) => res.json())
    .catch()

  return resp
}

export async function saveOneProyect(bodyForm) {
  const options = {
    method: 'POST',
    body: bodyForm,
  }

  const resp = await fetch(`${BASE_PATH}/proyects/postProyect`, options)

  const { message } = await resp.json()

  if (!resp.ok) {
    return {
      mode: 'error',
      message,
    }
  }

  return {
    mode: 'success',
    message,
  }
}

export async function updateOneProyect(bodyForm, id) {
  const options = {
    method: 'PUT',
    body: bodyForm,
  }

  const url = `${BASE_PATH}/proyects/updateOneProyect/${id}`

  const resp = await fetch(url, options)

  const { message } = await resp.json()

  if (!resp.ok) {
    return {
      mode: 'error',
      message,
    }
  }

  return {
    mode: 'success',
    message,
  }
}

export async function deleteOneProyect(id) {
  const resp = await fetch(`${BASE_PATH}/proyects/removeOneProyect/${id}`, {
    method: 'DELETE',
  })

  const { message } = await resp.json()

  if (!resp.ok) {
    return {
      mode: 'error',
      message,
    }
  }

  return {
    mode: 'success',
    message,
  }
}

export async function getGitHubProyects() {
  console.log('github proyects')
  return { p1: 'nn' }
}
