import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useEffect} from "react";

const libraries = ["places"];
const mapContainerStyle = {
  // width: '70vw',
  // height: '80vh',
}
const center={
  lat: 51.65586,
  lng: -0.21336,
}
const london={
  lat: 51.65729,
  lng: -0.13527,
}
const secondHouse = {
  lat:51.66800,
  lng:-0.13300

}

const options = {
  disableDefaultUI:true,
  zoomControl:true
}

function SchoolsOnGoogleMap() {

  useEffect(() => {

  }, [])

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: '',
    libraries
  })

  if (loadError) return "Error loading maps"

  if (!isLoaded) return "Loading..."

  return <div>
    <GoogleMap mapContainerStyle={mapContainerStyle}
               zoom={15}
               center={center}
              options={options}>
          <Marker position={center}/>
          <Marker position={london}/>
          <Marker position={secondHouse}/>
    </GoogleMap>
  </div>
}

export default SchoolsOnGoogleMap