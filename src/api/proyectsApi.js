import { BASE_PATH } from './config'

export async function getProyects() {
  console.log('fetch')
  const resp = await fetch(`${BASE_PATH}/proyects/getProyects`)
    .then((res) => res.json())
    .catch()

  return resp
}

export function postProyect() {}