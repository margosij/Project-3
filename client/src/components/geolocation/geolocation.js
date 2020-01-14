import React from "react";

// Static Location of the school
// school address 3207 North Sam Houston Pkwy W, Houston, TX 77038
const schoolLat = 29.9396558;
const schoolLon = -95.4252249;
    
// Get location of parent

// Compare location of school & location of parent, check if they're within determined range
function distance(schoolLat, schoolLon, parentLat, parentLon, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

// If within range, activate button to signal they've arrived
function activateButton() {
    
}

// If not within range keep button deactivated, maybe alert that they're too far away

// create button, onClick action will send notification to teacher that the parent has arrived

// notification will need to pull from database using login credentials as identifier to let the teacher know which students need to go

