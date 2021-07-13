import React from 'react'
import logo from '~/logo.svg'
import './index.css'

export const HomePage: React.FC = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/pages/index.tsx</code> and save to reload.
        </p>
        <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}
