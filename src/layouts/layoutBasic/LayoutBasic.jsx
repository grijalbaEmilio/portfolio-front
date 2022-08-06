import React from 'react'
import './LayoutBasic.scss'
import Menu from '../../components/Menu'

export default function LayoutBasic({ children }) {
  return (
    <div>
      <Menu />
      <main>
        {children}
      </main>
      <footer>
        <span className="footer-division" />
        footer
      </footer>
    </div>
  )
}
