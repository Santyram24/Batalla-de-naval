const celda = document.querySelectorAll('.cell');
// Crear un elemento de imagen
// const imagen = document.createElement('img');
//   // Establecer el atributo alt (texto alternativo)
// imagen.alt = 'Barco\ndestruido';
// // Establecer el atributo src (ruta de la imagen)
// imagen.src = '\img\boat.png';
// //clase para la edicion en css
// imagen.classList.add('imagen-fragata');

const audio = new Audio('/img/mi_explosion_03_hpx.mp3'); // ruta real del archivo de sonido

// Agrega un barco a una celda aleatoria
const randomCelda = celda[Math.floor(Math.random() * celda.length)];
randomCelda.classList.add('ship');

// Agregar evento de clic a cada celda
celda.forEach(celda => {
    celda.addEventListener('click', () => {
        if (celda.classList.contains('ship')) {
            celda.style.backgroundColor = '#e74c3c'; // Cambia el color de hundido
            celda.style.color = '#fff';
            celda.innerHTML = 'X';
            // Reproduce el sonido al hacer clic en una celda con un barco
            audio.play();
            // celda.appendChild(imagen);
            alert("Es automata");
        } else {
            celda.style.backgroundColor = '#3498db'; // Cambia el color de agua
            
        }
        celda.style.pointerEvents = 'none'; // Desactiva el clic después de la elección
    });
});
