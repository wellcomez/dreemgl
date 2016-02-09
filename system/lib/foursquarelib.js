/* Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others. 
   You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/


/**
 * @class FourSquareLib
 * Interface class between npm node-foursquare and dreemgl
 * Requires the flickr npm modules:
 *   'npm install node-foursquare'.
 */

define.class(function(exports){
	var FourSquareLib = exports

	/**
	 * @method constructor
	 * Create a FourSquareLib object with default parameters. The credentials
	 * are read from environment variables,
	 *   FOURSQUARE_CLIENT_ID
	 *   FOURSQUARE_SECRET
	 * 
	 * Install the foursquare object via 'npm install node-foursquare'.
	 */
	this.atConstructor = function() {
		var config = {
			foursquare: {}
			,secrets: {
				clientId: process.env.FOURSQUARE_CLIENT_ID
				,clientSecret: process.env.FOURSQUARE_SECRET
				,redirectUrl: 'redirect'
			}
		}

		this.foursquare = require('node-foursquare')(config);

		// We're using calls that don't require an access token
		this.accessToken = '';
	}


	// Search interface to query locations. Search and explore are different
	// api endpionts for foursquare. explore returns recomended places where
	// search shows all the data.
	//
	// callback Callback method which is passed the returned photos, as an array.
	// location Location to search around [lat, lon]. If missing, SF is used
	// options  Hash of search options. If not defined, defaults are used.
	// nimages  Max number of images to return per location. Default=null which
	//          will not return any images
	this.search = function(callback, location, options, nimages) {
		location = location || [37.784173, -122.401557] // Mascone center
		options = options || {}
		
		// Search for locations
		this.foursquare.Venues.search(location[0], location[1], null, options, this.accessToken, function(error, data) {
			if (error) console.log('error', error);

			if (data && data.venues) {
				for (var i in data.venues) {
					var venue = data.venues[i];
					//console.log('LOCATION', venue.location);
					//console.log('STATS', venue.stats);
				}
			}
		});

	}


	// Search interface to query recomended locations. Only locations with
	// images are returned.
	// https://developer.foursquare.com/docs/venues/explore
	//
	// callback Callback method which is passed the returned venues, as an array.
	// location Location to search around [lat, lon]. If missing, SF is used
	// options  Hash of search options. If not defined, defaults are used.
	this.explore = function(callback, location, options) {
		location = location || [37.784173, -122.401557] // Mascone center
		options = options || {}

		// Add photos
		options['venuePhotos'] = 1
		options['limit'] = 50

		// Search for locations
		this.foursquare.Venues.explore(location[0], location[1], null, options, this.accessToken, function(error, data) {
			if (error) console.log('error', error);
			//console.log('data', data);

			venues = []
			// Return information for the first set of items
			if (data && data.groups) {
				var items = data.groups[0].items;
				for (var i in items) {
					var venue = items[i].venue;
					venues.push(venue);
				}
			}

			callback(venues);
		});

	}

});
