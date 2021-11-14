import GlobalHeader from "../components/globalHeader";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import '../styles/registeredUserSelectorSlider.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({Component, pageProps}) {
  return <>
    <GlobalHeader/>
    <Component {...pageProps} />
  </>
}

export default MyApp