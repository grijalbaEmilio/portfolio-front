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

export function postProyect() {}
