
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import type { AppContext, AppProps /*, AppContext */ } from 'next/app'
import theme from '../src/theme'
import { Provider as StoreProvider, useDispatch } from 'react-redux'
import { SagaStore, wrapper } from '../src/store'
import { SnackbarProvider } from 'notistack';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from 'firebase/app'
import { firebaseConfig } from '../src/utils/firebase/config'
import { END } from 'redux-saga';
import { userActions } from '../src/store/modules/user/actions'
import { useEffect } from 'react'
function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.auth())
  }, [])

  return <ThemeProvider theme={theme}>
    <CssBaseline>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
          <Component {...pageProps} />
        </FirebaseDatabaseProvider>
      </SnackbarProvider>
    </CssBaseline>
  </ThemeProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
App.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const { ctx, Component } = appContext;
  let appProps = {}

  if (Component.getInitialProps) {
    appProps = await Component?.getInitialProps(ctx)
  }
  if (ctx.req) {
    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask.toPromise();
  }

  return { ...appProps }
}

export default wrapper.withRedux(App);
