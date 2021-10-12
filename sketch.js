var lati; // variable de latitud
var long; // variable de longitud
let canvas;
let myMap;
let datos; // variable que almacena los datos del archivo CSV
let imagen;
let lat;
let lon;
let numRows


function preload() {
// el primer comoponete es el archivo csv , el segundo es el tipo de archivo
// el tercer componente es el encabezado del archivo exel de datos csv
// asi los datos estaran cargados antes de ejecutar las demas instrucciones
  datos = loadTable("cordenadas.csv", "csv", "header"); // almacenamos los datos en la variable
// almacenamos altitud y longitus en una matriz
  lat = datos.getColumn("lat"); // usamos el nombre que figura en al tabla exel CSV
  lon = datos.getColumn("lon"); // usamos el nombre que figura en la tabla exel CSV 
  img = datos.getColumn("img"); // usamos el nombre que figura en al tabla exel CSV
  numRows = datos.getRowCount(); // almacena las filas como datos
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
            long = position.coords.longitude; // obtenermos longitud
            gurdar(lati,long)
            });
    } else {
        /* geolocation IS NOT available */
        console.log('geolocation NO funcionando');
        console.log(leerDatos())
    };
    initMap()
    }

function draw () {
textSize(16); // fija el tamaño del texto
text("latitud",20,30); // imprime el texto en posicion x, y 
text(lati,85,30); // imprime variable en posicion x,y
text("longitud",20,50); // imprime el texto en posicion x,y
text(long,85,50); // imprime variable en posicion x,y
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
    // ciclo repetitivo que recorra todos los datos desde 0 hasta el valor de menor de filas 
    for (let i = 0; i < numRows; i++) {
        imagen=createImg(img[i]);
        imagen.hide();
        let marcador = myMap.latLngToPixel(lat[i],lon[i]);
        image(imagen,marcador.x,marcador.y,35,35);        
    }
}

function gurdar(lati,long){
let table;
table = new p5.Table();
table.addColumn('lat');
table.addColumn('lon');
table.addColumn('img');
let lat = datos.getColumn("lat"); // usamos el nombre que figura en al tabla exel CSV
let lon = datos.getColumn("lon"); // usamos el nombre que figura en la tabla exel CSV 
let img = datos.getColumn("img"); // usamos el nombre que figura en al tabla exel CSV
let newRow = table.addRow();
// ciclo repetitivo que recorra todos los datos desde 0 hasta el valor de menor de filas 
for (let i = 0; i < numRows; i++) {
    newRow.setNum('lat', lat[i]);
    newRow.setNum('lon', lon[i]);
    newRow.setString('img', img[i]);
}
newRow.setNum('lat', lati);
newRow.setNum('lon', long);
newRow.setString('img', "agua_enojada.jpg");
saveTable(table, 'cordenadas.csv');
}