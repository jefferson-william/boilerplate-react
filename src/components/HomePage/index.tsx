import React from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from '~/components/Layout'
import logo from '~/logo.svg'
import './index.css'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>{t('Edit and save to reload.')}</p>
          <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </Layout>
  )
}
