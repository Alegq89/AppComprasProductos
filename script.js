// Array para definir los productos
const productos = [
  {id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1", valor: 5000, cantidad: 5},
  {id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2", valor: 2000, cantidad: 7},
  {id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3", valor: 8000, cantidad: 9},
  {id: 4, nombre: "Producto 4", descripcion: "Descripción del producto 4", valor: 10000, cantidad: 10},
  {id: 5, nombre: "Producto 5", descripcion: "Descripción del producto 5", valor: 4000, cantidad: 6},
];

let carrito = []; //Array vacío donde se almacenan los productos que el cliente agregue al carrito.
let ventasTotales = 0; // Variable que almacena las ventas realizadas en el día.

//Función para agregar productos al carrito
function agregarAlCarrito() {
  const seleccionCliente = prompt(
    "Ingrese el código del producto que desea agregar al carrito: ");

  const producto = productos.find((item) => item.id === parseInt(seleccionCliente)); //find es el método para buscar el elemento que cumpla con la condición que ingresa el usuario.

  if (producto) {
    const indexProducto = carrito.findIndex((item) => item.id === producto.id); //FindIndex busca el índice de ese item id en el array, si no coincide devuelve -1.
    if (indexProducto !== -1) {
      carrito[indexProducto].cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 }); // Método push agrega un elemento al array al final de la lista. Los ...(3 puntos) es un spread copia las propiedades del array productos.
    }
    console.log(`"${producto.nombre}" agregado al carrito`);
  } else {
    console.log("Producto no encontrado");
  }
}

//Función para ver el pedido y mostrar el valor total
function verPedido() {
  if (carrito.length === 0) {
    console.log("El carrito está vacío...");
    return;
  }

  let totalProductos = 0;
  let valorTotal = 0;

  console.log("Pedido: ");
  carrito.forEach((item) => {              //Método forEach para recorrer el array carrito.
    const productoEnCarrito = productos.find((product => product.id ===item.id)); //Encontrar el producto correspondiente en el array de productos
    totalProductos += item.cantidad;
    valorTotal += productoEnCarrito.valor * item.cantidad;
    console.log(`---${item.nombre}: ${item.cantidad} unidad(es)`);
  });

  console.log(`Cantidad total de productos: ${totalProductos}`);
  console.log(`Valor total del pedido: ${valorTotal}`);
}

//Función para agregar venta al contador
function agregarVenta() {
  ventasTotales++; //Operador de incremento de 1 en 1.
  console.log("Venta agregada al contador");
}
