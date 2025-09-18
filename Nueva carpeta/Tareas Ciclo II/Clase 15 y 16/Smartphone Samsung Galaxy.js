const producto = {
    detalles: {
        nombre: "Smartphone Samsung Galaxy",
        precio: 350,
        categoria: "Telefonía"
    },
    Inventario: {
        stock: 80,
        proveedor: "TecnoMax",
        Ubicacion: "Almacén 3"
    },
    Historial: {
        fechaIngreso: "15-06-2025",
        ultimaVenta: "10-09-2025",
        ventasTotales: 230,
    },
};

// Mostrar únicamente los detalles
console.log("Detalles:", producto.detalles);

// Aumentar el stock en 50 unidades
producto.Inventario.stock += 50;
console.log("Nuevo stock:", producto.Inventario.stock);

// Cambiar la categoría a "Electrónica"
producto.detalles.categoria = "Electrónica";
console.log("Categoría actualizada:", producto.detalles.categoria);

// Extraer el nombre y precio en variables separadas
const { nombre, precio } = producto.detalles;
console.log("Nombre:", nombre);
console.log("Precio:", precio);

// Mostrar el objeto actualizado
console.log("Producto actualizado:", producto);