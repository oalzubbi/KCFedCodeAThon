var express = require('express');
var router = express.Router();

/* GET geocoding_example page. */
router.get('/', function(req, res, next) {
  res.render('geocoding_example', { title: 'Express' });
});

module.exports = router;



var test_location = {
                       "results" : [
                          {
                             "address_components" : [
                                {
                                   "long_name" : "3634",
                                   "short_name" : "3634",
                                   "types" : [ "street_number" ]
                                },
                                {
                                   "long_name" : "Southwest Eveningside Drive",
                                   "short_name" : "SW Eveningside Dr",
                                   "types" : [ "route" ]
                                },
                                {
                                   "long_name" : "Southwest Topeka",
                                   "short_name" : "Southwest Topeka",
                                   "types" : [ "neighborhood", "political" ]
                                },
                                {
                                   "long_name" : "Topeka",
                                   "short_name" : "Topeka",
                                   "types" : [ "locality", "political" ]
                                },
                                {
                                   "long_name" : "Shawnee County",
                                   "short_name" : "Shawnee County",
                                   "types" : [ "administrative_area_level_2", "political" ]
                                },
                                {
                                   "long_name" : "Kansas",
                                   "short_name" : "KS",
                                   "types" : [ "administrative_area_level_1", "political" ]
                                },
                                {
                                   "long_name" : "United States",
                                   "short_name" : "US",
                                   "types" : [ "country", "political" ]
                                },
                                {
                                   "long_name" : "66614",
                                   "short_name" : "66614",
                                   "types" : [ "postal_code" ]
                                },
                                {
                                   "long_name" : "3840",
                                   "short_name" : "3840",
                                   "types" : [ "postal_code_suffix" ]
                                }
                             ],
                             "formatted_address" : "3634 SW Eveningside Dr, Topeka, KS 66614, USA",
                             "geometry" : {
                                "bounds" : {
                                   "northeast" : {
                                      "lat" : 39.0010819,
                                      "lng" : -95.73400579999999
                                   },
                                   "southwest" : {
                                      "lat" : 39.0010817,
                                      "lng" : -95.7340246
                                   }
                                },
                                "location" : {
                                   "lat" : 39.0010819,
                                   "lng" : -95.73400579999999
                                },
                                "location_type" : "RANGE_INTERPOLATED",
                                "viewport" : {
                                   "northeast" : {
                                      "lat" : 39.0024307802915,
                                      "lng" : -95.73266621970849
                                   },
                                   "southwest" : {
                                      "lat" : 38.9997328197085,
                                      "lng" : -95.7353641802915
                                   }
                                }
                             },
                             "partial_match" : true,
                             "place_id" : "Ei0zNjM0IFNXIEV2ZW5pbmdzaWRlIERyLCBUb3Bla2EsIEtTIDY2NjE0LCBVU0E",
                             "types" : [ "street_address" ]
                          }
                       ],
                       "status" : "OK"
                    }

var nyc = new google.maps.LatLng(40.715, -74.002);
var london = new google.maps.LatLng(51.506, -0.119);
var distance = google.maps.geometry.spherical.computeDistanceBetween(nyc, london);
