window.onload = function() {
var mapa = L.map('meumapa').setView([-25.45, -49.27], 11);
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var mapbox = L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2NhbWJvaW0iLCJhIjoiY2pmMnJiYXduMWZlaTMzb2h0OHZnb2p5MyJ9.KS6DEMGACVV6xK7-XqxTeA',
  }
).addTo(mapa);
// var linha1 = L.polyline([
// [-25.4, -49.2],
// [-25.5, -49.0]
// ],
// {
//   color:"#ff33cc"
// }
// ).addTo(mapa);

var poligono = L.polygon([
[-25.45, -49.2],
[-25.48, -49.7],
[-25.5, -49.5],
[-25.6, -49.3]
])//.addTo(mapa);

var circulo = L.circle(
[-25.45, -49.35],
{
color: '#ff33cc',
fillColor: '#ff33cc',
fillOpacity: 0.5,
radius: 2400
}
)//.addTo(mapa);
//Pontos
var ponto1 = L.marker([-25.45, -49.27]);
    ponto2 = L.marker([-25.43, -49.29]);

//Linhas
var linha1 = L.polyline([[-25.4, -49.2], [-25.5, -49.1]]);
    linha2 = L.polyline([[-25.4, -49.1], [-25.5, -49.2]]);
// ponto.bindPopup("Eu sou um ponto!");
// linha.bindPopup("Eu sou uma linha!");
// poligono.bindPopup("Eu sou um polígono!");
// circulo.bindPopup("Eu sou um círculo");
//
// ponto.openPopup();
// linha.openPopup();
// poligono.openPopup();
// circulo.openPopup();
//
// var popup = L.popup()
// .setLatLng([-25.44, -49.51])
// .setContent("Eu sou uma popup!")
// .openOn(mapa);

// mapa.on('dblclick', function (evento) {
// alert("Você clicou em: " + evento.latlng);
//  });

var mun =  L.tileLayer.wms("http://www.geoservicos.ibge.gov.br/geoserver/CCAR/wms", {
layers: "CCAR:BCIM_Municipio_A",
transparent: "true",
format: "image/png"
})//.addTo(mapa);

//var uri = "http://www.geoservicos.ibge.gov.br/geoserver/CCAR/wms?REQUEST=GetLegendGraphic&FORMAT=image/jpeg&LAYER=CCAR:BCIM_Municipio_A";

var pontos = L.layerGroup([ponto1, ponto2]);
var linhas = L.layerGroup([linha1, linha2]);
var desenhos = L.layerGroup([pontos, linhas, circulo, poligono]).addTo(mapa);

var baseCartografica = {
"OpenStreetMap": osm,
"Mapbox Streets": mapbox

}
//Mapas de sobreposiçao
var informacaoTematica = {
"Desenhos": desenhos,
"Municípios coração": mun

}
//Adicionar objetos ao controle de camadas
L.control.layers(baseCartografica, informacaoTematica).addTo(mapa);
L.control.scale({position: 'bottomleft', imperial: 'false'}).addTo(mapa);
}
