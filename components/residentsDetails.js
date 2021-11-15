import styles from "../styles/Residents.module.css";
import ResidentDetails from "./residentDetails";
import {useContext, useState} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext";

const ResidentsDetails = ({residents}) => {

  const { showOnlyVerifiedUsers, setShowOnlyVerifiedUsers } = useContext(SchoolMapContext);

  const handleCheckboxChange = (e) => {
    setShowOnlyVerifiedUsers(e.target.checked)
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
          .filter(resident => !showOnlyVerifiedUsers || (showOnlyVerifiedUsers && resident.isVerified))
          .map((resident, index) => {
          return (<ResidentDetails key={index} index={index+1} resident={resident}/>)
        })}
      </div>
    </div>
  </>
}

export default ResidentsDetails