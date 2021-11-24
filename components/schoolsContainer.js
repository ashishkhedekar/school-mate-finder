import styles from "../styles/Schools.module.css";
import DesktopSchoolCard from "./desktopSchoolCard";
import MobileSchoolCard from "./mobileSchoolCard";
import {useMediaQuery} from "react-responsive";

const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({minWidth: 992})
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 992 })
  return isMobile ? children : null
}


const SchoolsContainer = ({schools}) => {

  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 },
    { deviceWidth: 1600 } // `device` prop
  )

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  console.log("isDesktopOrLaptop " + isDesktopOrLaptop + "-" + isTabletOrMobile);
  return <>
    <div className={isTabletOrMobile ? styles.schoolCardsContainer_tablet : styles.schoolCardsContainer}>
      {schools.map(school => {
        return (
          <>
            {/*<Desktop>*/}
            {/*  <DesktopSchoolCard*/}
            {/*    key={school.id} {...school} isTablet={isTabletOrMobile}/>*/}
            {/*</Desktop>*/}
            {/*<Mobile>*/}
            {/*  <MobileSchoolCard*/}
            {/*    key={school.id} {...school} />*/}
            {/*</Mobile>*/}
            <DesktopSchoolCard
              key={school.id} {...school} isTablet={isTabletOrMobile}/>
          </>
        )
      })}
    </div>
  </>
}

export default SchoolsContainer;