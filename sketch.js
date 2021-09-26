
let lat; // variable de latitud
let lon; // variable de longitud
function setup() {
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log('geolocation funcionando');
        // getCurrentPosition() se usa para obtener la posicion de un dispositivo 
        navigator.geolocation.getCurrentPosition(async position => {
            // console.log(position);
            lat = position.coords.latitude; // obtenemos latitud
            lon = position.coords.longitude; // obtenermos longitud
            console.log(lat.toFixed(2)); // visualizamos latitud en modo progrmador
            console.log(lon); // visualizamos longitud en modo programador 
                    });
    } else {
        /* geolocation IS NOT available */
        console.log('geolocation NO funcionando');
    };

createCanvas(200,200); // crea el linezo de 200x200
initMap()
  }
  
function draw () {
textSize(16); // fija el tamaño del texto
text("latitud",20,30); // imprime el texto en posicion x, y 
text(lat,85,30); // imprime variable en posicion x,y
text("longitud",20,50); // imprime el texto en posicion x,y
text(lon,85,50); // imprime variable en posicion x,y
  }

function initMap() {
    const key = 'xyz';
    const style = [{
  elementType: 'geometry',
  stylers: [{
    color: '#242f3e',
  }],
}, {
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#746855',
  }],
}, {
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#242f3e',
  }],
}, {
  'featureType': 'administrative.land_parcel',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'administrative.locality',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
}, {
  'featureType': 'administrative.neighborhood',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'poi',
  elementType: 'labels.text',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'poi',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
}, {
  'featureType': 'poi.park',
  elementType: 'geometry',
  stylers: [{
    color: '#263c3f'
  }]
}, {
  'featureType': 'poi.park',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#6b9a76'
  }]
}, {
  'featureType': 'road',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'road',
  elementType: 'geometry',
  stylers: [{
    color: '#38414e'
  }]
}, {
  'featureType': 'road',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#212a37'
  }]
}, {
  'featureType': 'road',
  elementType: 'labels',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'road',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#9ca5b3'
  }]
}, {
  'featureType': 'road.highway',
  elementType: 'geometry',
  stylers: [{
    color: '#746855'
  }]
}, {
  'featureType': 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#1f2835'
  }]
}, {
  'featureType': 'road.highway',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#f3d19c'
  }]
}, {
  'featureType': 'transit',
  elementType: 'geometry',
  stylers: [{
    color: '#2f3948'
  }]
}, {
  'featureType': 'transit.station',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
}, {
  'featureType': 'water',
  elementType: 'geometry',
  stylers: [{
    color: '#17263c'
  }]
}, {
  'featureType': 'water',
  elementType: 'labels.text',
  stylers: [{
    'visibility': 'off'
  }]
}, {
  'featureType': 'water',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#515c6d'
  }]
}, {
  'featureType': 'water',
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#17263c'
  }]
}];
    let myMap;
    const mappa = new Mappa('Google', key);
    const options = {
    lat: lat,
    lng: lon,
    zoom: 3,
    styles: style,
};
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
}