import styles from "../styles/Parents.module.css";
import ParentDetails from "./parentDetails";
import {useContext} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext";

const ParentsDetails = ({parents}) => {

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
        <p>Verified Parents Only </p>
      </div>
      <div className={styles.school_list}>
        {parents
          .filter(parent => !showOnlyVerifiedUsers || (showOnlyVerifiedUsers && parent.isVerified))
          .map((parent, index) => {
          return (<ParentDetails key={index} index={index+1} parent={parent}/>)
        })}
      </div>
    </div>
  </>
}

export default ParentsDetails