import React, { useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import Login from '../Login'

export default function Edit() {
  const { appData } = useContext(providerApp)
  const { user } = appData
  if (user.name) {
    return <div>edit Page</div>
  }
  return <Login />
}
