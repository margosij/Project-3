import React from 'react';
import Geolocated from '../components/Geolocated/Geolocated';

function Checkin() {
    
    function distance(schoolLat, schoolLon, pickupLat, pickupLon, unit) {
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
			console.log(dist);
			return dist;
		}
	}

    function createButton() {
        
    }
}

: this.props.coords ? (
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