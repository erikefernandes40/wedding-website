import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta content='width=device-width, initial-scale=1.0' name='viewport' />
          <title>Erick & Alana</title>
          <link rel="icon" href="\images\aliancas-de-casamento.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
