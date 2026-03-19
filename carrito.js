let carrito = []; 
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();

    
    let comprasAnteriores = parseInt(localStorage.getItem("userPurchased")) || 0;
    comprasAnteriores += 1;
    localStorage.setItem("userPurchased", comprasAnteriores);
    console.log("Total de compras del usuario:", comprasAnteriores);

}


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


window.onload = function() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    const totalGuardado = parseFloat(localStorage.getItem("total"));

    if (carritoGuardado && totalGuardado) {
        carrito = carritoGuardado;
        total = totalGuardado;
        mostrarCarrito();
    }
};


