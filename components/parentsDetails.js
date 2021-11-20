import styles from "../styles/Parents.module.css";
import ParentDetails from "./parentDetails";
import {useContext, useState} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext";

const ParentsDetails = ({parents}) => {

  const {showOnlyVerifiedUsers, setShowOnlyVerifiedUsers, numberOfVisibleParents, setNumberOfVisibleParents} = useContext(SchoolMapContext);

  const [moreItems, setMoreItems] = useState(true)

  const handleCheckboxChange = (e) => {
    setShowOnlyVerifiedUsers(e.target.checked)
  }

  const handleShowMore = () => {
    setNumberOfVisibleParents(numberOfVisibleParents + 5);
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
          .slice(0, numberOfVisibleParents)
          .filter(parent => !showOnlyVerifiedUsers || (showOnlyVerifiedUsers && parent.isVerified))
          .map((parent, index) => {
            return (<ParentDetails key={index} index={index + 1} parent={parent}/>)
          })}
      </div>
      <div>
        <button className={`${moreItems ? `showMoreItems` : `hideMoreItems`}`} onClick={handleShowMore}>Load More
        </button>
      </div>
    </div>
  </>
}

export default ParentsDetails