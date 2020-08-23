import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

const center = {
  lat: 41.729284,
  lng: 1.822515,
}

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
}

class ActivityMaps extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        styles={mapStyles}
        zoom={7}
        initialCenter={center}>
        {this.props.activities.map((activity, index) => (
          //console.log(activity),
          <Marker
            name={activity.name}
            key={index}
            position={{ lat: activity.latitude, lng: activity.longitude }}
          />
        ))}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey,
})(ActivityMaps)
