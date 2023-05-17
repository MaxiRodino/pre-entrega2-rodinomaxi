let nombreIngresado = prompt ("Ingrese su nombre");

while (nombreIngresado.toUpperCase() != "ESC"){
    nombreIngresado = prompt ("Hola" +" " + nombreIngresado + " " + "bienvenid@ al taller");
}
let servicios = propmt ("Ingrese un servicio deseado:\n \n Lavado de vehículo\n Cambio de aceite y filtro\n Pulido detailing\n Mecánica ligera\n Limpieza de interiores\n Revisión y reparación de frenos").toUpperCase();

while((servicios != "Lavado de vehiculo") && (servicios != "Cambio de aceite y filtro") && (servicios != "Pulido detailing") && (servicios != "Mecánica ligera") && (servicios != "Limpieza de interiores") && (servicios != "Revisión y reparación de frenos")){
    servicios = prompt ("Ingrese un servicio deseado:\n \n Lavado de vehículo\n Cambio de aceite y filtro\n Pulido detailing\n Mecánica ligera\n Limpieza de interiores\n Revisión y reparación de frenos").toUpperCase();
}

console.log(nombreIngresado);
console.log(servicios);

const calcularValorServicios = (servicios) =>{
switch(servicios){
    case "Lavado de vehiculo":
        ValorServicios = 1500
        alert("Elegiste lavado de vehiculo");
        break;
    case "Cambio de aceite y filtro":
        ValorServicios = 15000
        alert("Elegiste cambio de aceite y filtro");
        break;
    case "Pulido detailing":
        ValorServicios = 20000
        alert("Elegiste pulido detailing");
        break;
    case "Mecánica ligera":
        ValorServicios = 10000
        alert("Elegiste mecánica ligera");
        break;
    case "Limpieza de interiores":
        ValorServicios = 8000
        alert("Elegiste limpieza de interiores");
        break;
    case "Revisión y reparacion de frenos":
        ValorServicios = 15000
        alert("Elegiste revisión y reparacion de frenos");
        break;
    default:
        ValorServicios = 00000
        alert("Ingrese una opción");
        break;
}
    return ValorServicios;
}

const preciofinal = (ValorServicios) => {
    return servicios + servicios
}
let ValorServicios = calcularValorServicios (servicios);

console.log (ValorServicios);
console.log ("valor del servicio a:" + servicios + "\n" + "valor del servicio b:" + servicios + "\n" + preciofinal(ValorServicios));
let salida = "El presupuesto estimado es:" + servicios + "\n" + servicios +  preciofinal(ValorServicios);
alert (salida);