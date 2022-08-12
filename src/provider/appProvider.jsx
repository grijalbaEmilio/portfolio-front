import React, { createContext, useState, useEffect, useMemo } from 'react'
import { getProyects } from '../api/proyectsApi'

export const providerApp = createContext()
export default function appProvider({ children }) {
  const [appData, setAppData] = useState({
    dataProyects: null,
    user: { role: null },
    comments: null,
  })
  // use setReload(!reload) to update data from proyects, comments, user...
  const [reload, setReload] = useState(false)

  async function readProyects() {
    const proyects = await getProyects()
    setAppData({ ...appData, dataProyects: proyects })
  }

  const value = useMemo(() => ({
    appData,
    reload,
    setReload,
    setAppData,
  }))

  useEffect(() => {
    readProyects()
    console.log(appData)
  }, [reload])

  return <providerApp.Provider value={value}>{children}</providerApp.Provider>
}
