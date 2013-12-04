
var myLatlng = new google.maps.LatLng(28.18, -15.83);
function initialize() {
  var mapOptions = {
    scrollwheel: false,
    center: myLatlng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  google.maps.event.addDomListener(window, 'load', initialize);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
  });

  var coordinates = [
    new google.maps.LatLng(50.36, -4.14),
    new google.maps.LatLng(50.13, -4.30),
    new google.maps.LatLng(48.53, -6.20),
    new google.maps.LatLng(46.60, -7.42),
    new google.maps.LatLng(44.33, -9.33),
    new google.maps.LatLng(42.45, -9.12),
    new google.maps.LatLng(42.120533, -8.847750)
  ];
  var path = new google.maps.Polyline({
    path: coordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  path.setMap(map);

  var coordinates = [
    new google.maps.LatLng(42.0847, -9.0268),
    new google.maps.LatLng(41.8255, -8.9419),
    new google.maps.LatLng(41.3717, -8.7650),
    new google.maps.LatLng(41.3715, -8.7650),
    new google.maps.LatLng(41.6973, -8.7883),
    new google.maps.LatLng(41.1749, -8.7579),
    new google.maps.LatLng(41.1421, -8.6511),
    new google.maps.LatLng(41.1420, -8.6512),
    new google.maps.LatLng(40.9872, -8.7166),
    new google.maps.LatLng(40.3050, -8.9328),
    new google.maps.LatLng(40.1459, -8.8605),
    new google.maps.LatLng(40.1473, -8.8604),
    new google.maps.LatLng(39.4150, -9.3847),
    new google.maps.LatLng(39.3518, -9.3766),
    new google.maps.LatLng(38.7950, -9.5271),
    new google.maps.LatLng(38.6761, -9.3183),
    new google.maps.LatLng(37.9506, -8.8661),
    new google.maps.LatLng(37.1953, -8.9992),
    new google.maps.LatLng(37.0050, -8.8690)
  ];
  var path = new google.maps.Polyline({
    path: coordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  path.setMap(map);

  var coordinates = [
    new google.maps.LatLng(37.09602, -8.50957),
    new google.maps.LatLng(34.03362, -6.86160),
    new google.maps.LatLng(33.71392, -7.39253),
    new google.maps.LatLng(33.25400, -8.49707),
    new google.maps.LatLng(32.30633, -9.25222),
    new google.maps.LatLng(31.50130, -9.78673),
    new google.maps.LatLng(30.41833, -9.62917),
    new google.maps.LatLng(29.2267, -13.5015),
    new google.maps.LatLng(28.9153, -13.7070),
    new google.maps.LatLng(28.3915, -13.8561),
    new google.maps.LatLng(28.2053, -14.0240),
    new google.maps.LatLng(28.1281, -15.4231),
    new google.maps.LatLng(28.18, -15.83)
  ];
  var path = new google.maps.Polyline({
    path: coordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  path.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
