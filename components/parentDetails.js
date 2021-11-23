import styles from "../styles/Parent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faCertificate} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext"; // import the icons you need



const ParentDetails = ({parent, index}) => {

  const {setSelectedParentIdOnTheMap} = useContext(SchoolMapContext);

  const handleParentSelection = (id) => {
    console.log("WWW" + id);
    setSelectedParentIdOnTheMap(id);
  }

  return <>
    <div key={parent.id} className={styles.parent_details} onClick={() => handleParentSelection(parent.id)}>
      <div className={styles.parent_name_and_stuff}>
        <div className={styles.resident_index}>
          {index}
        </div>
        <div >
          <p ><strong>{parent.name}</strong> {parent.isVerified && <FontAwesomeIcon icon={faCertificate} color={"#109AFB"}/>}</p>
          <p>{parent.numberOfKidsGoingToSchool} Kids</p>
          <p>Driving kids to school</p>
        </div>
        <div className={styles.resident_distance}>
          0.2 miles
        </div>

      </div>
    </div>
  </>
}

export default ParentDetails