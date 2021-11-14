import styles from "../styles/Map.module.css";
import ResidentDetails from "./residentDetails";

const ResidentsDetails = ({residents}) => {

  return <>
    <div className={styles.school_list}>
      {residents.map(resident => {
        return <>
          <ResidentDetails resident={resident}/>
        </>
      })}
    </div>
  </>

}

export default ResidentsDetails