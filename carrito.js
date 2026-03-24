(function() {
    var key = "popup_shown_count";
    var maxShows = 3;

    var count = localStorage.getItem(key);

    if (!count) {
        count = 0;
    } else {
        count = parseInt(count, 10);
    }

    
    window.targetPageParams = function() {
        return {
            "popupCount": count
        };
    };

    if (count < maxShows) {
        localStorage.setItem(key, count + 1);
    }
})();

let carrito = []; 
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();

    
    /*
    let comprasAnteriores = parseInt(localStorage.getItem("userPurchased")) || 0;
    comprasAnteriores += 1;
    localStorage.setItem("userPurchased", comprasAnteriores);
    console.log("Total de compras del usuario:", comprasAnteriores); 
    */

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





