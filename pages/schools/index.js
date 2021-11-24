import SchoolCard from "../../components/schoolCard";
import styles from "/styles/Schools.module.css"
import {useEffect, useState} from "react";
import SchoolsContainer from "../../components/schoolsContainer";


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
    <SchoolsContainer schools={schools}/>
  </>

}

export default Schools;