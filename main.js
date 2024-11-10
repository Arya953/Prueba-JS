let nombre = prompt("Ingrese su nombre");

function saludo() {
  alert("Hola " + nombre + ", bienvenido/a a mi tienda");
}

saludo();

const Carrito = [];

function medioDePago() {
  let opcion = Number(
    prompt(
      "Medios de pago disponibles:\n 1-Efectivo\n 2-Tarjeta débito\n 3-Tarjeta de crédito\n"
    )
  );

  let bandera = true;
  let mensajePrecio = "";
  while (bandera) {
    switch (opcion) {
      case 1:
        mensajePrecio = pago(0.8);
        alert(mensajePrecio);
        bandera = !confirm("¿Quiere pagar con este medio de pago?");
        break;
      case 2:
        mensajePrecio = pago(1);
        alert(mensajePrecio);
        bandera = !confirm("¿Quiere pagar con este medio de pago?");
        break;
      case 3:
        mensajePrecio = pago(1.25);
        alert(mensajePrecio);
        bandera = !confirm("¿Quiere pagar con este medio de pago?");
        break;
      default:
        alert("No tenemos ese medio de pago");
        bandera = !confirm("¿Quiere ver los medios de pago de nuevo?");
        break;
    }
    if (bandera) {
      opcion = Number(
        prompt(
          "Medios de pago disponibles:\n 1-Efectivo\n 2-Tarjeta débito\n 3-Tarjeta de crédito\n"
        )
      );
    }
  }
}

function pago(multiplicador) {
  let precioTotal = 0;
  for (let i = 0; i < Carrito.length; i++) {
    precioTotal += Carrito[i].precio;
  }
  return (
    "El total a pagar con este medio de pago es: $" +
    precioTotal * multiplicador
  );
}

function agregarProducto(nombre, cantidad, precio) {
  const precioTotal = cantidad * precio;
  Carrito.push({
    nombre,
    cantidad,
    precio: precioTotal,
  });
}

function cantidadProductos(nombre, precio) {
  let cantidad = Number(prompt("Ingrese cantidad de productos"));

  while (isNaN(cantidad) || cantidad < 1) {
    alert("Cantidad no válida");
    cantidad = Number(prompt("Ingrese cantidad de productos"));
  }

  agregarProducto(nombre, cantidad, precio);
}

function mostradorCarrito() {
  let productos = "\n";
  let precioTotal = 0;
  for (let i = 0; i < Carrito.length; i++) {
    const producto = Carrito[i];
    precioTotal = precioTotal + producto.precio;
    productos =
      productos +
      producto.nombre +
      " Cantidad: " +
      producto.cantidad +
      " Precio: " +
      producto.precio +
      "\n";
  }

  alert(
    "Tu carrito contiene" +
      productos +
      "\n\n" +
      "Por un total de: $" +
      precioTotal
  );
}

function inicio() {
  const msgPrompt =
    "El gym store\n ¿Como lo podemos ayudar?\n 1-Mostrar catálogo\n 2-Ver Carrito\n 3-Pagar mi carrito\n 4-Nada, me quiero ir\n";
  let menu1 = Number(prompt(msgPrompt));

  while (isNaN(menu1)) {
    alert("Opcion no existente");
    menu1 = Number(prompt(msgPrompt));
  }

  let bandera = true;

  while (bandera) {
    switch (menu1) {
      case 1:
        catalogo = Number(
          prompt(
            "Catálogo\n 1-Mancuernas\n 2-Discos\n 3-Elasticos\n 4-Ketbells\n 5-Barras\n 6-Colchonetas\n"
          )
        );
        switch (catalogo) {
          case 1:
            cantidadProductos("Mancuernas", 100);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          case 2:
            cantidadProductos("Discos", 200);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          case 3:
            cantidadProductos("Elasticos", 350);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          case 4:
            cantidadProductos("Ketbells", 400);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          case 5:
            cantidadProductos("Barras", 1000);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          case 6:
            cantidadProductos("Colchonetas", 150);
            bandera = confirm("¿Quiere seguir comprando?");
            break;
          default:
            alert("Ese producto no existe");
            break;
        }
        break;
      case 2:
        if (Carrito.length > 0) {
          mostradorCarrito();
        }else {
            alert("Primero debes agregar un producto");
        }
        bandera = confirm("¿Quiere volver al menu?");
        break;
      case 3:
        if (Carrito.length > 0) {
          medioDePago();
        }else {
            alert("Primero debes agregar un producto");
        }
        bandera = confirm("¿Quiere volver al menu?");
        break;
      case 4:
        bandera = !confirm("Gracias por todo! Adiós");
        break;
      default:
        alert("No existe esa opción");
        break;
    }

    if (bandera) {
      menu1 = Number(prompt(msgPrompt));

      while (isNaN(menu1)) {
        alert("Opción no válida");
        menu1 = Number(prompt(msgPrompt));
      }
    }
  }
}

inicio();
