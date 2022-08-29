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
    body: { content: bodyForm.content, authorId: bodyForm.authorId },
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

export async function getGithubProyects() {
  const respGithubProyectys = await fetch(
    'https://api.github.com/users/grijalbaEmilio/repos'
  )

  let githubProyects = await respGithubProyectys.json()

  githubProyects = githubProyects.map((e) => {
    const { name, language, owner } = e
    const htmlUrl = e.html_url

    const { login } = owner
    const avatarUrl = owner.avatar_url

    return {
      name,
      htmlUrl,
      login,
      avatarUrl,
      language,
    }
  })

  return githubProyects
}
