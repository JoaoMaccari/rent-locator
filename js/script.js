var map = L.map('map').setView([-28.6553514, -49.2067544], 16);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on('click', e =>{
    
    console.log(e)
})

/* MARKER  */ 

// 
var marker1 = L.marker([-28.652092, -49.208899],{
   
}).addTo(map).bindPopup("<h1>Sala comercial</h1> <p>Sala 01: 54m2</p> " + 
                        "<p>Sala 02: 78m2</p>" + 
                        "<p>Sala 03: 47m2</p>" +
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel.png'/>",{
                            maxWidth : 560,
                        } )


// var marker = L.marker([-49.20, -28.65], {
//     title:"30/03/23 - algum lugar na africa"
// })
// marker.bindPopup("30/03/23 - algum lugar na africa")
// marker.addTo(map) // 

/*                        GEOJSON                   */


// L.geoJSON(data,  {
// onEachFeature: function(feature, layer){
//     layer.bindPopup("<b>Tipo de locação: </b>"
                
    
    
//     + feature.properties.tipo)
// }
// }).addTo(map)