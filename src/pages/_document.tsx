import Document, {Html, Head, Main,  NextScript} from "next/document"

export default class Mydocument extends Document {
  render() {
    return (
      <Html>
   <Head>
  <title>Nextjs</title>
  </Head>
  <body>
  <Main />
  <NextScript />
  </body>
</Html>
    );
  }
}