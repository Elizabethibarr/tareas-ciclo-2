const persona = {
    nombre: "Elizabeth",
    edad: 18,
    altura: 1.68
};

console.log(persona);               // Muestra todo el objeto
console.log(persona.nombre);        // Muestra "Elizabeth"
console.log(persona['edad']);       // Muestra 18

// Agregamos un nuevo atributo
persona.ojos = "Café";
console.log(persona);

// Eliminamos la altura
delete persona.altura;
console.log(persona);

// Modificamos la edad
persona.edad = 20;
console.log(persona);

// Guardamos el nombre en una constante
const nom = persona.nombre;
console.log(nom);

// Desestructuración del objeto
const { nombre, edad } = persona;
console.log(nombre);  // Muestra "Elizabeth"
console.log(edad);    // Muestra 20