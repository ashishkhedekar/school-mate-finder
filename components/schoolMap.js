import SchoolGoogleMaps from "./schoolGoogleMaps";
import styles from "../styles/SchoolMap.module.css"
import Link from 'next/link'
import {useContext} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext";

const SchoolMap = ({school, numberOfVisibleParents}) => {

  const {coordinates, residents} = school;
  const numberOfResidents = residents.length;
  const { showOnlyVerifiedUsers } = useContext(SchoolMapContext);

  const markers = residents
    .slice(0, numberOfVisibleParents)
    .filter(resident => !showOnlyVerifiedUsers || (showOnlyVerifiedUsers && resident.isVerified))
    .map((resident, index) => {
    const {coordinates} = resident;
    return {
      id: index+1,
      coordinates,
      isSchool: false,
      name: resident.name
    }
  })
  markers.push({
    id: numberOfResidents + 1,
    coordinates,
    isSchool: true,
  })

  return <>
    <div className="maps_container">
      <div className={styles.exitMap}>
        <Link href="/schools"><span>← Exit map </span></Link>
      </div>
      <div className={styles.mapdiv}>
        <SchoolGoogleMaps center={coordinates} markers={markers}/>
      </div>
    </div>
  </>
}

export default SchoolMap;