import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="shortcut icon" href="/assets/images/favicon.ico" />
            <link rel="stylesheet" href="/assets/css/libs.min.css"></link>
            <link rel="stylesheet" href="/assets/css/socialv.css?v=4.0.0"></link>
            <link rel="stylesheet" href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
            <link rel="stylesheet" href="/assets/vendor/remixicon/fonts/remixicon.css"></link>
            <link rel="stylesheet" href="/assets/vendor/vanillajs-datepicker/dist/css/datepicker.min.css"></link>
            <link rel="stylesheet" href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
            <link rel="stylesheet" href="/assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"></link>
            <script src="/assets/js/libs.min.js"></script>
            <script src="/assets/js/app.js"></script>
        </Head>
        <body className="dark-mode dark" >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
