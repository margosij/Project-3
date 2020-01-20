import React from 'react';
import { geolocated } from 'react-geolocated';

const schoolLat = 29.9396558;
const schoolLon = -95.4252249;
 
class Geolocation extends React.Component {

    render() {
        
        function distance(unit) {

            const pickupLat = this.props.coords.latitude;
            const pickupLon = this.props.coords.longitude;

		    if ((schoolLat == pickupLat) && (schoolLon == pickupLon)) {
			return 0;
		    }
		    else {
			    var radlat1 = Math.PI * schoolLat/180;
			    var radlat2 = Math.PI * pickupLat/180;
			    var theta = schoolLon-pickupLon;
			    var radtheta = Math.PI * theta/180;
			    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			    if (dist > 1) {
				    dist = 1;
			    }
			    dist = Math.acos(dist);
			    dist = dist * 180/Math.PI;
			    dist = dist * 60 * 1.1515;
			    if (unit=='K') { dist = dist * 1.609344 }
			    if (unit=='N') { dist = dist * 0.8684 }
			    return dist;
		    }
	    }

        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) :

            function createButton(dist) {
                distance();
                if (dist <= 0.5) {
                    return <button>Check In</button>
                } else {
                    return <h3>Not In Range</h3>
                }

            }

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