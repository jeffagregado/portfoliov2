import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../src/fontawesome'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  config.autoAddCss = false
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
