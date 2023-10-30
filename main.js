const celdas = document.querySelectorAll('.cell');
const audio = new Audio('/img/mi_explosion_03_hpx.mp3'); // Ruta real del archivo de sonido

const tablero = Array.from({ length: 10 }, () => Array(10).fill(false));

const barcos = [
    { size: 4, destroyed: false, parts: [] }, // Barco de 4 espacios
    { size: 3, destroyed: false, parts: [] }, // Barco de 3 espacios
    { size: 3, destroyed: false, parts: [] }  // Segundo barco de 3 espacios
];

let currentCell = 0;
// Agregar barco de 4 espacios
for (let i = 0; i < 4; i++) {
    const fila = Math.floor(currentCell / 10);
    const columna = currentCell % 10;
    barcos[0].parts.push({ fila, columna });
    currentCell++;
}

// Agregar barco de 3 espacios (1)
for (let i = 8; i <= 10; i++) {
    const fila = Math.floor(i / 10);
    const columna = i % 10;
    barcos[1].parts.push({ fila, columna });
}

// Agregar barco de 3 espacios (2)
for (let i = 13; i <= 15; i++) {
    const fila = Math.floor(i / 10);
    const columna = i % 10;
    barcos[2].parts.push({ fila, columna });
}

// Función para revelar y destruir un barco
function revealAndDestroyShip(barco) {
    barco.parts.forEach(part => {
        const celda = celdas[part.fila * 10 + part.columna];
        celda.style.backgroundColor = '#e74c3c'; // Cambia el color de las partes del barco
        celda.style.color = '#fff';
        celda.innerHTML = '';
    });
    barco.destroyed = true;
    audio.play();//toca esperar como 3 segundos para activar el audio del siguiente barco
    
    alert("Es automata");
}

// Agregar evento de clic a cada celda
celdas.forEach((celda, index) => {
    celda.addEventListener('click', () => {
        const fila = Math.floor(index / 10);
        const columna = index % 10;
        const barco = barcos.find(barco => barco.parts.some(part => part.fila === fila && part.columna === columna));
        if (barco) {
            revealAndDestroyShip(barco);
            
        } else {
            celda.style.backgroundColor="white"; // Cambia el color de agua
            alert("No le atinaste,intentalo de nuevo")
        }
        celda.style.pointerEvents = 'none'; // Desactiva el clic después de la elección
        
    });
});
