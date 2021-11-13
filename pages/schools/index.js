import SchoolCard from "../../components/schoolCard";
import styles from "/styles/Schools.module.css"
import {useEffect, useState} from "react";
import Link from "next/link";

const Schools = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const fetchSchoolsData = async () => {
      const response = await fetch(`http://localhost:3004/schools`)
      const data = await response.json()
      isSubscribed ? setSchools(data) : setSchools(null);
      setIsLoading(false);
    }
    fetchSchoolsData()
    return () => {
      isSubscribed = false;
    }
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <>
    <div className={styles.showOnMapOption}>
      <button><Link href="/schools/maps">Show on map </Link></button>
    </div>
    <div className={styles.schoolsContainer}>
      {schools.map(school => {
        return (<SchoolCard key={school.id}
                            id={school.id}
                            name={school.name}
                            timesRanking={school.timesRanking}
                            image={school.image}
                            residents={school.residents}/>)
      })}
    </div>
  </>

}

export default Schools;