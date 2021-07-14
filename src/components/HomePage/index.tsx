import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '~/components/Header'
import { Layout } from '~/components/Layout'

export const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="home">
        <Header />
        <main className="home__main">
          <p>{t('Edit and save to reload.')}</p>
        </main>
      </div>
    </Layout>
  )
}
