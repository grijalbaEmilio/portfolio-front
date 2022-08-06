import React from 'react'
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'
import './App.scss'
import routes from './config/routes'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={(
                <route.layout>
                  <route.component />
                </route.layout>
                )}
            />
          ))}
        </Routes>
      </Router>
    </div>

  )
}
