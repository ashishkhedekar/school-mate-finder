
//todo: Do this later
export const fetchSchoolData =  async (schoolId) => {
  const response = await fetch(`http://localhost:3004/schools/${schoolId}`)
  return await response.json()
}