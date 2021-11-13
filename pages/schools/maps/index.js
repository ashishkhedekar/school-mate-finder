import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import SchoolsMap from "../../../components/schoolsMap";

const Index = () => {

  const router = useRouter();
  const {schoolId} = router.query;
  const [isLoading, setIsLoading] = useState(true)
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchoolData = async () => {
      const response = await fetch(`http://localhost:3004/schools`)
      const data = await response.json()
      setSchools(data)
      setIsLoading(false);
    }
    fetchSchoolData()
  }, [schoolId])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <div>
    <SchoolsMap schools={schools}/>
  </div>
}

export default Index;