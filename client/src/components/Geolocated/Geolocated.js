import React from 'react';
import { geolocated } from 'react-geolocated';

const schoolLat = 29.9396558;
const schoolLon = -95.4252249;
 
class Geolocation extends React.Component {

    render() {

        // console.log(this.props.coords, 'Coords');

        // return !this.props.isGeolocationAvailable ? (
        //     <div>Your browser does not support Geolocation</div>
        // ) : !this.props.isGeolocationEnabled ? (
        //     <div>Geolocation is not enabled</div>
        // ) :

        //     function createButton() {
        //         const pickupLat = this.props.coords.latitude;
        //         const pickupLon = this.props.coords.longitude;
        //         var range = distance(schoolLat, schoolLon, pickupLat, pickupLon, 'M');
        //         if (range <= 0.5) {
        //             return <button>Check In</button>
        //         } else {
        //             return <h3>Not In Range</h3>
        //         }

        //     }
        
        // function distance(lat1, lon1, lat2, lon2, unit) {

		//     if ((lat1 == lat2) && (lon1 == lon2)) {
		// 	return 0;
		//     }
		//     else {
		// 	    var radlat1 = Math.PI * lat1/180;
		// 	    var radlat2 = Math.PI * lat2/180;
		// 	    var theta = lon1-lon2;
		// 	    var radtheta = Math.PI * theta/180;
		// 	    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		// 	    if (dist > 1) {
		// 		    dist = 1;
		// 	    }
		// 	    dist = Math.acos(dist);
		// 	    dist = dist * 180/Math.PI;
		// 	    dist = dist * 60 * 1.1515;
		// 	    if (unit=='K') { dist = dist * 1.609344 }
		// 	    if (unit=='N') { dist = dist * 0.8684 }
        //         console.log('distance: ', dist)
		// 	    return dist;

		//     }
	    // }
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                    <tr>
                        <td>latitude</td>
                        <td>{this.props.coords.latitude}</td>
                    </tr>
                    <tr>
                        <td>longitude</td>
                        <td>{this.props.coords.longitude}</td>
                    </tr>
                    <tr>
                        <td>altitude</td>
                        <td>{this.props.coords.altitude}</td>
                    </tr>
                    <tr>
                        <td>heading</td>
                        <td>{this.props.coords.heading}</td>
                    </tr>
                    <tr>
                        <td>speed</td>
                        <td>{this.props.coords.speed}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    watchPosition: true,
    userDecisionTimeout: 30000,
    suppressLocationOnMount: false,
    geolocationProvider: navigator.geolocation,
    isOptimisticGeolocationEnabled: true
})(Geolocation);