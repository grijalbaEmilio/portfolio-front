import { BASE_PATH } from './config'

export async function postUser(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }

  const response = await fetch(`${BASE_PATH}/users/postUser`, options)
  const { message } = await response.json()
  if (!response.ok) {
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

export async function loginUser(data) {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  }

  const response = await fetch(`${BASE_PATH}/users/loginUser`, options)

  const { message, accesToken } = await response.json()

  if (!response.ok) {
    return {
      mode: 'error',
      message,
    }
  }
  localStorage.setItem('accesToken', accesToken)

  return {
    mode: 'success',
    message: 'login correcto',
  }
}
