import React from 'react'
import { geolocated } from 'react-geolocated'
// import GeoCheckInBtn from '../Buttons'

const schoolLat = 29.9396558
const schoolLon = -95.4252249
class Geolocation extends React.Component {
  render() {
    function distance(lat1, lon1, lat2, lon2, unit) {
      var radLat1 = (Math.PI * lat1) / 180
      var radLat2 = (Math.PI * lat2) / 180
      var theta = lon1 - lon2
      var radTheta = (Math.PI * theta) / 180
      var dist =
        Math.sin(radLat1) * Math.sin(radLat2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta)
      if (dist > 1) {
        dist = 1
      }
      dist = Math.acos(dist)
      dist = (dist * 180) / Math.PI
      dist = dist * 60 * 1.1515
      if (unit == 'K') {
        dist = dist * 1.609344
      }
      if (unit == 'N') {
        dist = dist * 0.8684
      }
      return dist
    }

    console.log('Coords: ', this.props.coords)

    function createButton(props) {
      var pickupLat = ''
      var pickupLon = ''

      if (props) {
        pickupLat = props.coords.latitude
        pickupLon = props.coords.longitude
      }

      var range = distance(schoolLat, schoolLon, pickupLat, pickupLon, 'M')

      console.log('Range: ', range)
      if (range <= 0.5) {
        return <button>Check In</button>
      } else {
        return <h3>Not In Range</h3>
      }
    }

    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      createButton(this.props)
    ) : (
      <div>Getting the location data&hellip; </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  watchPosition: true,
  userDecisionTimeout: 30000,
  suppressLocationOnMount: false,
  geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true
})(Geolocation)
