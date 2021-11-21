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
      const response = await fetch(`${process.env.NEXT_PUBLIC_SCHOOL_API_HOST}/schools`)
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
      <div className={styles.schoolCardsContainer}>
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