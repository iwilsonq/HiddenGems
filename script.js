document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelectorAll('#map').length > 0) {
    if (document.querySelector('html').lang)
    lang = document.querySelector('html').lang;
    else
    lang = 'en';

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyA7CyuuBY69Jl8MuVuh2JcpeSbpbcueaM4&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }
});

var map, markers, bounds, initialLocation;

function initMap() {
  var peetsSaratoga = { lat: 37.293013599999995, lng: -122.03208889999999 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: peetsSaratoga,
    zoom: 13
  });
}

function plotMarkers(m) {
  markers = [];
  bounds = new google.maps.LatLngBounds();

  m.forEach(function (marker) {
    var position = new google.maps.LatLng(marker.lat, marker.lng);

    markers.push(
      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      })
    );

    bounds.extend(position);
  });

  map.fitBounds(bounds);
}

function getLocation() {
  if (navigator.geolocation) {
    var location = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

  return location;
}

function showPosition(position) {
  console.log('Latitude: ', position.coords.latitude);
  console.log('Longitude: ', position.coords.longitude);

  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
}

var token;
function getYelpToken() {
  token = 'jfKCs-rDzNVmVSnGjNuDbJ0XH8pDYwzTEmrlZKTproD4j1JwFvU4twmmRsTH0LiMTYJ0NQd952Gn--fSn_CTUv8e3xYN7pFgqHHlFXekhnxc_xbnui_HiZIbdM51WHYx';
}
