// Based on this tutorial: https://developers.google.com/maps/documentation/javascript/tutorial
// Adding a marker tutorial: https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// Question: how to keep this variable in my function, yet make i
var center = {
  lat: 39.7577,
  lng: -105.007
};

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 18,
    mapTypeId: "satellite"
  });
  map.setTilt(45);
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });
}
