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
/*let nombreIngresado = prompt ("Ingrese su nombre");
console.log(nombreIngresado);

alert("Hola" +" " + nombreIngresado + " " + "bienvenid@ al taller")

let servicios = prompt ("Ingrese un servicio deseado:\n"+
                        "1 - Lavado de vehículo\n"+
                        "2 - Cambio de aceite y filtro\n"+
                        "3 - Pulido detailing\n"+
                        "4 - Mecánica ligera\n"+
                        "5 - Limpieza de interiores\n"+
                        "6 - Revisión y reparación de frenos");

while(
  (servicios !== "1")&&
  (servicios !== "2")&&
  (servicios !== "3")&&
  (servicios !== "4")&&
  (servicios !== "5")&&
  (servicios !== "6")){
 
  alert("por favor ingresa un servicio");
  servicios = prompt ("Ingrese un servicio deseado:\n"+
                        "1 - Lavado de vehículo\n"+
                        "2 - Cambio de aceite y filtro\n"+
                        "3 - Pulido detailing\n"+
                        "4 - Mecánica ligera\n"+
                        "5 - Limpieza de interiores\n"+
                        "6 - Revisión y reparación de frenos");
 
 
}


const calcularValorServicios = (servicios) =>{
  let valorServicios = 0;
  switch(servicios){
    case "1":
        valorServicios = 1500
        alert("Elegiste lavado de vehiculo");
        break;
    case "2":
        valorServicios = 15000
        alert("Elegiste cambio de aceite y filtro");
        break;
    case "3":
        valorServicios = 20000
        alert("Elegiste pulido detailing");
        break;
    case "4":
        valorServicios = 10000
        alert("Elegiste mecánica ligera");
        break;
    case "5":
        valorServicios = 8000
        alert("Elegiste limpieza de interiores");
        break;
    case "6":
        valorServicios = 15000
        alert("Elegiste revisión y reparacion de frenos");
        break;
    default:
        valorServicios = 00000
        alert("Ingrese una opción");
        break;
}
    return valorServicios;
}

let valorDelServicio = calcularValorServicios (servicios);

let pregunta = prompt("paga en efectivo?").toUpperCase()

let descuento = 0;

if(pregunta === "SI"){
  alert("elegiste efectivo, tenes un descuento del 30%")
  descuento = valorDelServicio * 30 /100;
}

alert(valorDelServicio - descuento); */
