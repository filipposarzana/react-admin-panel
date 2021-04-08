import { AppProps } from 'next/app'
import { Appbar } from '~/components/Layout/Appbar'
import { Footer } from '~/components/Layout/Footer'
import { GlobalStyle } from '~/components/Layout/GlobalStyle'
import { MinHeight100vh } from '~/components/Layout/MinHeight100vh'
import { Scroll } from '~/components/Layout/Scroll'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <MinHeight100vh>
      <Appbar />

      <Scroll grow={1} p={16} shrink={1}>
        <Component {...pageProps} />
      </Scroll>

      <Footer />
    </MinHeight100vh>
  </>
)

export default App
