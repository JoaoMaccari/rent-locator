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
                        "<p>Sala 03: 32m2</p>" +
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel.png'/>",{
                            maxWidth : 560,
});

var marker2 = L.marker([-28.652835875502774, -49.209013485220595],{

}).addTo(map).bindPopup("<h1>Sala comercial</h1> <p>Sala 01: 100m2</p> " + 
                    "<p>Sala 02: 41m2</p>" + 
                    "<p>Sala 03: 59m2</p>" +
                    "<p>Sala 04: 59m2</p>" +
                    "<img width='560' height='315' class='salaCentro' src ='./img/aluguel2.png'/>",{
                        maxWidth : 560,
});


var marker3 = L.marker([-28.6523, -49.2106],{

}).addTo(map).bindPopup("<h1>Apartamentos</h1> <p>Apto 01: 1 Andar - 185m2</p> " + 
                    "<p>Apto 02: 2 Andar 200m2</p>" + 
                    "<img width='560' height='315' class='salaCentro' src ='./img/aluguel3.png'/>",{
                        maxWidth : 560,
})


var marker4 = L.marker([-28.6453, -49.1988],{

}).addTo(map).bindPopup("<h1>Terreno</h1> <p> 01 terreno de  300m2</p> " + 
                    "<img width='560' height='315' class='salaCentro' src ='./img/aluguel3.png'/>",{
                        maxWidth : 560,
})


var marker5 = L.marker([-28.6457, -49.1984],{

}).addTo(map).bindPopup("<h1>Terreno</h1> <p> 01 terreno de  300m2</p> " + 
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel3.png'/>",{
                            maxWidth : 560,
})

var marker6 = L.marker([-28.7606, -49.1284],{

}).addTo(map).bindPopup("<h1>Casa</h1> <p> Casa alvenaria 316m2</p> " + 
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel4.png'/>",{
                            maxWidth : 560,
});

var marker7 = L.marker([-28.7601, -49.1256],{

}).addTo(map).bindPopup("<h1>Apartamentos</h1> <p> Prédio com 18 aptos para alugar por temporada</p> " + 
                       
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel5.png'/>",{
                            maxWidth : 560,
                           
})

var marker8 = L.marker([-28.4788, -48.7682],{

}).addTo(map).bindPopup("<h1>Apartamento</h1> <p> Apartamento com 200m2</p> " + 
                       
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel5.png'/>",{
                            maxWidth : 560,
                           
})

var marker9 = L.marker([-28.4875, -48.7670],{

}).addTo(map).bindPopup("<h1>Apartamento</h1> <p> Apartamento com 200m2</p> " + 
                       
                        "<img width='560' height='315' class='salaCentro' src ='./img/aluguel5.png'/>",{
                            maxWidth : 560,
                           
})







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