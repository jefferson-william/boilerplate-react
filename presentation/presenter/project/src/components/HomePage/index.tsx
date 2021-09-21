import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '@app/react/components/Header'
import { Layout } from '@app/react/components/Layout'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout className="home">
      <Header />
      <main className="home__main">
        <p>{t('Edit and save to reload.')}</p>
      </main>
    </Layout>
  )
}
