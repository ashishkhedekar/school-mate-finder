
//todo: Do this later
export const fetchSchoolData =  async (schoolId) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SCHOOL_API_HOST}/schools/${schoolId}`)
  return await response.json()
}