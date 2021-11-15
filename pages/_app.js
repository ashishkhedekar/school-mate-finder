import GlobalHeader from "../components/globalHeader";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import '../styles/registeredUserSelectorSlider.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import SchoolMapContext from "../contexts/SchoolMapContext";
import {useState} from "react";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({Component, pageProps}) {

  const [showOnlyVerifiedUsers, setShowOnlyVerifiedUsers] = useState(false)

  return <>
    <SchoolMapContext.Provider value={{showOnlyVerifiedUsers, setShowOnlyVerifiedUsers}}>
      <GlobalHeader/>
      <Component {...pageProps} />
    </SchoolMapContext.Provider>
  </>
}

export default MyApp