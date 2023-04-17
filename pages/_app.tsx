import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '../src/ThemeContext'

function App({ Component, pageProps }: AppProps) {
  return (

      <Component {...pageProps} />

  );
}

export default App;
