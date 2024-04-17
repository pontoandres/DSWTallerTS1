"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("HOLA");
// Importar datos y clase Serie
var data_1 = require("./data");
console.log(data_1.series);
console.log("HOLA 2");
// Función para renderizar la tabla de series
function renderSeriesTable(series) {
    // Obtener referencia al elemento donde se mostrará la tabla
    var table = document.getElementById('seriesTable');
    // Crear una cadena de texto para las filas de la tabla
    var tableHTML = '';
    // Iterar a través de las series y crear filas de la tabla
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        tableHTML += "\n            <tr>\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.nombre, "</td>\n                <td>").concat(serie.plataforma, "</td>\n                <td>").concat(serie.temporadas, "</td>\n            </tr>\n        ");
    }
    // Establecer el HTML de la tabla
    table.innerHTML = tableHTML;
}
// Función para calcular y mostrar el promedio de temporadas
function mostrarPromedioTemporadas(series) {
    // Calcular el promedio
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.temporadas;
    }
    var promedioTemporadas = totalTemporadas / series.length;
    // Mostrar el promedio en el elemento correspondiente
    var promedioElement = document.getElementById('promedioTemporadas');
    promedioElement.textContent = "El promedio de temporadas es: ".concat(promedioTemporadas.toFixed(2));
}
// Ejecutar las funciones cuando la página esté cargada
window.onload = function () {
    renderSeriesTable(data_1.series);
    mostrarPromedioTemporadas(data_1.series);
};
