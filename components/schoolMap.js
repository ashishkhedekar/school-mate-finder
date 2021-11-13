import SchoolGoogleMaps from "./schoolGoogleMaps";
import styles from "../styles/SchoolMap.module.css"
import Link from 'next/link'

const SchoolMap = (school) => {

  const {coordinates, residents} = school.school;
  const numberOfResidents = residents.length;

  const markers = residents.map(resident => {
    const {id, coordinates} = resident;
    return {
      id,
      coordinates,
      isSchool: false
    }
  })
  markers.push({
    id: numberOfResidents + 1,
    coordinates,
    isSchool: true
  })

  return <>
    <div className={styles.exitMap}>
      <Link href="/schools"><span>← Exit map </span></Link>
    </div>
    <div className={styles.mapdiv}>
      <SchoolGoogleMaps center={coordinates} markers={markers}/>
    </div>
  </>
}

export default SchoolMap;