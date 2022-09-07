let marker;
let map;

function initMap(){
    console.log("inicializando mapa")
    const posicion = { 
        lat: -25.344,
        lng: 131.031
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: posicion
    });

  // The marker, positioned at posicion
    marker = new google.maps.Marker( 
        { position: posicion, map, title: "Floresta, Buenos Aires." }
        
    );
    let otraPos = { position: new google.maps.LatLng(41.35752147532835, 2.136542840708587), title: "L'Hospitalet de Llobregat, Barcelona."};
    
    let marker2 = new google.maps.Marker(otraPos);

    let ultimaPos = { position: new google.maps.LatLng(-34.63535488235705, -58.36474557302225), title: "La Bombonera, Buenos Aires."};

    let marker3 = new google.maps.Marker(ultimaPos);

    marker2.setMap(map);
    marker3.setMap(map);



    geoPosiciona()
};


function geoPosiciona() {
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000}
        const watchPos =  geoLoc.watchPosition( centraMapa, onError, options)
    
    } else {
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centraMapa (position) {
    const nuevaPos = { lat: position.coords.latitude, lng: position.coords.longitude }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)


}


function onError (error){
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}