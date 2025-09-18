const libro = {
    informacion: {
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía Épica",
    },
    disponibilidad: {
        copias: 35,
        prestados: 12,
        ubicacion: "Estante C4",
    },
    registro: {
        fechaPublicacion: "29-07-1954",
        fechaIngreso: "10-03-2023",
        ultimaRevision: "05-05-2025",
    }
};

// Mostrar la informacion del autor
console.log("Autor:", libro.informacion.autor);

// Calcular ejemplares disponibles
const disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);

// Actualizar ultimaRevision con la fecha actual
libro.registro.ultimaRevision = new Date().toISOString().split("T")[0];
console.log("Última revisión:", libro.registro.ultimaRevision);

// Cambiar genero del libro
libro.informacion.genero = "Aventura y Fantasía";
console.log("Género actualizado:", libro.informacion.genero);

// Extraer titulo y ubicacion
const { titulo } = libro.informacion;
const { ubicacion } = libro.disponibilidad;
console.log("Título:", titulo);
console.log("Ubicación:", ubicacion);

// Mostrar el objeto actualizado
console.log("Libro actualizado:", libro);