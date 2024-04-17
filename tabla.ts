
console.log("HOLA");
// Importar datos y clase Serie
import { series } from './data';
import { Serie } from './Serie';

console.log(series);
console.log("HOLA 2");

// Función para renderizar la tabla de series
function renderSeriesTable(series: Serie[]) {
    // Obtener referencia al elemento donde se mostrará la tabla
    const table = document.getElementById('seriesTable');
    
    // Crear una cadena de texto para las filas de la tabla
    let tableHTML = '';

    // Iterar a través de las series y crear filas de la tabla
    for (const serie of series) {
        tableHTML += `
            <tr>
                <td>${serie.id}</td>
                <td>${serie.nombre}</td>
                <td>${serie.plataforma}</td>
                <td>${serie.temporadas}</td>
            </tr>
        `;
    }

    // Establecer el HTML de la tabla
    table.innerHTML = tableHTML;
}

// Función para calcular y mostrar el promedio de temporadas
function mostrarPromedioTemporadas(series: Serie[]) {
    // Calcular el promedio
    let totalTemporadas = 0;
    for (const serie of series) {
        totalTemporadas += serie.temporadas;
    }
    const promedioTemporadas = totalTemporadas / series.length;

    // Mostrar el promedio en el elemento correspondiente
    const promedioElement = document.getElementById('promedioTemporadas');
    promedioElement.textContent = `El promedio de temporadas es: ${promedioTemporadas.toFixed(2)}`;
}

// Ejecutar las funciones cuando la página esté cargada
window.onload = function () {
    renderSeriesTable(series);
    mostrarPromedioTemporadas(series);
};
