let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();

    adobe.target.trackEvent({
        mbox: "actualizar-perfil",
        params: {
            "profile.numCompras": "true"
    }
    });
    


function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - ${producto.precio} €`;
        lista.appendChild(li);
    });

    totalTexto.textContent = `${total} €`;
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    mostrarCarrito();
}
}

