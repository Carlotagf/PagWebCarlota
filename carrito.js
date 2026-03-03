let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();

      /*if (window.adobe && adobe.target && adobe.target.trackEvent) {
    adobe.target.trackEvent({
        mbox: "numcompras",
        params: { purchase: "true" },
        success: function() { console.log("TrackEvent enviado"); },
        error: function(status, error) { console.error("Error TrackEvent", status, error); }
    });
} else {
    console.warn("at.js no está listo aún");
}
}*/

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