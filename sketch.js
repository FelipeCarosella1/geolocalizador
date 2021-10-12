var lati; // variable de latitud
var lon; // variable de longitud
let canvas;
let myMap;
let datos; // variable que almacena los datos del archivo CSV


function preload() {
// el primer comoponete es el archivo csv , el segundo es el tipo de archivo
// el tercer componente es el encabezado del archivo exel de datos csv
// asi los datos estaran cargados antes de ejecutar las demas instrucciones
  datos = loadTable("cordenadas.csv", "csv", "header"); // almacenamos los datos en la variable
}

function setup() {
    canvas = createCanvas(displayWidth,displayHeight); // crea el linezo de 200x200}
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log('geolocation funcionando');
        // getCurrentPosition() se usa para obtener la posicion de un dispositivo 
        navigator.geolocation.getCurrentPosition(async position => {
            // console.log(position);
            lati = position.coords.latitude; // obtenemos latitud
            lon = position.coords.longitude; // obtenermos longitud
            console.log(lati.toFixed(2)); // visualizamos latitud en modo progrmador
            console.log(lon); // visualizamos longitud en modo programador 
            });
    } else {
        /* geolocation IS NOT available */
        console.log('geolocation NO funcionando');
        console.log(leerDatos())
    };
    console.log(lon);
    initMap(lati,lon)
    }

function draw () {
textSize(16); // fija el tamaño del texto
text("latitud",20,30); // imprime el texto en posicion x, y 
text(lati,85,30); // imprime variable en posicion x,y
text("longitud",20,50); // imprime el texto en posicion x,y
text(lon,85,50); // imprime variable en posicion x,y
  }

function initMap(){
    const mappa = new Mappa('Leaflet');;
    const options = {
    lat: -34.6075682,
    lng: -58.4370894,
    zoom: 8,
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    marcador();
    myMap.onChange(marcador);
}

function marcador(){
    clear()
    let imagen = []
    let numRows = datos.getRowCount(); // almacena las filas como datos 
    // almacenamos altitud y longitus en una matriz
    let lon = datos.getColumn("lng"); // usamos el nombre que figura en la tabla exel CSV 
    let lat = datos.getColumn("lat"); // usamos el nombre que figura en al tabla exel CSV
    // ciclo repetitivo que recorra todos los datos desde 0 hasta el valor de menor de filas 
    for (let i = 0; i < numRows; i++) {
        imagen.push(createImg("agua_enojada.jpg"));
        imagen[(imagen.length)-1].hide();
        let marcador = myMap.latLngToPixel(lat[i],lon[i]);
        image(imagen[(imagen.length)-1],marcador.x,marcador.y,35,35);
        print(marcador.x,marcador.y)
    }
}

