var startLocation = {lat: -25.344, lng: 131.036};

var styledMapType;
var map;

var line;
var lineSymbol;

var currentPos;

var locations = [
  [-5.64917318258428,50.042378,"Porthcurno",""  ],
  [-5.4435929006366,50.112232,"Perranuthanoe",""  ],
  [-5.39105404160401,50.102989,"Praa Sands",""  ],
  [-5.32154512475674,50.081251,"Porthleven",""  ],
  [-5.16190358613886,50.004962,"Kennack Sands",""  ],
  [-5.069286,50.140807,"Falmouth",""  ],
  [-4.779861,50.288763,"Pentewan",""  ],
  [-4.69584606567911,50.346431,"Polkerris",""  ],
  [-4.38572926699007,50.362873,"Seaton",""  ],
  [-4.342381,50.36014,"Portwrinkle",""  ],
  [-4.25733070112304,50.345479,"Whitsand Bay",""  ],
  [-4.1149270316829,50.315887,"Bovisand Reef",""  ],
  [-4.085477,50.316132,"Wembury",""  ],
  [-3.89971700241495,50.286855,"Challaborough",""  ],
  [-3.8884740796228,50.278665,"Bantham",""  ],
  [-5.147526,50.392578,"Holywell Bay",""  ],
  [-5.15242981848169,50.364374,"Penhale (Perran Sands)",""  ],
  [-5.160171,50.349197,"Perranporth (Droskyn)",""  ],
  [-5.20170620220752,50.321271,"St Agnes",""  ],
  [-5.2377622725146,50.301489,"Chapel Porth",""  ],
  [-5.24608216311386,50.289113,"Porthtowan",""  ],
  [-5.29281619422281,50.263172,"Portreath - The Wall",""  ],
  [-5.29242863338383,50.26229,"Portreath - The V",""  ],
  [-5.29416135616033,50.26188,"Portreath - Beach",""  ],
  [-5.39461386904604,50.230352,"Godrevy",""  ],
  [-5.39897568130438,50.223471,"Gwithian",""  ],
  [-5.433755,50.198435,"Hayle Rivermouth",""  ],
  [-5.45445283646501,50.197042,"Carbis Bay",""  ],
  [-5.48257529842158,50.216236,"Porthmeor",""  ],
  [-5.69110625034547,50.09096,"Gwenvor",""  ],
  [-5.69763198354534,50.080204,"Sennen",""  ],
  [1.74859242595028,52.46719,"Lowestoft",""  ],
  [1.73862859879594,52.576569,"Gorleston",""  ],
  [1.72083976817086,52.678066,"Scratby",""  ],
  [1.59979,52.793803,"Seapalling",""  ],
  [1.50090908817718,52.843684,"Walcott",""  ],
  [1.47711271191771,52.855723,"Bacton",""  ],
  [1.43904303359506,52.878887,"Mundesley",""  ],
  [1.30172998497885,52.932732,"Cromer",""  ],
  [1.29061656105054,52.935001,"East Runton",""  ],
  [-5.060201,50.429867,"Whipsiderry",""  ],
  [-5.06589,50.425646,"Porth",""  ],
  [-5.06824,50.423244,"Lusty Glaze",""  ],
  [-5.07472095725792,50.417309,"Tolcarne Wedge",""  ],
  [-5.078069,50.416159,"Towan",""  ],
  [-5.10258,50.425379,"Cribber",""  ],
  [-5.10001283426399,50.422897,"Little Fistral",""  ],
  [-5.09972846531026,50.418448,"North Fistral",""  ],
  [-5.10250394602446,50.414096,"South Fistral",""  ],
  [-5.12308662309643,50.406448,"Crantock",""  ],
  [-0.890468165665254,54.573691,"Skinningrove",""  ],
  [-0.957449,54.588864,"Saltburn Point",""  ],
  [-0.97189548143237,54.587923,"Saltburn Beach",""  ],
  [-1.04819754158244,54.620209,"Redcar",""  ],
  [-1.09211,54.626058,"Marske to Tees",""  ],
  [-1.14128,54.644325,"The Gare",""  ],
  [-1.19232710584573,54.674696,"Hartlepool",""  ],
  [-1.28548,54.809632,"Hartlepool to Sunderland",""  ],
  [-1.35072046267409,54.958737,"Whitburn",""  ],
  [-1.407991,54.999818,"South Shields",""  ],
  [-1.41548708717075,55.014228,"Black Middens",""  ],
  [-1.41823342626777,55.019771,"Tynemouth - Eddies",""  ],
  [-1.42337663233683,55.02668,"Tynemouth - Longsands",""  ],
  [-1.44433109504928,55.048533,"Whitley Bay",""  ],
  [-1.45993293604718,55.078123,"Hartley Reef",""  ],
  [-1.4916411347789,55.100395,"Seaton To Blyth",""  ],
  [-1.49553238079767,55.186126,"Newbiggin",""  ],
  [-1.66011387453533,55.588586,"Seahouses",""  ],
  [-1.7117525578165,55.614459,"Bamburgh",""  ],
  [-1.77639998846688,55.666968,"Holy Island",""  ],
  [-1.51254614398849,50.668335,"Freshwater - I.O.W",""  ],
  [-1.47650026997727,50.661133,"Compton - I.O.W",""  ],
  [-1.13538987419464,50.659256,"Whitecliff Bay - I.O.W",""  ],
  [-0.980253628249244,50.779813,"Hayling Island",""  ],
  [-0.909159,50.774379,"The Witterings",""  ],
  [-0.533055,50.801834,"Littlehampton",""  ],
  [-0.22840293339371,50.82752,"Shoreham",""  ],
  [-0.152403879669151,50.820143,"Brighton - West Pier",""  ],
  [-0.092261765882697,50.811408,"Brighton - Marina",""  ],
  [-0.135982686052813,50.818535,"Brighton - Wedge",""  ],
  [0.291028568212397,50.763855,"Eastbourne",""  ],
  [1.4471359787939,51.379918,"Joss Bay",""  ],
  [-3.48117443281305,50.428945,"Torbay",""  ],
  [-3.226564,50.645238,"Lyme Bay",""  ],
  [-2.14623969312129,50.607178,"Kimmeridge - Broadbench",""  ],
  [-2.13354097283589,50.610442,"Kimmeridge Bay",""  ],
  [-2.13215226853137,50.607436,"Kimmeridge - The Ledges",""  ],
  [-2.0652437962957,50.592301,"Chapman's Pool",""  ],
  [-1.95396542462716,50.617474,"Swanage",""  ],
  [-1.8730554572973,50.714872,"Bournemouth",""  ],
  [-1.841498,50.71864,"Boscombe",""  ],
  [-1.80121095519298,50.719282,"Southbourne",""  ],
  [-1.77106998558652,50.71621,"Highcliffe",""  ],
  [-2.51640997569548,49.507945,"Fort Le Marchant - Guernsey",""  ],
  [-2.52976005884381,49.503854,"L'Ancresse Bay - Guernsey",""  ],
  [-2.580111,49.490276,"Portinfer - Guernsey",""  ],
  [-2.608573,49.469643,"Vazon Bay - Beach - Guernsey",""  ],
  [-2.62169,49.469275,"Vazon Bay - Reef - Guernsey",""  ],
  [-2.614684,49.468376,"Vazon Bay - Centres - Guernsey",""  ],
  [-2.65079561391501,49.46271,"Perelle Bay - Right - Guernsey",""  ],
  [-2.65012112538064,49.463578,"Perelle Bay - Left - Guernsey",""  ],
  [-2.650411,49.468089,"Perelle Bay - Dom Hue - Guernsey",""  ],
  [-2.20161451365369,49.247543,"Greve de Lecq - Jersey",""  ],
  [-2.228806,49.257029,"Plemont Bay - Jersey",""  ],
  [-2.25073274823279,49.240745,"Stinky Bay - Jersey",""  ],
  [-2.23807036674769,49.230715,"Secrets - Jersey",""  ],
  [-2.22453765409131,49.204447,"Watersplash - Jersey",""  ],
  [-2.227087,49.197943,"Les Brayes - Jersey",""  ],
  [-2.23545336194461,49.197891,"La Rocco - Jersey",""  ],
  [-2.23905289389435,49.18475,"Petite Port - Jersey",""  ],
  [-2.19584448922899,49.18423,"St Brelades - Jersey",""  ],
  [0.035068,53.731608,"Withernsea",""  ],
  [-0.282458672481937,54.207369,"Filey",""  ],
  [-0.355913676826645,54.245086,"Cayton Bay - Bunkers",""  ],
  [-0.363396454013397,54.247006,"Cayton Bay - Pumphouse",""  ],
  [-0.364842851213325,54.252144,"Cayton Bay - Point",""  ],
  [-0.394886688036223,54.279147,"Scarborough - South Bay",""  ],
  [-0.398289886830014,54.28973,"Scarborough - North Bay",""  ],
  [-0.53017296592293,54.430051,"Robin Hood's Bay",""  ],
  [-0.616398811301465,54.491733,"Whitby",""  ],
  [-0.669306550300405,54.503488,"Sandsend Bay - Beach",""  ],
  [-0.672516,54.507872,"Sandsend Bay - Caves",""  ],
  [-0.73943949734003,54.530114,"Runswick Bay",""  ]
];

function initMap() {
  document.getElementById("startDate").min = getDate(0);
  document.getElementById("endDate").min = getDate(0);
  document.getElementById("startDate").value = getDate(1);
  document.getElementById("endDate").value = getDate(2);
  document.getElementById("startDate").max = getDate(5);
  document.getElementById("endDate").max = getDate(5);

  styledMapType = new google.maps.StyledMapType([
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }], {name: 'Styled Map'});

  map = new google.maps.Map(
document.getElementById('map'), {disableDefaultUI: true, zoom: 4, center: startLocation,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']}});

  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      currentPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var geocoder = new google.maps.Geocoder;

      geocoder.geocode({'location': currentPos}, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            document.getElementById("location").innerHTML = "" + results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        }
      });

      //drawLocation(currentPos, "L");
      var marker = new google.maps.Marker({position: currentPos, icon: "assets/person.png", map: map});
      map.setCenter(currentPos);

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });

  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

// these two functions should be combined because can't return value from api

function drawLine(coordinates){

  line = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: '#6095d5',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map
  });

}


function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2-lat1);
  var dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return earthRadiusKm * c;
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}


function getCoordinates(location){
  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address=london&key=AIzaSyCCVYrNusxlZ8UQJopNpKm7M_3XIFK7mhw', true)

  var data = null;
  request.onload = function () {
    data = JSON.parse(this.response)
    return data.results[0].geometry.location
  }

  request.send()
}


function drawLocation(position, label){
	var marker = new google.maps.Marker({
          position: position,
          map: map,
          label: label
        });
}


function getDate(dayDifference){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0
  var yyyy = today.getFullYear();

  if(today.getDate()+dayDifference > getDaysInMonth(dd, yyyy)){
    mm += 1;
    dd = today.getDate() + dayDifference - getDaysInMonth(dd, yyyy);
  } else {
    dd = today.getDate() + dayDifference;
  }

  if(dd<10) {
    dd = '0'+dd
  }

  if(mm<10) {
    mm = '0'+mm
  }

  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

function getDaysInMonth(month,year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
}

function differenceBetweenDates(date1, date2){
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}


function expand(){
  if(document.getElementById("menuHiddenStart")){
    document.getElementById("menuHiddenStart").id = "menu";
    document.getElementById("moreStart").id = "less";
  }
  else if(document.getElementById("menuHidden")){
    document.getElementById("menuHidden").id = "menu";
    document.getElementById("more").id = "less";
  }
  else if(document.getElementById("menu")){
    document.getElementById("menu").id = "menuHidden";
    document.getElementById("less").id = "more";
  }
}

function toggleSport(){
  if(document.getElementById("sportUnexpanded")){
    document.getElementById("sportUnexpanded").id = "sportExpanded";
    document.getElementById("arrowDown1").id = "arrowUp1";
  }
  else if(document.getElementById("sportExpanded")){
    document.getElementById("sportExpanded").id = "sportUnexpanded";
    document.getElementById("arrowUp1").id = "arrowDown1";
  }
}

function toggleWeather(){
  if(document.getElementById("weatherUnexpanded")){
    document.getElementById("weatherUnexpanded").id = "weatherExpanded";
    document.getElementById("arrowDown2").id = "arrowUp2";
  }
  else if(document.getElementById("weatherExpanded")){
    document.getElementById("weatherExpanded").id = "weatherUnexpanded";
    document.getElementById("arrowUp2").id = "arrowDown2";
  }
}

// finds best spot in function of :
// - windSpeed in m/s
// - windDirection in kelvin
// - temp in celsius
// - cloudiness in percentage
function findBestSpots(){

  var homeLocation = currentPos
  var travelTime = document.getElementById("travelTime").value
  var today = new Date();
  var startDate = new Date(document.getElementById("startDate").value)
  var endDate = new Date(document.getElementById("endDate").value)

  var weatherRequest = new XMLHttpRequest()
  weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/forecast?lat=" + currentPos.lat + "&lon=" + currentPos.lng + "&APPID=b1fef35e73e92d824c8b42ea70b5e913")
	weatherRequest.send()

	var weatherRequestData = null;

	weatherRequest.onload = function () {
		weatherRequestData = JSON.parse(this.response)
    console.log(weatherRequestData)

    // needs to get average of wind speed in between dates and calculate the quality
    var windSpeedSum = 0
    if(today.getDate() == startDate.getDate()){
      var i = 0
    }else {
      var i = 8*differenceBetweenDates(today, startDate)
    }
    for(var o=i ; o<8*differenceBetweenDates(today, endDate) ; o++){
      console.log(o)
      windSpeedSum += weatherRequestData.list[o].wind.speed;
    }
    console.log(windSpeedSum/(o-i))

    // needs to get the direction of the wind and somehow see if it's towards the shore

	}

  for(i=0 ; i<locations.length ; i++){
    if(distanceInKmBetweenEarthCoordinates(locations[i][1], locations[i][0], currentPos.lat, currentPos.lng) < (60*document.getElementById("travelTime").value)){
      var position = {
        lat: locations[i][1],
        lng: locations[i][0]
      }
      drawLocation(position, 'K');
    }
  }
}


// API key : b1fef35e73e92d824c8b42ea70b5e913
