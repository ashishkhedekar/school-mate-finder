import GlobalHeader from "../components/globalHeader";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return <>
    <GlobalHeader/>
    <Component {...pageProps} />
  </>
}

export default MyApp