import React from 'react'
import '../../styles/globals.css'

type AppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
