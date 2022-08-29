import { BASE_PATH } from './config'

export async function postComment(comment) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  }

  const resp = await fetch(`${BASE_PATH}/comments/postcomment`, options)
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

export async function getComments() {
  const comments = await fetch(`${BASE_PATH}/comments/getComments`)
  const allComments = await comments.json()

  return allComments
}
