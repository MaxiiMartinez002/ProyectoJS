
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.imagen}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.imagen,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Agregaste ${product.nombre} al carrito`,
        showConfirmButton: false,
        timer: 1500,
      })
  });
});

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};














































// let articuloCartas = document.getElementById('cartas');

//  for (const prod of productos){
//     articuloCartas.innerHTML += `
//     <div class="card" style="width: 18rem; ">
//     <img src="${prod.imagen}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${prod.nombre}</h5>
//       <p class="card-text">${prod.precio}</p>
//       <a href="#" class="btn btn-dark">Comprar</a>
//     </div>
//   </div>
//   `
//  };

























































// alert("Bienvenido a Bytech");
// alert("Crea tu usuario");
// let usuario
// let contrasenia
// let usuarionuevo = prompt("Nombre de usuario");
// let contrasenianueva = prompt("Escriba su contraseña");
// let fallidos = 0
// console.table(productos); 
// for(let i=1; i<=3; i++){
//     alert("Inicia sesion")
//     usuario = prompt("Nombre de usuario");
//     contrasenia = prompt("Contraseña");
//     if((usuario == usuarionuevo)&&(contrasenia== contrasenianueva)){
//         alert("Bienvenido "+usuario+"!!");
//         break;
//     }else{
//         alert("Usuario incorrecto");
//         fallidos=fallidos + 1
//     }
// }
//     if(fallidos == 3){
//         alert("Sistema bloqueado")
//     }
// 	//declar la funcion 
// 	function filtrarPorMax(precioMax){
// 		const filtro = productos.filter((producto) => producto.precio <= precioMax);
// 		return filtro;
// 	}

// 	let maximoUsuario = parseFloat(prompt("Ingrese el valor maximo que desea gastar. 0-Salir"));
// 	while (maximoUsuario !=0){
// 		if(isNaN(maximoUsuario)){
// 			alert("Ingrese un numero valido")
// 		}else{
// 			const prodfiltrado = filtrarPorMax(maximoUsuario);
// 			console.table(prodfiltrado)
// 		}
// 		maximoUsuario = parseFloat(prompt("Ingrese el valor maximo que desea gastar. 0-Salir"));
// 	}
