import GlobalHeader from "../components/globalHeader";
import '../styles/globals.css';
import "/styles/header.css"
import '../styles/registeredUserSelectorSlider.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import SchoolMapContext from "../contexts/SchoolMapContext";
import {useState} from "react";
import {IconContext} from "react-icons";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({Component, pageProps}) {

  const [showOnlyVerifiedUsers, setShowOnlyVerifiedUsers] = useState(false)
  const [numberOfVisibleParents, setNumberOfVisibleParents] = useState(5)
  const [selectedParentIdOnTheMap, setSelectedParentIdOnTheMap] = useState(-1)

  return <>
    <IconContext.Provider value={{color: '#2b6777', size: 42}}>
      <SchoolMapContext.Provider value={{showOnlyVerifiedUsers, setShowOnlyVerifiedUsers, numberOfVisibleParents, setNumberOfVisibleParents, selectedParentIdOnTheMap, setSelectedParentIdOnTheMap}}>
        <GlobalHeader/>
        <Component {...pageProps} />
      </SchoolMapContext.Provider>
    </IconContext.Provider>
  </>
}

export default MyApp