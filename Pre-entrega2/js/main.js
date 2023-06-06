const baseDeDatos = [
    {id: 1, nombre: 'Lavado de vehiculo', precio:1500 },
    {id: 2, nombre: 'Cambio de aceite y filtro', precio:15000 },
    {id: 3, nombre: 'Pulido detailing', precio:20000 },
    {id: 4, nombre: 'Mecánica ligera', precio:10000 },
    {id: 5, nombre: 'Limpieza de interiores', precio:8000 },
    {id: 6, nombre: 'Revisión y reparación de frenos', precio:15000 },
]

let carrito = [];

function agregarProducto(id){
    const producto = baseDeDatos.find(item=>item.id===id);
    if(producto){
        carrito.push(producto);
        console.log('Se agrego: ' + producto.nombre + ' al carrito');
        }
    else{
            console.log('Ese producto no existe.')
        }
 
  verCarrito()
}

function eliminarProducto(id){
    const productoIndex = carrito.findIndex (item => item.id === id)
    if(productoIndex !==-1){
        const productoEliminado = carrito.splice(productoIndex, 1)[0];
        console.log ('Se elimino el producto con exito.')
        } else{
            console.log ('El producto no está en el carrito');
        }
}

function verCarrito(){
    console.log ("carrito de compras");
    carrito.forEach(( producto, index)=>{
        console.log('Producto: ' + producto.nombre);
        console.log('Precio: ' + producto.precio);
      calcularTotal();
    })
}

function calcularTotal(){
    const total=carrito.reduce((acumulador, producto)=>acumulador+producto.precio, 0);
    console.log ('Total: ' + total)
}