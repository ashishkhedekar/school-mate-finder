import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import SchoolMap from "../../../components/schoolMap";
import styles from "../../../styles/Map.module.css"
import ParentsDetails from "../../../components/parentsDetails";

const Map = () => {

  const router = useRouter();
  const {schoolId} = router.query;
  const [isLoading, setIsLoading] = useState(true)
  const [school, setSchool] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const fetchSchoolData = async () => {
      const response = await fetch(`http://localhost:3004/schools/${schoolId}`)
      const data = await response.json()
      isSubscribed ? setSchool(data) : setSchool(null);
      setIsLoading(false);
    }
    fetchSchoolData()
    return () => {
      isSubscribed = false;
    }
  }, [schoolId])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <div className={styles.maps_outer_container}>
    <SchoolMap school={school}/>
    <ParentsDetails parents={school.residents}/>
  </div>
}

export default Map;