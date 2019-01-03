// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import React from 'react'
import makeStore from '../reduxs'
import withRedux from 'next-redux-wrapper'

class NextApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(NextApp)
