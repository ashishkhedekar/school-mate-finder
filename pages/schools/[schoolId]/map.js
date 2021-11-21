import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import SchoolMap from "../../../components/schoolMap";
import styles from "../../../styles/Map.module.css"
import ParentsDetails from "../../../components/parentsDetails";
import SchoolMapContext from "../../../contexts/SchoolMapContext";

const Map = () => {

  const router = useRouter();
  const {schoolId} = router.query;
  const [isLoading, setIsLoading] = useState(true)
  const [school, setSchool] = useState(null);
  const {numberOfVisibleParents, setNumberOfVisibleParents} = useContext(SchoolMapContext);

  useEffect(() => {
    let isSubscribed = true;
    const fetchSchoolData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SCHOOL_API_HOST}/schools/${schoolId}`)
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
    <SchoolMap school={school} numberOfVisibleParents={numberOfVisibleParents}/>
    <ParentsDetails parents={school.residents}/>
  </div>
}

export default Map;