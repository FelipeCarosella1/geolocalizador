
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
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: lat, lng: lon },
  });
  var image ="agua_enojada.jpg";
  const beachMarker = new google.maps.Marker({
    position: { lat: lat, lng: lon },
    map,
    icon: image,
  });
}