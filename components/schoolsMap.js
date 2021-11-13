import SchoolGoogleMaps from "./schoolGoogleMaps";
import styles from "../styles/SchoolsMap.module.css"
import Link from 'next/link'

const SchoolsMap = (schools) => {

  const schoolsMapCenter = {
    "lat": 51.65586,
    "lng": -0.21
  }
  const markers = schools.schools.map(school => {
      const {id, coordinates} = school;
      return {
        id,
        coordinates,
        isSchool: true
      }
  })

  return <div>
    <div className={styles.exitMap}>
      <Link href="/schools"><span>← Exit map </span></Link>
    </div>
    <div className={styles.mapdiv}>
      <SchoolGoogleMaps center={schoolsMapCenter} markers={markers}/>
    </div>

  </div>
}

export default SchoolsMap;