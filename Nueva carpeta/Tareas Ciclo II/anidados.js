const estudiante = {
    nombre: "Ana",
    apellido: "Gómez",
    edad: 28,
    direccion: {
        pais: "México",
        calle: "Avenida Central",
        numCasa: 12
    }
}

console.log(estudiante.direccion);        // Muestra todo el objeto direccion
console.log(estudiante.direccion.pais);   // Muestra "México"
console.log(estudiante.direccion.numCasa); // Muestra 12

// Agregamos un nuevo elemento
estudiante.direccion.cpostal = 11500;
console.log(estudiante.direccion);

// Modificamos un elemento existente
estudiante.direccion.numCasa = 25;
console.log(estudiante.direccion);

// Eliminamos el elemento que agregamos
delete estudiante.direccion.cpostal;
console.log(estudiante.direccion.pais); // Muestra "México"