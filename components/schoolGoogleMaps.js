import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import styles from "../styles/SchoolGoogleMaps.module.css"
import {useContext, useState} from "react";
import SchoolMapContext from "../contexts/SchoolMapContext";

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const schoolMarker = {
  icon: "/school.png"
}



const SchoolGoogleMaps = ({center, markers}) => {

  const {selectedParentIdOnTheMap} = useContext(SchoolMapContext);
  const [residentSelected, setResidentSelected] = useState(null)
  const libraries = ["places"];
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: '',
    libraries
  })

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading..."

  return <GoogleMap mapContainerClassName={styles.mapContainerStyle}
                    zoom={13}
                    center={center}
                    options={options}
                    mapContainerStyle={{
                      height: "88vh"
                    }}
                    >
    {markers.map(marker => {
        if (marker.isSchool)
        {
          return (<Marker
            key={marker.id}
            position={marker.coordinates}
            options={schoolMarker}
            onClick={() => {
              setResidentSelected(marker)
            }}
            zIndex={100}
          >
          </Marker>)
        }
        else if (marker.id === selectedParentIdOnTheMap)
        {
          return (<Marker
            key={marker.id}
            position={marker.coordinates}
            options={{
              icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new google.maps.Size(60, 60),
              }
            }}
            onClick={() => {
              setResidentSelected(marker)
            }}
          />)
        }
        else
        {
          return (<Marker
            key={marker.id}
            label={""+marker.id}
            position={marker.coordinates}
            onClick={() => {
              setResidentSelected(marker)
            }}
          />)
        }
    })}
    {
      residentSelected ? (<InfoWindow position={residentSelected.coordinates} onCloseClick={() => setResidentSelected(null)}>
          <div>
            <p>
              {residentSelected.name}
            </p>
            <p>
              Year 9, 10
            </p>
          </div>
        </InfoWindow>
        ) : null
    }
  </GoogleMap>
}

export default SchoolGoogleMaps;