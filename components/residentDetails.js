import styles from "../styles/Resident.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCertificate } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const ResidentDetails = ({resident}) => {

  return <>
    <div key={resident.id} className={styles.resident_details}>
      <div className={styles.resident_index}>
        {resident.id}
      </div>
      <div className={styles.resident_name_and_stuff}>
        <div>
          {resident.name} {resident.isVerified && <FontAwesomeIcon icon={faCertificate} color={"#109AFB"}/> }
        </div>
        <div>
        </div>
        {resident.numberOfKidsGoingToSchool} Kids
      </div>
      <div className={styles.resident_distance}>
        0.2 miles
      </div>
    </div>
    <div className={styles.resident_separator}>

    </div>
  </>

}

export default ResidentDetails