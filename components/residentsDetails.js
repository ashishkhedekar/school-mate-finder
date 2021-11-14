import styles from "../styles/Residents.module.css";
import ResidentDetails from "./residentDetails";
import {useState} from "react";


const ResidentsDetails = ({residents}) => {

  const [showOnlyVerifiedUser, setShowOnlyVerifiedUser] = useState(false);

  const handleCheckboxChange = (e) => {
    setShowOnlyVerifiedUser(e.target.checked)
  }

  return <>
    <div className={styles.resident_containers}>
      <div className="verifiedUserSelectorContainer">
        <div className="verifiedUserSelector">
          <input type="checkbox" id="userSelector" onChange={e => handleCheckboxChange(e)}/>
          <div className="verifiedUserSelectorSlider"/>
          <label className="verifiedUserSelector" htmlFor="userSelector"/>
        </div>
        <p>Show only verified </p>
      </div>
      <div className={styles.school_list}>
        {residents
          .filter(resident => !showOnlyVerifiedUser || (showOnlyVerifiedUser && resident.isVerified))
          .map(resident => {
          return (<ResidentDetails key={resident.id} resident={resident}/>)
        })}
      </div>
    </div>
  </>

}

export default ResidentsDetails