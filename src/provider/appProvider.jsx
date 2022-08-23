import React, { createContext, useState, useEffect, useMemo } from 'react'
import jwtDecode from 'jwt-decode'
import { getProyects } from '../api/proyectsApi'

export const providerApp = createContext()
export default function appProvider({ children }) {
  // const userDecode = localStorage.getItem('accesToken')

  const [appData, setAppData] = useState({
    dataProyects: null,
    user: {
      name: null,
      email: null,
      id: null,
      role: null,
      _id: null,
    },
    comments: null,
  })
  // use setReload(!reload) to update data from proyects, comments, user...
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
    const proyects = await getProyects()
    const accestoken = localStorage.getItem('accesToken')

    if (accestoken) {
      const user = jwtDecode(accestoken)
      setAppData({ ...appData, dataProyects: proyects, user })
    } else {
      setAppData({
        ...appData,
        dataProyects: proyects,
      })
    }

    console.log(appData)
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
    // eslint-disable-next-line comma-dangle
    [appData]
  )

  useEffect(() => {
    startApp()
  }, [reload])

  return <providerApp.Provider value={value}>{children}</providerApp.Provider>
}
