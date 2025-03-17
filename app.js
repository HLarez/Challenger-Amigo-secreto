let amigos = [];
const namePattern = /^[A-Za-z\s]+$/;

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (!namePattern.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios.');
        return;
    }
    
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Este nombre ya ha sido agregado.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }
    
    let ganador = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${ganador}</strong></li>`;
}