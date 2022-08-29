import React, { createContext, useState, useEffect, useMemo } from 'react'
import jwtDecode from 'jwt-decode'
import { getProyects, getGithubProyects } from '../api/proyectsApi'

export const providerApp = createContext()
export default function appProvider({ children }) {
  const [appData, setAppData] = useState({
    dataProyects: null,
    dataGitHubProyects: null,
    user: {
      name: null,
      email: null,
      id: null,
      role: null,
      _id: null,
    },
    comments: null,
  })

  const [reload, setReload] = useState(false)

  function login() {
    const accestoken = localStorage.getItem('accesToken')

    if (accestoken) {
      const user = jwtDecode(accestoken)
      setAppData({
        ...appData,
        user,
      })
    }
  }

  async function startApp() {
    const dataProyects = await getProyects()
    const dataGitHubProyects = await getGithubProyects()
    const accestoken = localStorage.getItem('accesToken')

    if (accestoken) {
      const user = jwtDecode(accestoken)
      setAppData({
        ...appData,
        dataProyects,
        user,
        dataGitHubProyects,
      })
    } else {
      setAppData({
        ...appData,
        dataProyects,
        dataGitHubProyects,
      })
    }
  }

  function logOut() {
    localStorage.removeItem('accesToken', null)
    setAppData({
      ...appData,
      user: { name: null, email: null, id: null, role: null },
    })
  }

  const value = useMemo(
    () => ({
      appData,
      reload,
      setReload,
      logOut,
      login,
    }),
    [appData]
  )

  useEffect(() => {
    startApp()
  }, [reload])

  return <providerApp.Provider value={value}>{children}</providerApp.Provider>
}
