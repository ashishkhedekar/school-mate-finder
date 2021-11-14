import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import styles from "../styles/SchoolGoogleMaps.module.css"

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

const schoolMarker = {
  icon: "/school.png"
}

const SchoolGoogleMaps = ({center, markers}) => {

  const libraries = ["places"];
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: '',
    libraries
  })

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading..."

  return <GoogleMap mapContainerClassName={styles.mapContainerStyle}
                    zoom={10}
                    center={center}
                    options={options}>
    {markers.map(marker => {
        if (marker.isSchool)
        {
          return (<Marker
            key={marker.id}
            position={marker.coordinates}
            options={schoolMarker}>
          </Marker>)
        }
        else
        {
          return (<Marker
            key={marker.id}
            label={""+marker.id}
            position={marker.coordinates}
          />)
        }
    })}
  </GoogleMap>
}

export default SchoolGoogleMaps;