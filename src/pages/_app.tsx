import React from 'react'
import '../../styles/globals.css'

type AppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
