import React, { useContext } from 'react'
import { providerApp } from '../../provider/appProvider'
import './LayoutBasic.scss'
import Menu from '../../components/Menu'

export default function LayoutBasic({ children }) {
  const { appData } = useContext(providerApp)
  const { user } = appData

  return (
    <div className="layoutBasic">
      <Menu user={user} />
      <main className="layoutBasic-main">{children}</main>
      <footer className="footer">
        <span className="footer-division" />
        <p className="footer-content">footer</p>
      </footer>
    </div>
  )
}
