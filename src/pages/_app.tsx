/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import '../../styles/globals.css'
import Layout from '../container/templates/Layout'

type AppProps = {
  Component: React.ComponentType
  pageProps: Record<string, unknown>
  Layout: string
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
