import {AppProps} from 'next/app'
import '../style/Global.scss'

function MyApp({ Component, pageProps } :AppProps) {
  return  (
   <>
   <Component {...pageProps} />
   </>
  ); 
}

export default MyApp
