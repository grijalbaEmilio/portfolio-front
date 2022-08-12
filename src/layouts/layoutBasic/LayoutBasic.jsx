import React, { useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import './LayoutBasic.scss'
import Menu from '../../components/Menu'

export default function LayoutBasic({ children }) {
  const { appData } = useContext(providerApp)
  const { user } = appData
  const { name } = user
  const userLogued = () => {
    if (user.role !== 'reviewer') {
      return false
    }
    return true
  }
  return (
    <div>
      <Menu>{{ admin: userLogued(), userName: name }}</Menu>
      <main>{children}</main>
      <footer>
        <span className="footer-division" />
        footer
      </footer>
    </div>
  )
}
