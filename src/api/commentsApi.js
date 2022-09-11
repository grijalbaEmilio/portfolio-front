/* eslint-disable no-underscore-dangle */
import { BASE_PATH, API_VERSION } from './config'

export async function postComment(comment) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  }

  const resp = await fetch(
    `${BASE_PATH}/${API_VERSION}/comments/postcomment`,
    options
  )
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
  const comments = await (
    await fetch(`${BASE_PATH}/${API_VERSION}/comments/getComments`)
  ).json()

  const commentsFinal = await comments.reduce(async (acc, comment) => {
    const { authorUrl, parentUrl, content, likes, _id, postDate } = comment
    let finalParent
    let finalAuthor

    if (!parentUrl) {
      finalParent = null
      const author = await (await fetch(authorUrl)).json()
      finalAuthor = { name: author.name, email: author.email }
    } else {
      const parent = await (await fetch(parentUrl)).json()
      finalParent = { id: parent._id }
      const author = await (await fetch(authorUrl)).json()
      finalAuthor = { name: author.name, email: author.email }
    }

    return [
      ...(await acc),
      {
        author: finalAuthor,
        parent: finalParent,
        content,
        likes,
        id: _id,
        postDate,
      },
    ]
  }, [])

  return commentsFinal
}
