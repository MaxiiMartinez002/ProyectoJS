
alert("Bienvenido a Bytech");
alert("Crea tu usuario");
let usuario
let contrasenia
let usuarionuevo = prompt("Nombre de usuario");
let contrasenianueva = prompt("Escriba su contraseña");
let fallidos = 0
console.table(productos); 
for(let i=1; i<=3; i++){
    alert("Inicia sesion")
    usuario = prompt("Nombre de usuario");
    contrasenia = prompt("Contraseña");
    if((usuario == usuarionuevo)&&(contrasenia== contrasenianueva)){
        alert("Bienvenido "+usuario+"!!");
        break;
    }else{
        alert("Usuario incorrecto");
        fallidos=fallidos + 1
    }
}
    if(fallidos == 3){
        alert("Sistema bloqueado")
    }
	//declar la funcion 
	function filtrarPorMax(precioMax){
		const filtro = productos.filter((producto) => producto.precio <= precioMax);
		return filtro;
	}

	let maximoUsuario = parseFloat(prompt("Ingrese el valor maximo que desea gastar. 0-Salir"));
	while (maximoUsuario !=0){
		if(isNaN(maximoUsuario)){
			alert("Ingrese un numero valido")
		}else{
			const prodfiltrado = filtrarPorMax(maximoUsuario);
			console.table(prodfiltrado)
		}
		maximoUsuario = parseFloat(prompt("Ingrese el valor maximo que desea gastar. 0-Salir"));
	}
