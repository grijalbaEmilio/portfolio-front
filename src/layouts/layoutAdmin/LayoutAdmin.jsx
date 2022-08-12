import React from 'react'
import Menu from '../../components/Menu'

export default function LayoutAdmin({ children }) {
  return (
    <div>
      <Menu>{{ admin: true }}</Menu>
      {children}
      cosas
    </div>
  )
}
