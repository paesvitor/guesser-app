
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import type { AppProps /*, AppContext */ } from 'next/app'
import theme from '../src/theme'
import { Provider as StoreProvider } from 'react-redux'
import { wrapper } from '../src/store'

function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>
  </ThemeProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(App);
