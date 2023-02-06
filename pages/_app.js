import Layout from '../components/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    // <NextUIProvider theme={theme}>
    //   <Component {...pageProps} />
    // </NextUIProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
